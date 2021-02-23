<template>
  <div class="contribuable-list">
    <div class="line thead">
      <div class="col" style="flex: 0 0 20%">Nom</div>
      <div class="col" style="flex: 0 0 20%">Prenom</div>
      <div class="col" style="flex: 0 0 20%">Situation</div>
      <div class="col" style="flex: 0 0 20%">Adresse</div>
      <div class="col" style="flex: 0 0 20%">SPI</div>
    </div>
    <div class="line" v-for="(obj, index) in cdata" :key="index">
      <div class="col" style="flex: 0 0 20%">{{ obj.nom }}</div>
      <div class="col" style="flex: 0 0 20%">{{ obj.prenom }}</div>
      <div class="col" style="flex: 0 0 20%">{{ obj.situation }}</div>
      <div class="col" style="flex: 0 0 20%">{{ obj.adresse }}</div>
      <div class="col" style="flex: 0 0 20%">{{ obj.spi }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContribuableList",
  props: {
    cdata: Array
  }
};
</script>

<style scoped>
.contribuable-list {
  margin: 20px 0 0 0;
}
.line {
  display: flex;
  flex-flow: row nowrap;
}
.col {
  padding: 4px 10px;
  margin: 1px 1px;
  font-size: 0.7rem;
  background-color: #f5f5f5;
}
.thead .col {
  padding: 8px 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  background-color: #4455f5;
}
</style>
