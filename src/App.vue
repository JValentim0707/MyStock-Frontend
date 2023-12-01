<template>
  <v-app>
    <v-main>
      <div v-if="userData.role === 'admin'">
        <AdminNavigation/>
        <AdminSideMenu/>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AdminNavigation from '@/components/AdminComponents/AdminNavigationComponent.vue'
import AdminSideMenu from '@/components/AdminComponents/AdminSideMenuComponent.vue'

import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'App',

  components: {
    AdminNavigation,
    AdminSideMenu
  },

    computed: {
      ...mapGetters('user', {
        _getUserInfo: 'getUserInfo',
      }),

      userData(): any {
        return this._getUserInfo
      }
    },

  data () {
    return {
      //
    }
  },
})
</script>
