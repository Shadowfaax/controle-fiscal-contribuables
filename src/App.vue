<template>
  <div id="app">
    <h1>Contrôle fiscal des contribuables</h1>
    <div class="form-block">
      <input type="text" placeholder="Nom" name="" v-model="searchName" />
      <button id="btn-name">Rechercher</button>
    </div>
    <div class="form-block">
      <input type="text" placeholder="SPI" name="" v-model="searchSPI" />
      <button id="btn-spi">Rechercher</button>
    </div>

    <ContribuableList :data="cdata" />
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
      cdata: {},
      ctype: "nom"
    };
  }
};
</script>

<style>
* {
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
h1 {
  font-size: 2rem;
  text-transform: uppercase;
  margin: 20px 0 60px 0;
}
#app {
  margin: 0 auto;
  padding: 50px;
  width: 920px;
  min-height: 100%;
  background-color: #e3e3e3;
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
button {
  background-color: #44ccff;
  color: #ffffff;
}
</style>
