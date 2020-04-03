<template>
  <div class="page">
    <div>
      <h5>
        This page is based on
        <a href="https://github.com/NovelCOVID/API">NovelCovid API</a>
        which use
        <a href="https://www.worldometers.info/">worldometers</a> as datasource
      </h5>
    </div>
    <div class="btn--container">
      <b-btn @click="getCoVidData" variant="outline-danger">update SARS-CoV2</b-btn>
    </div>
    <div class="loader--container">
      <img
        v-if="loading"
        class="loader"
        :class="{'loading': loading}"
        src="@/assets/images/pacman_loader.svg"
      />
      <p>Fetching Data</p>
    </div>

    <div id="global--data">
      <h2 class="text-center">Global Data</h2>
      <div class="stats--container">
        <p>Total number of cases: {{globalData.cases}}</p>
        <p>Death toll : {{globalData.deaths}}</p>
        <p>Still Active cases: {{globalData.active}}</p>
        <p>Total number of recovered: {{globalData.recovered}}</p>
      </div>
      <p v-if="globalData" class="text-center">Last updated : {{fomratTime(globalData.updated)}}</p>
    </div>

      <app-actual-data 
        :name="selectedName"
        :url="selectedUrl"
        :cases="selectedTodayCases"
        :deaths="selectedTodayDeaths"
        :critical="selectedLastCritical"
        :active="selectedLastActive"
        :recovered="selectedRecovered"
        :totalCases="selectedTotalCases">
      </app-actual-data>


    <client-only>
      <portolio-chart v-if="histo_loaded" :chartData="histo" :options="options"></portolio-chart>
    </client-only>
    <!-- <mapbox
      :access-token="access_token"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [0, 0],
        zoom: 1
        }"
    ></mapbox>-->
    <div class="tableWrap" v-if="countries != null">
      <div class="container table">
        <input type="text" placeholder="Search Country" v-model="search" class="search" />
        <b-btn
          variant="outline-warning"
          :disabled="filteredTable.length != 1"
          @click="getHisto"
        >See historical data for this country</b-btn>
        <table>
          <tbody v-if="countries">
            <tr>
              <th>Country</th>
              <th class="large">Today Cases</th>
              <th class="large">Today Deaths</th>
              <th class="large">Ratio critical / active</th>
              <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>
            </tr>
            <tr
              v-for="country in filteredTable"
              :key="country.country"
              @click="showHistory(country)"
            >
              <td>{{ country.country }}</td>
              <td class="large">{{ country.todayCases }}</td>
              <td class="large">{{ country.todayDeaths }}</td>
              <td class="large">({{formatPercentage(country.critical/country.active)}})</td>
              <td>{{ country.cases }}</td>
              <td>{{ country.deaths }}</td>
              <td>{{ country.recovered }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
const covid = require("novelcovid");
import AppActualData from '@/components/Covid/ActualData'
// import Mapbox from "mapbox-gl-vue";
import moment from "moment";
import axios from "axios";
export default {
  components: {
    AppActualData,
    // Mapbox
  },
  data() {
    return {
      loading: false,
      histo_loaded: false,
      selected: false,
      globalData: {},
      countries: [],
      histo: {},
      options: { responsive: true },
      search: "",
      selectedName: "",
      selectedUrl: "",
      selectedTodayCases:0,
      selectedTodayDeaths:0,
      selectedLastCritical:0,
      selectedLastActive:0,
      selectedRecovered:0,
      selectedTotalCases:0,
      // access_token:
      //   "pk.eyJ1IjoiY2FuZ3VpbGhlbSIsImEiOiJjazhhZjdxODYwMWgxM2duenZyajlmb2M5In0.-g6SKaL5YseQ0ER8_CamAw"
    };
  },
  async asyncData(context) {
    if (
      context.store.state.covidCountries &&
      context.store.state.covidCountries.length > 0
    ) {
      return { countries: context.store.state.covidCountries };
    } else {
      try {
        let countries = await covid.getCountry();
        context.store.commit("SET_COUNTRIES", countries);
        let data = await covid.all();
        return {
          countries: countries,
          globalData: data
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    async getCoVidData() {
      this.loading = true;
      try {
        let countries = await covid.getCountry();
        let data = await covid.getAll();
        console.log(data);
        console.log(countries);

        this.globalData = data;
        this.countries = countries;
      } catch (error) {
        console.log("Call to covid third party API went wrong..", error);
      }
      this.loading = false;
    },
    async getHisto() {
      try {
        this.loading = true;
        this.histo_loaded = false;
        let histo = await axios.get(
          `https://corona.lmao.ninja/v2/historical/${this.search}`
        );

        let histoData = {
          labels: Object.keys(histo.data.timeline.cases),
          datasets: [
            {
              label: "Cases",
              backgroundColor: "rgba(220,53,69,0.5)",
              borderColor: "rgb(220,53,69)",
              borderWidth: 3,
              data: Object.values(histo.data.timeline.cases),
              barThickness: "25",
              padding: "5"
            },
            {
              label: "Deaths",
              backgroundColor: "rgba(26,159,255,0.5)",
              borderColor: "rgb(26,159,255)",
              borderWidth: 3,
              data: Object.values(histo.data.timeline.deaths),
              barThickness: "flex"
            },
            {
              label: "Recovered",
              backgroundColor: "rgba(40,167,69,0.5)",
              borderColor: "rgb(40,167,69)",
              borderWidth: 3,
              data: Object.values(histo.data.timeline.recovered),
              barThickness: "flex"
            }
          ]
        };
        this.histo = histoData;

        this.histo_loaded = true;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    showHistory(country) {
      this.selected = true
      this.selectedName = country.country
      this.selectedLastActive =  country.active
      this.selectedUrl = country.countryInfo.flag
      this.selectedTodayCases = country.todayCases
      this.selectedLastCritical =  country.critical
      this.selectedTodayDeaths = country.todayDeaths
      this.selectedTotalCases = country.cases
      this.selectedRecovered = country.recovered
      console.log("selected: ",country);
      return
    },
    fomratTime(value) {
      return moment(value);
    },
    formatPercentage(value) {
      return `${Math.round(value * 10000) / 100}%`;
    }
  },
  computed: {
    filteredTable() {
      return this.countries.filter(country => {
        return country.country.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>
<style scoped lang="scss">
.loader {
  position: absolute;
  left: 13%;
  top: 175px;
}
a {
  text-decoration: underline;
}
#global--data {
  width: 600px;
  color: var(--main-color4) !important;
  margin: 45px auto;
}
.text-center {
  color: var(--orange);
}
input {
  width: 45%;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 30px;
}
.btn--container {
  position: relative;
  z-index: 1;
}
button {
  // display: block;
  padding: 10px 40px;
  text-transform: uppercase;
  // color: var(--main-color3);
  border-radius: 20px;
  height: 58px;
}
.table {
  color: var(--main-color2);
}
tr:hover {
  background-color: lighten($color: #000000, $amount: 15);
  color: var(--success);
}
.stats--container {
  display: grid;
  grid-template-columns: auto auto;
}
#map {
  width: 500;
  height: 500px;
  margin: auto;
}

@media screen and (max-width: 500px) {
  h5 {
    line-height: 50px;
  }
  input {
    margin-left: 3%;
  }
  .loader--container,
  .btn--container {
    text-align: center;
  }
  .loader--container {
    img {
      position: initial;
    }
  }
  #global--data {
    width: auto;
    .stats--container {
      display: block;
    }
  }
  .tableWrap {
    margin-left: -40px;
    tbody {
      font-size: 0.9rem;
    }
    .large {
      display: none;
    }
  }
}
</style>