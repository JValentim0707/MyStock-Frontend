<template>
  <div class="main-container background-gradient">
   <StepSelectUserType/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StepSelectUserType from '@/components/LoginComponents/StepSelectUserType.vue'


@Options({
  components: {
    StepSelectUserType
  }
})
export default class HelloWorld extends Vue {
//   msg!: string

  mounted() {
    console.log('test')
  }
}
</script>
<style lang="scss" scoped>
</style>
