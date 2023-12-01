<template>
  <div >
    <CustomNavigation/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomNavigation from '@/components/NavigationComponent/CustomNavigation.vue'


@Options({
  components: {
    CustomNavigation
  }
})
export default class LoginPage extends Vue {
//   msg!: string

}
</script>
<style lang="scss" scoped>
</style>
