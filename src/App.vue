<template>
    <div>
        <n-config-provider
            :theme-overrides="themeOverrides"
            :theme="st_base.theme === 'dark' ? darkTheme : undefined"
            :hljs="hljs"
            :locale="st_base.locale"
            :date-locale="st_base.date_locale"
        >
            <!-- <n-theme-editor> -->
                <n-message-provider :placement="'top-right'">
                    <n-card class="card-theme !border-0">
                        <RouterView />
                    </n-card>
                </n-message-provider>
            <!-- </n-theme-editor> -->
        </n-config-provider>
        <div class="cursor" id="cursor"></div>
    </div>
</template>

<script setup>
    import { darkTheme } from 'naive-ui'
    import { NThemeEditor } from 'naive-ui'
    import { NConfigProvider } from 'naive-ui'
    import themeOverrides from '@/plugins/naiveui/themeOverrides'

    // import { zhCN, dateZhCN } from 'naive-ui'
    // import type { NLocale, NDateLocale } from 'naive-ui'


    import { RouterView } from 'vue-router'
    import { NMessageProvider } from 'naive-ui'



    // PINIA ----------------------------------------
    import { useBaseStore } from "@/stores/main"
    let st_base = useBaseStore()

    st_base.setCursorEvent()


    // CODE HIGHLIGHT ----------------------------------------
    import hljs from 'highlight.js/lib/core'
    import javascript from 'highlight.js/lib/languages/javascript'
    import html from 'highlight.js/lib/languages/xml'

    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('html', html)

    // onMounted(() => {
    //     st_base.setTargetEvent()
    // })
</script>

<style>
    /* -- CARD THEME -- */
    .card-theme > .n-card__content {
        width: 100%;
        height: 100%;
        padding: 0 !important;
        margin: 0;
        border: 0;
        box-shadow: none;
        background-color: transparent;
    }
</style>
