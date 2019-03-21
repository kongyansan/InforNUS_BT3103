<template> 
  <body>
    <div class = "distributionInfo">
      <h2>Cohort Demographic</h2>
      <pie-chart :data="this.distributionInfo"></pie-chart>
    </div>

    <div class = "schoolFees">
      <h2>School Fees:</h2>
      <h4>{{this.schoolFees}}</h4>
    </div>

    <div class = "difficultyRating">
      <h2>Difficulty Rating:</h2>
      <h4>{{this.difficultyRating}}</h4>
    </div>

    <div class = "courseRating">
      <h2>Course Rating:</h2>
      <h4>{{this.courseRating}}</h4>
    </div>

  </body>
</template> 



<script>
import course_admin_info from "../firebase.js";
import VueChartKick from "vue-chartkick";
import Chart from "chart.js";

export default {
  name: "courseSearch",
  firebase: function() {
    return {
      courses: course_admin_info
    };
  },
  computed:{
    selectedCourse: function() {
      // filter to match the parameter containing the selected course
      let ans = this.courses.filter(
        course => course.course_name == "Business Analytics"
      );
      //console.log(ans[0]);  
      return ans[0];
    },
    distributionInfo: function(){
      let ans = []; 
      var Alvl = ['A-levels',this.selectedCourse.A_level];
      var ib = ['IB',this.selectedCourse.IB];
      var poly = ["Diploma",this.selectedCourse.Diploma];
      var others = ["Others",this.selectedCourse.Others];
      ans.push(Alvl,ib,poly,others);
      return ans; 
    },
    schoolFees: function(){
      console.log(this.selectedCourse.school_fees);
      return this.selectedCourse.school_fees;
    },
    difficultyRating: function(){
      return this.selectedCourse.difficulty_rating;
    },
    courseRating: function(){
      return this.selectedCourse.course_rating;
    },
    gradeProfile: function(){

    }
  
  }
};
</script> 



