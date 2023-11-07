<template>
  <div>
    <v-text-field
      class="input-text-style "
      :label="label"
      :type="type"
      color="primary"
      variant="underlined"
      @update:model-value="(value) => setValue(value)"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
    type: String,
    property: String
  }
})
export default class HelloWorld extends Vue {
  property!: string

  mounted() {
  }

  setValue (value: string) {
    this.$emit('handleValue', value, this.property)
  }
}
</script>

<style lang="scss" scoped>
  .input-text-style :deep() {
    label {
      color: #A3A3A3 !important;
      font-family: 'Advent Pro', sans-serif !important;
      // font-size: 16px;
      font-weight: 400;
    }
    .v-field__outline {
      &:before {
        // background-color: red !important;
        border-bottom-width: 2px;
        border-bottom-color: #176FA6;
        opacity: 1;
      }
      &:after {
        // background-color: red !important;
        border-bottom-width: 2px;
        border-bottom-color: #5FC2D9;
        font-size: 16px;
        opacity: 1;
      }
    }
  }
</style>
