<template>
  <body>
    <nav class="topnav" topmargin="0">
      <a>Home</a> <a>Course</a> <a>Lodging</a>
    </nav>
  </body>
</template>

<style>
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
  font-size: 17px;
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
</style>
