/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from './plugins'

// Components
import App from './App.vue'

// Composables
import {createApp} from 'vue'
import {enableMocking} from "@/plugins/msw";

const app = createApp(App)

registerPlugins(app)

enableMocking().then(() => {
    app.mount('#app')
})
