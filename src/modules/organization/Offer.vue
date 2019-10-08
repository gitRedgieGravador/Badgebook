<template>
  <div id="offer">
    <div>
      <b-card>offer a badge</b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "offer",
  data() {
    return {
      allData: [
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" }
      ],
      by3Data: [],
      temp: [],
      excessData: [],
      counter: 1
    };
  },

  created() {
    var len = allData.length
    alert(len, len%3)
    allData.forEach(element => {
      if (this.counter%3 == 0){
        this.by3Data.push(this.temp)
        this.temp = []
      }else{
        this.temp.push(element)
      }
    });
  }
};
</script>

<style scoped>
.inputline {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  text-align: center;
}
.ifont {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
