import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cdata: [
      {
        nom: "Marcellus VonRueden DDS",
        prenom: "Miss Laurine Beahan",
        situation: "Célibataire",
        adresse: "Port Donniefurt, Heidenreich Court, 54288",
        spi: "9956524800"
      },
      {
        nom: "Abby Upton IV",
        prenom: "Jairo McCullough",
        situation: "En union",
        adresse: "East Lake Christophe, Zieme Walks, 6114",
        spi: "4124801"
      },
      {
        nom: "Americo MacGyver",
        prenom: "Oswaldo Rutherford",
        situation: "Célibataire",
        adresse: "West Ricefurt, Wilhelmine Burg, 46155",
        spi: "6524802"
      },
      {
        nom: "Mrs. Vanessa Heathcote",
        prenom: "Kathlyn Purdy II",
        situation: "Divorcé",
        adresse: "East Emoryhaven, Garret Drive, 88985",
        spi: "17424803"
      },
      {
        nom: "Cooper Conroy",
        prenom: "Katelyn Koss",
        situation: "Célibataire",
        adresse: "West Precioustown, Krystal Bridge, 15936",
        spi: "835652404"
      },
      {
        nom: "Alvina Glover",
        prenom: "Al McCullough",
        situation: "En union",
        adresse: "New New Susie, Reba Track, 68741",
        spi: "7856524805"
      },
      {
        nom: "Aubree Maggio",
        prenom: "Ashton Cummerata",
        situation: "Célibataire",
        adresse: "New Jonesmouth, Hettinger Dam, 2980",
        spi: "27564806"
      },
      {
        nom: "Lucie Keeling",
        prenom: "Ms. Patsy Reilly",
        situation: "En union",
        adresse: "West Clintonberg, Bobbie Vista, 58655",
        spi: "6524807"
      },
      {
        nom: "Ida Carroll",
        prenom: "Treva Swift",
        situation: "Divorcé",
        adresse: "Port North Rodgerton, Forrest Ports, 96079",
        spi: "524808"
      },
      {
        nom: "Cristal Bartell Jr.",
        prenom: "Gillian Graham",
        situation: "En union",
        adresse: "West South Olga, Veum Forge, 38000",
        spi: "145652809"
      },
      {
        nom: "Gerda Purdy",
        prenom: "Guiseppe McLaughlin III",
        situation: "En union",
        adresse: "South Jonasbury, Schaden Point, 48326",
        spi: "5515248010"
      },
      {
        nom: "Enola Stokes",
        prenom: "Hoyt Moen",
        situation: "En union",
        adresse: "New West Mylenefurt, Smith Ville, 97802",
        spi: "7516528011"
      },
      {
        nom: "Miss Barney Heaney",
        prenom: "Adolfo Kassulke",
        situation: "Célibataire",
        adresse: "East Turcottefort, Zboncak Highway, 50957",
        spi: "6965248012"
      },
      {
        nom: "Trevor Carter",
        prenom: "Keshaun Bartoletti",
        situation: "En union",
        adresse: "North South Annalise, Pacocha Turnpike, 85274",
        spi: "635652480"
      },
      {
        nom: "Jade Romaguera",
        prenom: "Lizzie Maggio",
        situation: "En union",
        adresse: "Lake Port Misaelbury, Maia Vista, 19162",
        spi: "565248014"
      },
      {
        nom: "Stephon Friesen",
        prenom: "Francesca Flatley",
        situation: "Célibataire",
        adresse: "North Watsicashire, Rippin Via, 45542",
        spi: "425524823"
      },
      {
        nom: "Iva Jakubowski",
        prenom: "Arlie Koelpin",
        situation: "En union",
        adresse: "East East Orval, Malachi Shore, 70566",
        spi: "5465248016"
      },
      {
        nom: "Berniece Schulist",
        prenom: "Maynard Armstrong",
        situation: "En union",
        adresse: "West Lake Elmerton, Chadrick Oval, 3884",
        spi: "3565248017"
      },
      {
        nom: "Mozelle Bechtelar",
        prenom: "Ms. Kennedy Kessler",
        situation: "En union",
        adresse: "Lake Rollinmouth, Maia Field, 23755",
        spi: "74956524"
      },
      {
        nom: "Jerad O'Hara",
        prenom: "Kenyon Wiegand",
        situation: "Divorcé",
        adresse: "Port Lake Reecechester, Reinger Plain, 67814",
        spi: "351765219"
      }
    ]
  },
  getters: {
    getCData: state => {
      return state.cdata; // .filter(cdata => cdata.spi.includes(spi))
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
