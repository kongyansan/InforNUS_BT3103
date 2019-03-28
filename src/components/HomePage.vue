<template>
<body>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
      img src = "../assets/raffleshall.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
    </b-carousel>
  </div>
  <div class="jumbotron text-center">
    <h1>INFORNUS</h1>
    <p>Your NUS journey starts here</p>
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
.jumbotron {
  padding-top: 100px;
  background-color: #EF7C00;
}
</style>

<script>
export default {
  name: "homepage",
  data() {
    return {};
  }
};
</script>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
