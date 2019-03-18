<template>
  <body>
    <div class="container">
      <div class="filter">
        <label
          ><input type="radio" v-model="selectedCategory" value="All" />
          All</label
        >
        <label
          ><input type="radio" v-model="selectedCategory" value="hall" />
          Halls</label
        >
        <label
          ><input type="radio" v-model="selectedCategory" value="college" />
          Residential College</label
        >
        <label
          ><input type="radio" v-model="selectedCategory" value="PGP" />
          PGP</label
        >
      </div>
    </div>
    <div class="wrapper">
      <div class="card" v-for="lodg in filteredLodging">
        <div class="column">
          <img v-bind:src="lodg.img" style="width:100%" />
          <h4>{{ lodg.name }}</h4>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
class Lodging {
  constructor(name, cat, img) {
    this.name = name;
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
          "Temsaek Hall",
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
body {
  background-color: #f1f1f1;
  //padding: 20px;
  font-family: Arial;
}
/*.wrapper {
  padding: 30px;
}*/
.column {
  float: left;
  width: 33.33%;
}
/*.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  //width: 33.3%;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    //padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    img {
      height: 100px;
    }
    h4 {
      font-size: 10px;
      padding: 4px;
    }
  }
}*/
</style>
