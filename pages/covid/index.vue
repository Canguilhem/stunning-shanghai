<template>
  <div class="page">
    <!-- <div>
      <h5>
        This page is based on
        <a href="https://github.com/NovelCOVID/API">NovelCovid API</a>
        which use
        <a href="https://www.worldometers.info/">worldometers</a> as datasource
      </h5>
    </div>-->

    <div v-if="loading" class="loader--container">
      <img class="loader" :class="{'loading': loading}" src="@/assets/images/pacman_loader.svg" />
      <p class="fetch--text">Fetching Data</p>
    </div>

    <div id="global--data" v-if="globalData != null">
      <h2 class="text-center">Worldwide Data</h2>
      <div class="stats--container">
        <p>Cases: {{globalData.cases}}</p>
        <p>Death toll : {{globalData.deaths}}</p>
        <p>Active : {{globalData.active}}</p>
        <p>Recovered: {{globalData.recovered}}</p>
      </div>
      <p class="text-center">Last updated : {{fomratTime(globalData.updated)}}</p>
    </div>

    <app-actual-data
      v-if="selectedCountry.name && !selectedCountry.error"
      :country="selectedCountry"
    ></app-actual-data>
    <div class="histo--container">
      <!-- <client-only>
        <portolio-chart v-if="histo_loaded" :chartData="histo" :options="options"></portolio-chart>
      </client-only>-->
    </div>
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
        <b-btn @click="getCoVidData" variant="danger">Get Last Data</b-btn>
        <table>
          <tbody v-if="countries">
            <tr>
              <th>Country</th>
              <!-- <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>-->
            </tr>
            <tr
              v-for="country in filteredTable"
              :key="country.country"
              @click="showSpecificCountry(country)"
            >
              <td>{{ country.country }}</td>
              <!-- <td>{{ country.cases }}</td>
              <td>{{ country.deaths }}</td>
              <td>{{ country.recovered }}</td>-->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
const covid = require("novelcovid");
import AppActualData from "@/components/Covid/ActualData";
import * as ss from "simple-statistics";
// import Mapbox from "mapbox-gl-vue";
import moment from "moment";
import axios from "axios";
export default {
  components: {
    AppActualData
    // Mapbox
  },
  data() {
    return {
      historic: {},
      loading: false,
      histo_loaded: false,
      selected: false,
      globalData: {},
      countries: [],
      // histo: {},
      options: {
        title: {
          display: true,
          fontColor: "white"
        },
        legend: {
          position: "top",
          labels: {
            fontColor: "white"
          }
        },
        responsive: true,
        responsiveAnimationDuration: 500
      },
      search: "",
      selectedCountry: {}
      // access_token:
      //   "pk.eyJ1IjoiY2FuZ3VpbGhlbSIsImEiOiJjazhhZjdxODYwMWgxM2duenZyajlmb2M5In0.-g6SKaL5YseQ0ER8_CamAw"
    };
  },
  async asyncData(context) {
    console.log("getting data from store in advance");
    if (
      context.store.state.covidCountries &&
      context.store.state.covidCountries.length > 0
    ) {
      return { countries: context.store.state.covidCountries };
    } else {
      try {
        let countries = await covid.getCountry(null, "cases");
        context.store.commit("SET_COUNTRIES", countries);
        let data = await covid.all();
        return {
          countries,
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
        let countries = await covid.getCountry(null, "cases");
        let data = await covid.getAll();
        this.globalData = data;
        this.countries = countries;
      } catch (error) {
        console.log("Call to covid third party API went wrong..", error);
      }
      this.loading = false;
    },
    async showSpecificCountry(country) {
      console.log(country);
      this.options.title.text = `Historical data for ${country.country}`;
  
      this.selectedCountry = {
        name: country.country,
        active: country.active,
        flag: country.countryInfo.flag,
        todayCases: country.todayCases,
        todayCritical: country.critical,
        todayDeaths: country.todayDeaths,
        cases: country.cases,
        tests: country.tests,
        deaths: country.deaths,
        recovered: country.recovered
      };

      let {data} = await this.$axios.get(
          `https://corona.lmao.ninja/v2/historical/${country.country}?lastdays=all`
      );
      this.selectedCountry.timeline = data;


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
.loader--container {
  position: absolute;
  left: 53%;
  .loader {
    position: absolute;
    top: 30px;
    left: 0;
  }
}

.histo--container {
  width: 500px;
  height: 500px;
}
a {
  text-decoration: underline;
}
#global--data {
  width: 600px;
  color: var(--main-color4) !important;
  // margin: 45px auto;
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
.tableWrap {
  position: fixed;
  right: 0;
  top: 10%;
  overflow-y: scroll;
  height: 100%;
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
  width: 487px;
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