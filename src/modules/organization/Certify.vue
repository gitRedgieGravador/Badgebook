 <template>
  <div id="certify">
    <b-card>
      <b-row>
        <b-col>
          <br>
          <b-card class="bg-light text-center">
            <img src="@/assets/image.png" class>
            <h5>{{name}}</h5>
            <p>{{venue}}</p>
          </b-card>
        </b-col>
        <b-col cols="8">
          <hr>
          <div class="text-center">
            <h2>Recipients</h2>
            <br>
            <b-row>
              <b-col>
                <b-button
                  variant="primary"
                  class="btn btn-block"
                  v-b-modal.certify-modal
                >Certify Recipients</b-button>
              </b-col>
              <b-col>
                <b-button
                  variant="primary"
                  class="btn btn-block"
                  v-b-modal.addRecipient-modal
                >Add Recipient</b-button>
              </b-col>
            </b-row>
            <br>
          </div>
          <b-table striped hover :items="people"></b-table>
        </b-col>
        <b-modal id="addRecipient-modal" title="Recepient Information" hide-footer>
          <form @submit.stop.prevent="handleSubmit">
            <b-label for="usernamei">Search Username</b-label>
            <b-input id="usernamei" v-model="s_username" @change="userExit = true"/>
          </form>
          <br>
          <b-label for="role">Pick Role</b-label>
          <b-card>
            <b-form-select v-model="selectedRole" :options="options" @change="notnull"></b-form-select>
            <i>
              <p class="text-center red">{{ warning }}</p>
            </i>
          </b-card>
          <br>
          <b-card v-if="userExit">
            <b-row>
              <b-col class="text-center">
                <img src="@/assets/pro.png" rounded="circle" class="size50">
              </b-col>
              <b-col cols="9" class="border-left">
                <p>Role : {{ selectedRole}}</p>
                <p>Username: {{ s_username }}</p>
              </b-col>
            </b-row>
          </b-card>
          <br>
          <b-row>
            <b-col>
              <b-button v-on:click="handleCancel" variant="danger" class="btn btn-block">Cancel</b-button>
            </b-col>
            <b-col cols="8">
              <b-button
                v-on:click="handleSubmit"
                variant="primary"
                class="btn btn-block"
              >Add Recipient</b-button>
            </b-col>
          </b-row>
        </b-modal>
        <b-modal size="lg" id="certify-modal" title="Certify The Recipients" hide-footer>
          <b-input/>
        </b-modal>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "certify",
  data() {
    return {
      people: [
        { username: "mrclay", Role: "Speaker" },
        { username: "jmhy", Role: "Audience" }
      ],
      options: [
        { value: "Speaker", text: "Speaker" },
        { value: "Audience", text: "Audience" }
      ],
      selectedRole: "No role selected",
      s_username: "",
      S_src: "",
      data: "",
      userExit: false,
      warning: ""
    };
  },
  methods: {
    suggest() {
      axios.post(`http://localhost:3000/suggest`).then(response => {
        for (let i = 0; i < response.length; ++i) {
          this.suggestions.push(response[i]);
        }
      });
    },
    validate() {
      if (this.s_username !== "" && this.selectedRole !== "No role selected") {
        return true;
      } else {
        return false;
      }
    },
    resetModal() {
      this.s_username = "";
      this.selectedRole = "No role selected";
      this.userExit = false;
      this.warning = "";
    },
    handleSubmit() {
      if (this.validate() == true) {
        this.people.push({
          username: this.s_username,
          Role: this.selectedRole
        });
        this.$bvModal.hide("addRecipient-modal");
        this.resetModal();
      } else {
        this.warning = "Please select a role";
      }
    },
    handleCancel() {
      this.resetModal();
      this.$bvModal.hide("addRecipient-modal");
    },
    notnull() {
      if (this.selectedRole !== "No role selected") {
        this.warning = ""
      }
    }
  }
};
</script>

<style scoped>
.size50 {
  height: 50px;
  width: 50px;
}
.red {
  color: red;
}
</style>

