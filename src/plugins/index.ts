/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'

// Types
import type {App} from 'vue'
import {router} from "@/plugins/router";
import {service} from "@/plugins/service";
import {store} from "@/plugins/store";
import {user} from "@/plugins/user";

export function registerPlugins (app: App) {
  app.use(vuetify);
  app.use(router);
  app.use(service);
  app.use(store);
  app.use(user);
}
