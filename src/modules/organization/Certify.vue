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
                <b-button variant="primary" class="btn btn-block">Certify Recipients</b-button>
              </b-col>
              <b-col>
                <b-button variant="primary" class="btn btn-block" v-b-modal.addRecipient-modal>Add Recipient</b-button>
              </b-col>
            </b-row>
            <br>
          </div>
          <b-table striped hover :items="people"></b-table>
        </b-col>
        <b-modal id="addRecipient-modal" title="Recepient Information" ok-title="Add Recipient" cancel-variant="danger">
          <b-label for="usernamei">Search Username</b-label>
          <b-input id="usernamei" /><br>
          <b-label for="role">Pick Role</b-label>
          <b-card>
              <b-form-select v-model="selectedRole" :options="options"></b-form-select>
          </b-card><br>
          <b-card>
              <b-row>
                  <b-col class="text-center">
                      <img src="@/assets/pro.png" rounded="circle" class="size50">
                  </b-col>
                  <b-col cols="9" class="border-left">
                      <p> Role : {{ selectedRole}}</p>
                  </b-col>
              </b-row>
          </b-card>
        </b-modal>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "certify",
  data() {
    return {
      people: [
        { username: "mrclay", Role: "Speaker" },
        { username: "jmhy", Role: "Audience" }
      ],
      options:[
          {value: "Speaker", text: "Speaker"},
          {value: "Audience", text: "Audience"}
      ],
      selectedRole:"None"
    };
  }
};
</script>

<style scoped>
.size50 {
    height: 50px;
    width: 50px;
}
</style>

