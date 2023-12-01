<template>
  <div class="main-container">
    <component :is="getUserRoleComponent"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { mapGetters } from 'vuex'

import AdminHome from '@/components/AdminComponents/AdminHome.vue';
import UserHome from '@/components/UserComponents/UserHome.vue'

@Options({
  props: {
    msg: String
  },

  components: {
    AdminHome,
    UserHome
  },

  computed: {
    ...mapGetters('user', {
      _getUserInfo: 'getUserInfo',
    }),

    getUserRoleComponent() {
      const user = this._getUserInfo
      
      return this.compentsUsersType[user.role]
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  _getUserInfo: any
  compentsUsersType: any = {
    user: 'UserHome',
    admin: 'AdminHome'
  }

  mounted() {
    // ['1', ''2'] Name: Valores
    // this.$router.push('/login')
  }
}
</script>
