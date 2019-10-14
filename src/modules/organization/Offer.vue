<template>
  <div>
    <b-card>
      <form class="signupform" @submit.prevent="Offer">
        <center>
          <h1 class="sign">Offer A Badge</h1>
        </center>

        <label>
          <div class="fixedwidth">
            <p class="label-txt">Firstname</p>
            <input
              type="text"
              class="input"
              name="firstname"
              v-model="newinfo.firstname"
              autocomplete="off"
              required
            >
            <div class="line-box">
              <div class="line"></div>
            </div>
          </div>
        </label>
        <label>
          <div class="fixedwidth">
            <p class="label-txt">Username</p>
            <input
              type="text"
              class="input"
              name="username"
              v-model="newinfo.username"
              autocomplete="off"
              required
            >
            <div class="line-box">
              <div class="line"></div>
            </div>
          </div>
        </label>
      </form>
    </b-card>
    <button class="btn btn-primary btn-block btn-lg">Submit</button>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      newinfo: [
        {
          firstname: "Redgie",
          lastname: "Gravador",
          age: 22,
          gender: "Male",
          occupation: "Web Developer",
          years: 5,
          address: "Tamlamban Cebu",
          email: "redgie@gmail.com",
          username: "mrclay"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    $(".input").focus(function() {
      $(this)
        .parent()
        .find(".label-txt")
        .addClass("label-active");
    });

    $(".input").focusout(function() {
      if ($(this).val() == "") {
        $(this)
          .parent()
          .find(".label-txt")
          .removeClass("label-active");
      }
    });

    this.newinfo = {
      firstname: "Redgie",
      lastname: "Gravador",
      age: 22,
      gender: "Male",
      occupation: "Web Developer",
      years: 5,
      address: "Tamlamban Cebu",
      email: "redgie@gmail.com",
      username: "mrclay"
    };
  }
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}

.signupform {
  width: 80%;
  height: auto;
  margin-top: 0px;
  margin-bottom: 40px;
  background: white;
  text-align: center;
  float: right;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
}

.input {
  font-weight: normal;
  text-align-last: center;
}

.err {
  font-weight: normal;
  color: red;
  font-size: 13px;
  width: 100%;
  position: absolute;
  right: 0px;
}

.posts {
  height: 1000px;
  background-color: white;
}

.container {
  padding-left: 5%;
  padding-right: 5%;
  /* background-image: linear-gradient(to bottom right, white, #d9dcde); */
  margin: 0;
  padding-top: 0;
  height: 1000px;
  width: 100%;
}

label {
  display: block;
  position: relative;
  margin: 40px 0px;
}

.label-txt {
  position: absolute;
  top: -1.6em;
  font-weight: normal;
  padding: 10px;
  font-family: sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  color: #555657;
  transition: ease 0.3s;
  margin-top: 5px;
}

.label-txt2 {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 1em;
  font-weight: normal;
  letter-spacing: 1px;
  color: #555657;
  transition: ease 0.3s;
}

.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  text-align: left;
}

.line-box {
  position: relative;
  width: 100%;
  height: 1px;
  background: #555657;
}

.input {
  font-weight: normal;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  transform: translateX(0%);
  background: #032dff;
  transition: ease 0.6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

.sign {
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: -35%;
}

.fixedwidth {
  width: 500px;
}

#gender-form {
  margin-right: 100%;
}
</style>
