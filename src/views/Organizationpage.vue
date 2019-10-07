<template>
  <div id="orgpage" class="pd-side">
    <b-row>
      <b-col>
        <div>
          <Orgprofile></Orgprofile>
        </div>
      </b-col>
      <b-col cols="9">
          <div>
            <h3>
              <b-tabs>
                <b-tab v-on:click="togoBadges" title="Badge Offers" active align="left"></b-tab>
                <b-tab v-on:click="gotoCertify" title="Certify" align="right"></b-tab>
              </b-tabs>
            </h3>
          </div>
          <div v-if="isBadges">
              <Badges></Badges>
          </div>
          <div v-if="isToCerfify">
              <Certify></Certify>
          </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Badges from "@/modules/organization/Badges.vue";
import Certify from "@/modules/organization/Certify.vue";
import Orgprofile from "@/modules/organization/orgprofile.vue";

export default {
  name: "orgpage",
  components: {
    Badges,
    Certify,
    Orgprofile
  },
  data() {
    return {
      isBadges: true,
      isToCerfify: false
    };
  },
  methods: {
    togoBadges() {
      this.isBadges = true;
      this.isToCerfify = false;
    },
    gotoCertify() {
      this.isToCerfify = true;
      this.isBadges = false;
    }
  }
};
</script>

<style scoped>
.pd-side {
    padding-left: 20px;
    padding-right: 20px;
}
</style>




