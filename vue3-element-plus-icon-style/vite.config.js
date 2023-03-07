import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      imports: [
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        'vue',
        // 自动导入 vue-router 相关函数
        'vue-router'
      ],

      dts: './types/auto-imports.d.ts',
      vueTemplate: true,
      resolvers: [ElementPlusResolver({ exclude: /ElIcon/ })],

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dts: './types/components.d.ts',
      dirs: [],
      // https://github.com/antfu/unplugin-vue-components/issues/195#issuecomment-955011828
      // https://github.com/antfu/unplugin-vue-components/blob/3ecdeade011d0ad4dde853ac48c3a051ba880420/src/types.ts#L63-L68
      // globs: ['src/components/V*/*.vue'],
      resolvers: [
        // 插件为流行的UI库提供了内置解析器，参考：https://github.com/antfu/unplugin-vue-components#importing-from-ui-libraries
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          // 允许加载的图标集合：ElementPlus
          enabledCollections: ['ep']
        })
      ]
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
