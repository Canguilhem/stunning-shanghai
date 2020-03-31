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
      <button @click="getCoVidData">update SARS-CoV2</button>
    </div>
    <div class="loader--container">
      <img
        v-if="loading"
        class="loader"
        :class="{'loading': loading}"
        src="@/assets/images/pacman_loader.svg"
      />
    </div>

    <div id="global--data">
      <h2 class="text-center">Global Data</h2>
      <div class="stats--container">
        <p>Total number of cases: {{globalCases}}</p>
        <p>Death toll : {{globalDeaths}}</p>
        <p>Still Active cases: {{globalActive}}</p>
        <p>Total number of recovered: {{globalRecovered}}</p>
      </div>
      <p v-if="globalCases > 0" class="text-center">Last updated : {{fomratTime(updated)}}</p>
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
        <tr>
          <th>Country</th>
          <th class="large">Today Cases</th>
          <th class="large">Today Deaths</th>
          <th class="large">Ratio critical / active</th>
          <th>Total Cases</th>
          <th>Total Deaths</th>
          <th>Total Recovered</th>
        </tr>
        <tbody>
          <tr v-for="country in filteredTable" :key="country.country">
            <td>{{ country.country }}</td>
            <td class="large">{{ country.todayCases }}</td>
            <td class="large">{{ country.todayDeaths }}</td>
            <td class="large">({{formatPercentage(country.critical/country.active)}})</td>
            <td>{{ country.cases }}</td>
            <td>{{ country.deaths }}</td>
            <td>{{ country.recovered }}</td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>
<script>
const covid = require("novelcovid");
import Mapbox from "mapbox-gl-vue";
import moment from "moment";
export default {
  components: {
    Mapbox
  },
  data() {
    return {
      loading: false,
      globalCases: 0,
      globalDeaths: 0,
      globalRecovered: 0,
      updated: 0,
      globalActive: 0,
      countries: [],
      search: "",
      access_token:
        "pk.eyJ1IjoiY2FuZ3VpbGhlbSIsImEiOiJjazhhZjdxODYwMWgxM2duenZyajlmb2M5In0.-g6SKaL5YseQ0ER8_CamAw"
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
        let data = await covid.getAll();
        return { 
          countries: countries,
          globalCases: data.cases,
          globalDeaths: data.deaths,
          globalRecovered: data.recovered,
          updated: data.updated,
          globalActive: data.active
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

        (this.globalCases = data.cases),
          (this.globalDeaths = data.deaths),
          (this.globalRecovered = data.recovered),
          (this.updated = data.updated),
          (this.globalActive = data.active),
          (this.countries = countries);
      } catch (error) {
        console.log("Call to covid third party API went wrong..");
      }
      this.loading = false;
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
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 30px;
}
button {
  // display: block;
  padding: 10px 40px;
  text-transform: uppercase;
  color: var(--main-color3);
  border-radius: 30px;
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