<template>
    <h2 class="text-3xl font-semibold mb-4">Test chiamata</h2>
    <div class="flex justify-start gap-4">
        <n-button
            type="error"
            strong
            ghost
            :loading="loading_1"
            @click="get_user('loading_1')"
            >Test error</n-button
        >
        <n-button
            type="success"
            strong
            ghost
            :loading="loading_2"
            @click="get_user('loading_2')"
            >Test success</n-button
        >
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // PINIA ----------------------------------------
    import { useBaseStore } from '@/stores/main'
    let st_base = useBaseStore()

    // DATA ----------------------------------------
    let loading_1 = ref(false)
    let loading_2 = ref(false)

    // METHODS ----------------------------------------
    async function get_user(text) {
        let t = text == 'loading_1' ? loading_1 : loading_2

        t.value = true
        let _return = await st_base.get_user()
        t.value = false
    }
</script>
