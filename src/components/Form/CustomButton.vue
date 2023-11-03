<template>
  <div>
    <v-btn class="text-main-font custom-btn" @click="onClickAction()">
      {{ label }}
    </v-btn>
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

  async onClickAction() {
    await this.$emit('onClick')
  }
}
</script>

<style lang="scss" scoped>
  .custom-btn :deep() {
    width: 100%;
    height: 45px;
    text-transform: capitalize;
    .v-btn__content {
      margin-top: 4px;
    }
  }
</style>
