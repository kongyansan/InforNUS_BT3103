<template>
<body>
  <div class="homepage">
    <img id="homepage-image" src="../assets/homepage.jpg">
  </div>
  <div>
    <!-- can consider changing the content here -->
    <router-link to="/lodging">
      <button type="button" id="Lodging">Lodging</button>
    </router-link>
    <router-link to="courseSelection">
      <button type="button" id="course">Course</button>
    </router-link>
  </div>
</body>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {};
  }
};
</script>

<style>
#homepage-image {
  background: url("../assets/homepage.jpg");
  width: 100%;
  //position: absolute;
  height: 35%;
  left: 0px;
}
body {
  margin: 0;
  top: 0px;
  padding: 0;
}
.topnav {
  //margin: 100;
  background-color: #003d7c;
  overflow: hidden;
  //height: 30%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4caf50;
  color: white;
}
.topnav-right {
  float: right;
}
</style>
