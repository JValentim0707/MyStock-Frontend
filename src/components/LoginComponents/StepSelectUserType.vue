<template>
  <div class="main-container select-type-container">
    <span class="text-main-font title-header">Hello Welcome To MyStock</span>
    <span class="text-secundary-font title-subheader">Plis Select Option Bellow</span>
    <div class="button-container text-secundary-font">
      <v-btn prepend-icon="mdi-account" @click="setNextStep('user')">
          User
      </v-btn>
      <span class="text-middle">OR</span>
      <v-btn prepend-icon="mdi-domain"  @click="setNextStep('company')">
          Company
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class StepSelectUserType extends Vue {
  msg!: string

  mounted() {
    // this.$router.push('/login')
  }

  setNextStep(userType: string){
    this.$emit('setStepValue', userType, 2)
  }
}
</script>

<style lang="scss" scoped>

  .select-type-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title-header {
      color: #FFFFFF;
      font-size: 40px;
    }

    .title-subheader {
      color: #FFFFFF;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 2px;
    }

    .button-container{
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-top: 20px;
      .text-middle {
        color: white;
        font-size: 20px;
        margin: 0px 20px;
      }
      .v-btn {
        background-image: linear-gradient(variables.$color-3, variables.$color-4);
        color: white;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 16px;
      }
    }
        
  }
</style>
