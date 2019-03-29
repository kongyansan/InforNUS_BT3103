<template>
<body>
  <div class="header text-center">
    <h1>{{this.lodging_name}}</h1>
  </div>

  <div class="containers">
    <div class="title-header">
      <h3>Faculty related</h3>
    </div>
    <br>
    <b-row>
      <b-col class="text-center">
        <h4>Faculty Breakdown</h4>
        <pie-chart :data="this.getFacultyBreakdown"></pie-chart>
      </b-col>
      <b-col class="text-center">
        <h4>Average Travelling Time</h4>
        <bar-chart :data="this.getTravellingTime" label="Value"></bar-chart>
      </b-col>
    </b-row>
    <br>
  </div>

  <div class="containers">
    <div class="title-header">
      <h3>Cost</h3>
    </div>
    <br>
    <b-row>
      <b-col class="text-center">
        <h4>Fees and Room type</h4>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <table style="width:100%" class="price-table">
          <tr>
            <th>Items to be paid</th>
            <th>Price</th>
          </tr>
          <tr v-for="row in this.getLodgingInfo2" v-bind:key="row.id">
            <td>{{row.id}}</td>
            <td>{{row.value}}</td>
          </tr>
        </table>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br>
    <br>
  </div>

  <div class="containers">
    <div class="title-header">
      <h3>Reviews</h3>
    </div>
    <br>
    <b-row class="review-row">
      <b-col class="text-center">
        <h4>Good Review</h4>
        <div class="lodging_dashboard">
          <wordcloud
            :data="this.getGoodReviews"
            nameKey="name"
            valueKey="value"
            :color="myColors"
            :showTooltip="false"
          ></wordcloud>
        </div>
      </b-col>
      <b-col class="text-center">
        <h4>Bad Review</h4>
        <div class="lodging_dashboard">
          <wordcloud
            :data="this.getBadReviews"
            nameKey="name"
            valueKey="value"
            :color="myColors"
            :showTooltip="false"
          ></wordcloud>
        </div>
      </b-col>
    </b-row>
  </div>
</body>
</template>

<script>
import Vue from "vue";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
import db from "@/firebase.js";
// https://github.com/feifang/vue-wordcloud
import wordcloud from "vue-wordcloud";

Vue.use(VueChartkick, { adapter: Chart });

export default {
  name: "lodgingDashboard",
  firebase: {
    student_lodging_info: db.ref("student_lodging_info/data"),
    lodging_info: db.ref("lodging_info/data")
  },
  components: {
    wordcloud
  },

  created() {
    this.lodging_name = this.$route.params.lodging_name.toLowerCase();
  },
  data() {
    return {
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"]
    };
  },
  computed: {
    getFacultyBreakdown() {
      let ans = {};
      for (var student of this.student_lodging_info) {
        if (!(student.home_faculty in ans)) {
          ans[student.home_faculty] = 0;
        }
        ans[student.home_faculty] += 1;
      }
      return ans;
    },
    getTravellingTime() {
      let ans = {};
      var test = [];
      var faculties = [
        "School of Business",
        "Engineering",
        "Faculty of Science",
        "Faculty of Arts and Social Sciences",
        "School of Computing"
      ];
      for (var lodging of this.lodging_info) {
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          for (var fac of faculties) {
            ans[fac] = lodging[fac];
            test.push([fac, lodging[fac]]);
          }
        }
      }
      return test;
    },
    getGoodReviews() {
      var ans = {};
      var defaultWords = [];
      for (var lodging of this.lodging_info) {
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          for (var goodcomments of lodging.good_reviews) {
            if (!(goodcomments in ans)) {
              ans[goodcomments] = 0;
            }
            ans[goodcomments] += 1;
          }
        }
      }
      for (var comment of Object.keys(ans)) {
        defaultWords.push({ name: comment, value: ans[comment] });
      }
      return defaultWords;
    },
    getBadReviews() {
      var ans = {};
      var defaultWords = [];
      for (var lodging of this.lodging_info) {
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          for (var badcomments of lodging.bad_reviews) {
            if (!(badcomments in ans)) {
              ans[badcomments] = 0;
            }
            ans[badcomments] += 1;
          }
        }
      }

      for (var comment of Object.keys(ans)) {
        defaultWords.push({ name: comment, value: ans[comment] });
      }

      return defaultWords;
    },
    getLodgingInfo2() {
      var test = [];
      var ans = {};
      for (var lodging of this.lodging_info) {
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          test.push({
            id: "Double Room with Air Con",
            value: lodging.Type_Of_Rooms.Double_AC
          });
          test.push({
            id: "Double Room without Air Con",
            value: lodging.Type_Of_Rooms.Double_No_AC
          });
          test.push({
            id: "Single Room with Air Con",
            value: lodging.Type_Of_Rooms.Single_AC
          });
          test.push({
            id: "Single Room without Air Con",
            value: lodging.Type_Of_Rooms.Single_No_AC
          });
          test.push({ id: "Meal Plan", value: lodging.meal_plan });
        }
      }
      return test;
    }
  }
};
</script>

<style>
.header {
  padding-top: 72px;
  padding-bottom: 10px;
  background-color: #EF7C00;
}

.title-header {
  background-color: #D3D3D3;
  padding-top: 5px;
  padding-bottom: 5px;
  width: full;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #E6E6E6;
}

.lodging_dashboard {
  border: 1px solid #dddddd;
}

.review-row {
  padding: 7px;
}
</style>