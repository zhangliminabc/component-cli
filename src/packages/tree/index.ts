import Tree from "./src/index.vue";

Tree.install = (vue) => {
  vue.component(Tree.name, Tree);
};
export default Tree;
