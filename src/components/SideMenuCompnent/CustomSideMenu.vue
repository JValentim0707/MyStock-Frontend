<template>
  <v-navigation-drawer
    v-model="sideMenu"
    :color="color"
    permanent
  >
    <div class="admin-container-side-menu">

      <div class="text-secundary-font side-menu-title">{{titleSideMenu }}</div>

      <v-list class="list-item-container" density="compact" nav>
        <v-list-group class="list-parent-container" v-for="(menuItem, i) in menuValues" :key="i">
          <template v-slot:activator="{ props }">
            <v-list-item
              :color="fontColor"
              class="text-secundary-font"
              v-bind="props"
              :prepend-icon="menuItem.icon"
              :title="menuItem.title"
            ></v-list-item>
          </template>
          <span class="children-item">
            <v-list-item class="text-secundary-font" v-for="(childremItem, i) in menuItem.children" :key="i" :prepend-icon="childremItem.icon" :title="childremItem.title" :value="childremItem.title"></v-list-item>
          </span>
          <!-- <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item> -->
        </v-list-group>
        <!-- <v-list-item class="text-secundary-font">
            <div>
              <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </div>
        </v-list-item> -->
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { mapActions } from 'vuex'


@Options({
  props: {
    color: String,
    menuValues: Array,
    fontColor: String,
    titleSideMenu: String
  },

  components: {
  },

  methods: {
  }
})
export default class LoginComponent extends Vue {
  sideMenu: boolean = true
  test: string = 'red'

}
</script>


<style lang="scss" scoped>
  .admin-container-side-menu {
    width: 100%;
    padding: 18px;
    .side-menu-title {
      font-weight: bold;
      font-size: 20px;
      color: white;
      letter-spacing: 0.1cm;
      text-transform: uppercase;
    }
  }

  .list-item-container {
    .v-list-item :deep() {
      color: #fff;
      padding-inline-start: 0px !important;
      .v-list-item-title {
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.03cm;
      }
      .v-list-item__prepend {
        margin-right: 12px;
      }
      i  {
        opacity: 1 !important;
        margin: 0px;
        margin-left: 5px;
      }
    }
    .children-item :deep() {

      .v-list-item-title {
        font-weight: normal !important;
      }
      i {
        font-size: 22px;
        margin-left: 5px;
      }
      .v-list-item--active {
        background-color: #176FA6;
      }
    }

    .list-parent-container :deep() {
      .v-list-group__items {
        margin-left: 11px;
        padding-left: 12px ;
        border-left: solid 2px #fff;
      }

      .v-list-item{
        &:hover {
          background-color: #ffffff57;
        }
      }
    }
  }
</style>