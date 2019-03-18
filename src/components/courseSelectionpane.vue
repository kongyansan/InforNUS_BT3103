<template>
  <body>
    <div class="jc_selection_pane" style="float:left">
      <img
        id="jc_image"
        src="../assets/jc_image.jpg"
        @click="DoSomething($event);"
      />
    </div>

    <div class="poly_selection_pane" style="float:right">
      <img
        id="poly_image"
        src="../assets/poly_image.jpg"
        @click="DoSomething($event);"
      />
    </div>
  </body>
</template>

<script>
export default {
  name: "selectionPane",
  props: {},
  methods: {
    DoSomething: function(event) {
      // make the selection pane come up
      let targetID = event.currentTarget.id;
      if (targetID == "jc_image") {
        //something
        var doc = prompt("Please enter your rank point", "90.0", {
          confirmButtonText: "OK!",
          cancelButonText: "cancel"
        });
        var valid = doc.match(/^\d+\.\d{0,2}$/); //check that input is float with 2dp at most
        if (valid) {
          alert(doc);
          // use value from doc to retrieve search results
        } else {
          var errorMessage = "Enter to at least 1 d.p";
          alert(errorMessage);
        }
        console.log("jc_selected!");
      } else if (targetID == "poly_image") {
        //something
        var doc_1 = prompt("Please enter your course", "Computer Science", {
          confirmButtonText: "OK!",
          cancelButonText: "cancel"
        });
        var doc_2 = prompt("Please enter your GPA", "5.0", {
          confirmButtonText: "OK!",
          cancelButonText: "cancel",
          inputPattern: /^\d+\.\d{0,2}$/
        });

        // check input is float with 2 d.p, and course input is a string
        var valid = doc_2.match(/^\d+\.\d{0,2}$/) && doc_1.match(/[A-Z]/g);
        if (valid) {
          alert("Your course is: " + doc_1 + " and your GPA is: " + doc_2);

          // use values from doc_1 and doc_2 to retrieve search results
        } else {
          var errorMessage = "Please provide input in the correct format.";
          alert(errorMessage);
          console.log("poly selected!");
        }
      }
    }
  }
};
</script>

<style scoped>
#jc_image {
  background: url("../assets/jc_image.jpg");
  width: 50%;
  position: absolute;
  left: 0px;
  height: 100%;
}

#poly_image {
  background: url("../assets/poly_image.jpg");
  width: 50%;
  position: absolute;
  right: 0px;
  height: 100%;
}
</style>
