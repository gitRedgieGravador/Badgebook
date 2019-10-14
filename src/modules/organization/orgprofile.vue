<template>
  <div id="Profile">
    <div class="text-center">
      <br>
      <br>
      <img :src="image" alt class="border rounded-circle border-dark" id="profile">
      <div class="card-header">
        <h3>{{orginfo.orgname }}</h3>
        <button v-on:click="InsideMethod" class="btn btn-primary btn-block">Update Profile</button>
      </div>
      <b-card>
        <h5>Organization Details</h5>
        <div class="text-left">
          <p>Username: {{orginfo.username}}</p>
          <p>Address: {{orginfo.address}}</p>
          <p>Email Address: {{orginfo.email}}</p>
          <p>Description: {{orginfo.description}}</p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userinfo: {},
      image: require("@/assets/pn.png")
    };
  },
  created() {
    this.orginfo = {
      orgname: "Passerelles numeriques",
      address: "Talamban Cebu",
      username: "gateway",
      description: "We provide a gateway for life",
      email: "passellesnumeriques.org"
    };

    let uri_profile = `http://localhost:4000/user/regular/profile/`;
    this.axios.post(uri_profile).then(response => {
      this.userinfo = response.data;
    });
  },

  methods: {
    InsideMethod() {
      this.$emit("InsideMethod");
    }
  }
};
</script>
<style scoped>
div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
