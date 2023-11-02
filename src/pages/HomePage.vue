<template>
  <div class="main-container">
    Home page
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string

  mounted() {
    this.$router.push('/login')
  }
}
</script>
