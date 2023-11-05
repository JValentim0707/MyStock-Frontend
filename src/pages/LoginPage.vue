<template>
  <div class="main-container background-gradient">
   <StepSelectUserType v-if="stepsLogin === 1" @setStepValue="setStepValue"/>
   <LoginComponent v-if="stepsLogin === 2" :userType="userType"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StepSelectUserType from '@/components/LoginComponents/StepSelectUserType.vue'
import LoginComponent from '@/components/LoginComponents/LoginComponent.vue';


@Options({
  components: {
    StepSelectUserType,
    LoginComponent
  }
})
export default class LoginPage extends Vue {
//   msg!: string

stepsLogin: number = 1
userType!: string

  mounted() {
    console.log('test', this.stepsLogin)
  }

  setStepValue(userType:string, stepLogin: number) {
    this.stepsLogin = stepLogin
    this.userType = userType
  }
}
</script>
<style lang="scss" scoped>
</style>
