<template>
  <div class="tree-component">
    <p>这是tree组件</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TreeComponet"
})
export default class TreeComponet extends Vue {}
</script>
<style lang="scss" scoped>
.tree-component {
  @include section-mixin;
}
</style>
