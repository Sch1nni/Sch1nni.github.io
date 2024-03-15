<template>
    <h2 class="text-3xl font-semibold mb-4">Pinia</h2>
    <n-config-provider :theme="darkTheme">
        <n-card>
            <n-code
                :code="code1"
                language="js"
            />
        </n-card>
        <p class="my-3">Per importare un nuovo store di piania basta creare una nuova cartella nella cartella <b>src/stores</b> e importarlo in <b>src/stores/main.js</b></p>
        <n-card>
            <n-code
                :code="code2"
                language="js"
            />
        </n-card>
    </n-config-provider>
</template>

<script setup>
    // IMPORTS ----------------------------------------
    import { darkTheme } from 'naive-ui'

    let code1 = `
// PINIA ----------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()
`

    let code2 = `
import { mapStores } from "pinia";

import _useBaseStore from "./base/main";
export const useBaseStore = _useBaseStore

export default {
    computed: {
        ...mapStores(
            useBaseStore,
        ),
    },
}
`
</script>
