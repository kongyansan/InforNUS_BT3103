<template>
  <div id="app">
    <section class="container">
      <h1>Name of College</h1>
      <div class="columns">
        <div class="column">
          <h3>Faculty Breakdown</h3>
          <pie-chart :data="this.getFacultyBreakdown"></pie-chart>
        </div>
        <div class="column">
          <h3>Average Travelling Time</h3>

          <bar-chart :data="this.getTravellingTime" label="Value"></bar-chart>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h3>Good Review</h3>
          <div id="lodging_dashboard">
            <wordcloud
              :data="this.getGoodReviews"
              nameKey="name"
              valueKey="value"
              :color="myColors"
              :showTooltip="false"
            ></wordcloud>
          </div>
        </div>
        <div class="column">
          <h3>Bad Review</h3>
          <div id="lodging_dashboard">
            <wordcloud
              :data="this.getBadReviews"
              nameKey="name"
              valueKey="value"
              :color="myColors"
              :showTooltip="false"
            ></wordcloud>
          </div>
        </div>

        <div class="column">
          <h3>Fees and Room type</h3>
          <table style="width:100%">
            <tr>
              <th>Items to be paid</th>
              <th>Price</th>
            </tr>
            <tr v-for="row in this.getLodgingInfo2" v-bind:key="row.id">
              <td>{{row.id}}</td>
              <td>{{row.value}}</td>
            </tr>
          </table>
        </div>

        <!-- <div class="column">
    <div style = "margin-left: 620px;"> 
    <h4>Lodging_Info</h4>
    <table id="LodgeTable">
      <thead>
        <tr>
          <th style="width:25%;">Lodging Types</th>
          <th style="width:25%;">Compulsory Meal Plan (Yes/No) </th>
          <th style="width:25%;">Average Price</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, item_index) in itemList" :key="item.name">
            <td>{{ item.name }}</td>
            <td v-for="(day, day_index) in days" @click="alert(item_index, day_index)">Click</td>
          </tr>
        <tr v-for="(value,key) in this.jobInfo" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
        </div>-->
        <!-- <div class="column">
          <h3>Downloadable Line Chart</h3>
          <line-chart :data="chartData" :download="true"></line-chart>
        </div>-->
      </div>
    </section>
  </div>
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
        //   console.log(lodging["School of Business"])
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          for (var fac of faculties) {
            // console.log(Number(lodging.fac) )
            ans[fac] = lodging[fac];
            // if ( fac=="Faculty of Arts and Social Science"){
            //     test.push([,Number(lodging[fac])])
            // }
            test.push([fac, lodging[fac]]);
          }
        }
      }
      //   console.log(test)
      return test;
    },
    getGoodReviews() {
      var ans = {};
      var defaultWords = [];
      //   console.log( (Object.values(this.lodging_info ) ))
      for (var lodging of this.lodging_info) {
        //   console.log( (lodging.lodging_name +"wtf" ) )
        if (lodging.lodging_name.toLowerCase() == this.lodging_name) {
          // console.log( (lodging.good_reviews +"wtf" ) )
          for (var goodcomments of lodging.good_reviews) {
            //   console.log( goodcomments + "right now")
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
            value: lodging.Double_AC
          });
          test.push({
            id: "Double Room without Air Con",
            value: lodging.Double_No_AC
          });
          test.push({
            id: "Single Room with Air Con",
            value: lodging.Single_AC
          });
          test.push({
            id: "Single Room without Air Con",
            value: lodging.Single_No_AC
          });
          test.push({ id: "Meal Plan", value: lodging.meal_plan });
        }
      }
      return test;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.container {
  padding: 20px;
}
</style>