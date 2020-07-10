<template>
  <div class="tal-droupdown-comp">
    <p>这是下拉组件</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "droupDownComp"
})
export default class droupDownComp extends Vue {
  tabSelected: number = 0;
  msg = "这是demo弹窗";
}
</script>

<style lang="scss" scoped>
.tal-droupdown-comp {
  border: 1px solid;
  @include section-mixin;
  @include font_color("font_color1");
}
</style>
