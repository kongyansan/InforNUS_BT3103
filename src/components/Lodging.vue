<template>
<body>
  <div class="select">
    <b-jumbotron text-variant="white" class="jumbo">
      <template slot="header" class="text-center">Select your preferred lodging type:</template>
      <br/>
      <div class="test text-center">
        <div class="filter">
          <label class="options">
            <input type="radio" v-model="selectedCategory" value="All">
            All
          </label>
          <label class="options">
            <input type="radio" v-model="selectedCategory" value="hall">
            Halls
          </label>
          <label class="options">
            <input type="radio" v-model="selectedCategory" value="college">
            Residential College
          </label>
          <label class="options">
            <input type="radio" v-model="selectedCategory" value="PGP">
            PGP
          </label>
        </div>
      </div>
    </b-jumbotron>
  </div>
  <div class = "row">
    <div class = "col-md-4 text-center" v-for="lodg in filteredLodging" v-bind:key="lodg.name">
      <router-link v-bind:to="{name:'lodgingDashboard', params: {lodging_name: lodg.name}}">
            <img v-bind:src="lodg.img" style="width:100%">
            <h4>{{ lodg.name }}</h4>
          </router-link>
    </div>
  </div>
</body>
</template>

<script>
class Lodging {
  constructor(name, cat, img) {
    this.name = name.toLowerCase();
    this.cat = cat;
    this.img = img;
  }
}
export default {
  name: "halls",
  data() {
    return {
      //search: "",
      lodgings: [
        new Lodging(
          "Temasek Hall",
          "hall",
          require("../assets/temasekhall.jpg")
        ),
        new Lodging(
          "Raffles Hall",
          "hall",
          require("../assets/raffleshall.jpg")
        ),
        new Lodging("Eusoff Hall", "hall", require("../assets/eusoffhall.jpg")),
        new Lodging(
          "Kent Ridge Hall",
          "hall",
          require("../assets/kentridgehall.jpg")
        ),
        new Lodging(
          "Sheares Hall",
          "hall",
          require("../assets/sheareshall.jpg")
        ),
        new Lodging(
          "King Edward Hall",
          "hall",
          require("../assets/kingedwardhall.jpg")
        ),
        new Lodging("Tembusu", "college", require("../assets/tembusu.jpg")),
        new Lodging(
          "College of Alice and Peter Tan",
          "college",
          require("../assets/capt.jpg")
        ),
        new Lodging("RC4", "college", require("../assets/rc4.jpg")),
        new Lodging(
          "Cinnamon College",
          "college",
          require("../assets/USP.jpg")
        ),
        new Lodging(
          "Ridge View Residential College",
          "college",
          require("../assets/rvrc.jpg")
        ),
        new Lodging("PGP", "PGP", require("../assets/PGP.jpg"))
      ],
      selectedCategory: "All"
    };
  },
  computed: {
    filteredLodging: function() {
      var vm = this;
      var category = vm.selectedCategory;

      if (category === "All") {
        return vm.lodgings;
      } else {
        return vm.lodgings.filter(function(lodg) {
          return lodg.cat === category;
        });
      }
    }
  }
};
</script>

<style>
.jumbo {
  padding-top: 100px;
  background-color: #EF7C00;
  width: full;
}
.options {
  padding-right: 80px;
}

.row{
  padding-right:20px;
  padding-left:20px;
}
</style>
