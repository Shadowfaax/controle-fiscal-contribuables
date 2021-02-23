<template>
  <div id="app">
    <h1>Contrôle fiscal des contribuables</h1>
    <h2>Rechercher un contribuable</h2>
    <div class="form-block">
      <input type="text" placeholder="Nom" name="" v-model="searchName" />
      <button @click="searchByName()" id="btn-name">Rechercher</button>
    </div>
    <div class="form-block">
      <input type="text" placeholder="SPI" name="" v-model="searchSPI" />
      <button @click="searchBySPI()" id="btn-spi">Rechercher</button>
    </div>

    <div class="search-type">Recherche par : {{ type }}</div>

    <ContribuableList :cdata="cdata" />
  </div>
</template>

<script>
import ContribuableList from "./components/ContribuableList.vue";

export default {
  name: "ControleFiscalDesContribuables",
  components: {
    ContribuableList
  },
  data: function() {
    return {
      cdata: [],
      type: "nom",
      searchName: "",
      searchSPI: ""
    };
  },
  computed: {
    storeData() {
      return this.$store.getters.getCData;
    }
  },
  methods: {
    searchBySPI: function() {
      this.type = "spi";
      this.cdata = this.storeData
        .filter(data =>
          data.spi.toLowerCase().includes(this.searchSPI.toLowerCase())
        )
        .sort((a, b) => {
          return a.spi - b.spi;
        });
    },
    searchByName: function() {
      this.type = "nom";
      this.cdata = this.storeData
        .filter(data =>
          data.nom.toLowerCase().includes(this.searchName.toLowerCase())
        )
        .sort((a, b) => {
          let comparison = 0;

          if (a.nom > b.nom) {
            comparison = 1;
          } else if (a.nom < b.nom) {
            comparison = -1;
          }
          return comparison;
        });
    }
  },
  created: function() {
    this.cdata = this.storeData;
  }
};
</script>

<style>
* {
  transition: opacity ease 0.3s, filter ease 0.3s;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.1rem;
  color: #555555;
}
html,
body {
  margin: 0;
  height: 100%;
}
body {
  background-color: #f0f0f0;
}
#app {
  margin: 0 auto;
  padding: 30px 50px;
  width: 1020px;
  min-height: 100%;
  background-color: #e3e3e3;
}

h1 {
  padding: 6px 6px;
  font-size: 1.7rem;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 40px 0;
  color: #ffffff;
  background-color: #f08822;
  border-radius: 4px;
}
input,
button {
  display: inline-block;
  margin: 12px 6px;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #ffffff;
  border: none;
}
button:hover {
  cursor: pointer;
  opacity: 0.7;
}
button {
  background-color: #44ccff;
  color: #ffffff;
}
.search-type {
  margin: 10px 0 0 10px;
}
</style>
