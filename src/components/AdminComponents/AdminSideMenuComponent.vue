<template>
  <div >
    <CustomSideMenu titleSideMenu="Menu" color="#5FC2D9" fontColor="#fff" :menuValues="adminMenu"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomSideMenu from '@/components/SideMenuCompnent/CustomSideMenu.vue'


@Options({
  components: {
    CustomSideMenu
  }
})
export default class LoginPage extends Vue {
//   msg!: string

adminMenu: any = [
  {
    title: 'Manage Users',
    icon: 'mdi-account-group',
    children: [
      {
        title: 'Admins',
        icon: 'mdi-account-tie'
      },
      {
        title: 'Companies',
        icon: 'mdi-domain'
      }
    ]
  },
  {
    title: 'Configuration',
    icon: 'mdi-cog',
    children: []
  }
]

}
</script>
<style lang="scss" scoped>
</style>
