<template>
<body>
  <div class="jc_selection_pane" style="float:left"> 
    <router-link to="/JCrecommendation">
    <img id="jc_image" src="../assets/jc_image.jpg"> 
    </router-link> 
  </div>

  <div class="poly_selection_pane" style="float:right"> 
    <router-link to="/polyRecommendation"> 
    <img id="poly_image" src="../assets/poly_image.jpg"> 
    </router-link> 
  </div>
</body>
</template>

<script>
export default {
  name: "selectionPane",
  props: {},
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
