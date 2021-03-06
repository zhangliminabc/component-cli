/* Automatically generated by './build/bin/init-entry.js' */

import Droupdown from "./packages/droupdown";
import Tree from "./packages/tree";

const components = [Droupdown, Tree];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
// export { Tree, Droupdown };

export default { install, Droupdown, Tree };
