import Vue from "vue";
import { ElementUIComponent } from "./component";

import { TalTree } from "./tree";

export interface InstallationOptions {}

/** The version of element-ui */
export const version: string;

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void;

/** ElementUI component common definition */
export type Component = ElementUIComponent;

export class TreeComponet extends TalTree {}
