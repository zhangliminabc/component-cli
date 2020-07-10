import { Vue } from "vue-property-decorator";

import droupdown from "./src/index.vue";

droupdown.install = () => {
  Vue.component(droupdown.name, droupdown);
};

export default droupdown;
