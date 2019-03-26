<template>
<body>
  <div class="container-top">
    <div class="square schoolFees">
      <h2>School Fees:</h2>
      <h3>{{selectedCourse.school_fees}}</h3>
    </div>

    <div class="square difficultyRating">
      <h2>Difficulty Rating:</h2>
      <h3>{{selectedCourse.difficulty_rating}}</h3>
    </div>

    <div class="square courseRating">
      <h2>Course Rating:</h2>
      <h3>{{selectedCourse.course_rating}}</h3>
    </div>
  </div>

  <div class="container-mid">
    <div class="info text">
      <h2>{{selectedCourse.course_name}}</h2>
      <p>
        Today's businesses run on data. From web analytics and accounting to market research and demographics, our information-centric world generates countless terabytes of data year after year. Data analysts play the increasingly important role of making sense of all that data.
        As a Business Analytics student, you will gain a solid foundation in the statistical and analytical methods that make up the backbone of data science. You'll learn to work with spreadsheets, aggregate data, evaluate statistical significance, and determine statistical trends.
      </p>
    </div>
    <div class="info distribution">
      <h2>Cohort Demographic</h2>
      <pie-chart :data="this.distributionInfo"></pie-chart>
    </div>
  </div>

  <table class="Grade Profile" style="width:49%;">
    <thead>
      <tr>
        <th>Qualification</th>
        <th>Score (10th/90th Percentile)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value,key) in this.gradeProfile" :key="key">
        <td>{{key}}</td>
        <td>{{value}}</td>
      </tr>
    </tbody>
  </table>
</body>
</template> 



<script>
import db from "../firebase.js";
import VueChartKick from "vue-chartkick";
import Chart from "chart.js";

export default {
  name: "courseDashboard",
  firebase: {
    courses: db.ref("course_admin_info/data")
  },
  computed: {
    selectedCourse: function() {
      // filter to match the parameter containing the selected course
      let ans = this.courses.filter(
        course => course.course_name == "Business Analytics"
      );
      console.log(ans[0]);

      return ans[0];
    },
    distributionInfo: function() {
      let ans = [];
      console.log(this.selectedCourse);
      var Alvl = ["A-levels", this.selectedCourse.A_level];
      var ib = ["IB", this.selectedCourse.IB];
      var poly = ["Diploma", this.selectedCourse.Diploma];
      var others = ["Others", this.selectedCourse.Others];
      ans.push(Alvl, ib, poly, others);
      return ans;
    },
    gradeProfile: function() {
      let ans = {};
      let alvl_array = [];
      let IB_array = [];
      let poly_array = [];
      alvl_array.push(
        this.selectedCourse.rank_point_10,
        this.selectedCourse.rank_point_90
      );
      IB_array.push(this.selectedCourse.ib_10, this.selectedCourse.ib_90);
      poly_array.push(this.selectedCourse.gpa_10, this.selectedCourse.gpa_90);
      ans["A-levels"] = alvl_array;
      ans["Diploma"] = poly_array;
      ans["IB"] = IB_array;
      for (var key in ans) {
        let temp = ans[key];
        var string = temp[0] + " / " + temp[1];
        ans[key] = string;
        console.log(string);
      }
      return ans;
    }
  }
};
</script> 

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.square {
  background-color: #d3d3d3;
  width: 33.33%;
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}

.container-top {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.container-mid {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.info {
  float: left;
  background-color: #d3d3d3;
  width: 49.5%;
}

.Grade {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
}
</style>

