import {mergeConfig} from "vitest/config";
import viteConfig from './vite.config'

// noinspection JSUnusedGlobalSymbols
export default mergeConfig(viteConfig,{
    test: {
        environment: 'happy-dom'
    }
})
