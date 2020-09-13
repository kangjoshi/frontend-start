<template>
  <div class="container">
    <!-- Section Tittle -->
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-11 col-sm-11">
        <div class="section-tittle text-center mb-90">
          <span>Professional Users</span>
        </div>
      </div>
    </div>

    <div class="team-area pb-180">
      <div class="container">
        <div class="row team-active dot-style">
          <user-profile v-for="user in users" :user="user">

          </user-profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import _ from 'lodash';
import UserProfile from "./UserProfile";

export default {
  name : 'user-list',
  components: {UserProfile},
  created() {
    console.log('===== Users =====');
  },
  computed : {
    /*
    ...mapState('userStore', {
      users : state => state.users
    })
     */
  }
}
</script>
