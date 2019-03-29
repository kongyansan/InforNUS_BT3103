<template>
  <div id="app">
    <div style="width: 600px; float: left;">
      <h4>Industry Breakdown</h4>
      <pie-chart :data="this.industryInfo"></pie-chart>

      <h4>Starting Pay Comparison</h4>
      <line-chart :data="this.salaryInfo"></line-chart>
    </div>

    <div style="margin-left: 620px;">
      <h4>Common Jobs</h4>
      <table id="jobTable">
        <thead>
          <tr>
            <th style="width:25%;">Job Title</th>
            <th style="width:25%;">Pay (per month)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,key) in this.jobInfo" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>

      <h4>Distribution of Honors</h4>
      <table id="graduateTable">
        <thead>
          <tr>
            <th style="width:25%;">Honors</th>
            <th style="width:25%;">Percentage(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Highest Distinction</td>
            <td>{{ selectedCourse.first_class }}</td>
          </tr>
          <tr>
            <td>Distinction</td>
            <td>{{ selectedCourse.second_class }}</td>
          </tr>
        </tbody>
      </table>

      <router-link
        v-bind:to="{name:'courseDashboard', params: {course_name: selectedCourse.course_name}}"
      >Admin Info</router-link>
    </div>
  </div>
</template>

<script>
import VueChartKick from "vue-chartkick";
import Chart from "chart.js";
import db from "../firebase.js";

export default {
  name: "courseCareerDashboard",
  firebase: {
    career_info: db.ref("student_career_info/data"),
    course_info: db.ref("course_admin_info/data")
  },
  created() {
    this.course_name = this.$route.params.course_name;
  },
  computed: {
    selectedCourse: function() {
      // filter to match the parameter containing the selected course
      let ans = this.course_info.filter(
        course => course.course_name == "Business Analytics"
      );
      console.log(ans[0]);

      return ans[0];
    },

    jobInfo: function() {
      let ans = {};

      let selectStudents = this.career_info.filter(
        // returns array of students
        student =>
          student.course.toLowerCase() ==
          this.selectedCourse.course_name.toLowerCase()
      );

      for (var student of selectStudents) {
        if (student.job_title in ans) {
          let salary_array = ans[student.job_title];
          salary_array.push(student.starting_pay);
          ans[student.job_title] = salary_array;
        } else {
          let salary_array = [];
          salary_array.push(student.starting_pay);
          ans[student.job_title] = salary_array;
        }
      }
      for (var key in ans) {
        let salary_array = ans[key];
        let total = 0;
        for (var val of salary_array) total = total + val;
        let avg = total / salary_array.length;
        ans[key] = Math.round(avg);
      }
      return ans;
    },

    industryInfo: function() {
      // returns dictionary of the industries and their respective proportions of
      // graduates in that particular industry
      let ans = {};
      let selectStudents = this.career_info.filter(
        // returns array of students
        student =>
          student.course.toLowerCase() ==
          this.selectedCourse.course_name.toLowerCase()
      );

      for (var student of selectStudents) {
        if (student.industry in ans) {
          ans[student.industry] += 1;
        } else {
          ans[student.industry] = 1;
        }
      }
      return ans;
    },

    graduateSalaryInfo: function() {
      // returns avg salary for each year (for particular course)
      let ans = {};
      let selectStudents = this.career_info.filter(
        // returns array of students
        student =>
          student.course.toLowerCase() ==
          this.selectedCourse.course_name.toLowerCase()
      );

      for (var student of selectStudents) {
        if (student.graduation_year in ans) {
          let salary_array = ans[student.graduation_year.toString()];
          salary_array.push(student.starting_pay);
          ans[student.graduation_year.toString()] = salary_array;
        } else {
          let salary_array = [];
          salary_array.push(student.starting_pay);
          ans[student.graduation_year.toString()] = salary_array;
        }
      }
      for (var key of Object.keys(ans)) {
        let salary_array = ans[key];
        let total = 0;
        for (var val of salary_array) total = total + val;
        let avg = total / salary_array.length;
        ans[key] = Math.round(avg);
      }

      console.log(ans);
      return ans;
    },

    nusSalaryInfo: function() {
      // returns the avg salary for each year (whole of NUS)
      let ans = {};
      for (var student of this.career_info) {
        if (student.graduation_year in ans) {
          let salary_array = ans[student.graduation_year.toString()];
          salary_array.push(student.starting_pay);
          ans[student.graduation_year.toString()] = salary_array;
        } else {
          let salary_array = [];
          salary_array.push(student.starting_pay);
          ans[student.graduation_year.toString()] = salary_array;
        }
      }
      for (var key of Object.keys(ans)) {
        let salary_array = ans[key];
        let total = 0;
        for (var val of salary_array) total = total + val;
        let avg = total / salary_array.length;
        ans[key] = Math.round(avg);
      }

      return ans;
    },

    salaryInfo: function() {
      let ans = [
        {
          name: "Avg Starting Pay for Course Graduate",
          data: this.graduateSalaryInfo
        },
        {
          name: "Avg Starting Pay for NUS Graduate",
          data: this.nusSalaryInfo
        }
      ];

      console.log(ans);
      return ans;
    }
  }
};
</script>

<style></style>
