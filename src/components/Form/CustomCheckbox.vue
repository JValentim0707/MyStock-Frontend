<template>
  <div>
    <v-checkbox class="text-secundary-font custom-checkbox" :label="label"></v-checkbox>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
  }
})
export default class HelloWorld extends Vue {

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .custom-checkbox :deep() {
    color: #3A3A3A;
    .v-label {
      font-size: 14px;
      opacity: 1;
      color: #3A3A3A;
    }
  }
</style>
