<template>
  <div id="Profile">
    <div class="text-center">
      <b-card>
        <img src="@/assets/pn.png"  id="profile">
      </b-card>
      <div class="card-header">
        <h3> {{orginfo.orgname }}</h3>
        <button v-on:click="InsideMethod" class="btn btn-primary btn-block">Update Profile</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {
      userinfo: {},
    };
  },
  created() {
    this.orginfo = {
      orgname: "Passerelles numeriques"
    };

    let uri_profile = `http://localhost:4000/user/regular/profile/`;
    this.axios.post(uri_profile).then(response => {
      this.userinfo = response.data;
    });
  },

  methods: {
    InsideMethod() {
      this.$emit('InsideMethod');
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
