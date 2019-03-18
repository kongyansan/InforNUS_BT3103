<template>
  <body>
    <div id="myBtnContainer">
      <button class="btn active" onclick="filterSelection('all')">
        Show all
      </button>
      <button class="btn" onclick="filterSelection('Hall')">Hall</button>
      <button class="btn" onclick="filterSelection('RC')">RCs</button>
      <button class="btn" onclick="filterSelection('PGP')">PGP</button>
    </div>
    <div class="row">
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/temasekhall.jpg"
            alt="temasekhall"
            style="width:100%"
          />
          <h4>Temasek Hall</h4>
        </div>
      </div>
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/eusoffhall.jpg"
            alt="eusoffhall"
            style="width:100%"
          />
          <h4>Eusoff Hall</h4>
        </div>
      </div>
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/raffleshall.jpg"
            alt="raffleshall"
            style="width:100%"
          />
          <h4>Raffles Hall</h4>
        </div>
      </div>
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/sheareshall.jpg"
            alt="sheareshall"
            style="width:100%"
          />
          <h4>Sheares Hall</h4>
        </div>
      </div>
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/kentridgehall.jpg"
            alt="kentridgehall"
            style="width:100%"
          />
          <h4>Kent Ridge Hall</h4>
        </div>
      </div>
      <div class="column hall">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>King Edward Hall</h4>
        </div>
      </div>
      <div class="column RC">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>Tembusu College</h4>
        </div>
      </div>
      <div class="column RC">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>College of Alice and Peter Tan</h4>
        </div>
      </div>
      <div class="column RC">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>RC4</h4>
        </div>
      </div>
      <div class="column RC">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>Cinnamon College</h4>
        </div>
      </div>
      <div class="column RC">
        <div class="content">
          <img
            src="../assets/kingedwardhall.jpg"
            alt="kingedwardhall"
            style="width:100%"
          />
          <h4>Ridge View Residential College</h4>
        </div>
      </div>
      <div class="column PGP">
        <div class="content">
          <img src="../assets/PGP.jpg" alt="PGP" style="width:100%" />
          <h4>PGP</h4>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

/* Center website */
.main {
  max-width: 1000px;
  margin: auto;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

/* Add padding BETWEEN each column (if you want) */
.row,
.row > .column {
  padding: 8px;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  //display: none; /* Hide columns by default */
}

/* Clear floats after rows */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: #d3d3d3;
  padding: 10px;
}
/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: white;
  cursor: pointer;
}

.show {
  display: block;
}

/* Add a grey background color on mouse-over */
.btn:hover {
  background-color: #ddd;
}

/* Add a dark background color to the active button */
.btn.active {
  background-color: #666;
  color: white;
}
</style>
