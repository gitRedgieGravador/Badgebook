<template>
  <div id="badges">
    <div v-for="(datapass, index) in by3Data" :key="index">
      <Bythree :data="datapass"></Bythree>
      <br />
    </div>
    <b-row>
      <div v-if="hasexcess">
          <Bythree :data="excessData"></Bythree>
      </div>
    </b-row>
  </div>
</template>
<script>
import Bythree from "./bythree";
export default {
  name: "badges",
  components: {
    Bythree
  },
  data() {
    return {
      allData: [
        { name: "Programming Workshop1", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop2", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop3", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop4", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop5", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop6", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop7", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop8", venue: "J Center Mall Mandaue" }
      ],
      by3Data: [],
      temp: [],
      excessData: [],
      hasexcess: true
    };
  },

  created() {
    var excess = false;
    for (let i = 0; i < this.allData.length; ++i) {
        if ((i + 1) % 3 == 0) {
          this.temp.push(this.allData[i]);
          this.by3Data.push(this.temp);
          this.temp = [];
        } else {
          this.temp.push(this.allData[i]);
        }
        if (i - 1 == (this.allData.length - (this.allData.length%3))){
          this.excessData.push(this.allData[i]);
        }else if (i == (this.allData.length - (this.allData.length%3))){
          this.excessData.push(this.allData[i]);
        }
      
    }
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
