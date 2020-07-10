import TreeComp from "./src/index.vue";

TreeComp.install = (vue) => {
  vue.component(TreeComp.name, TreeComp);
};
export default TreeComp;
