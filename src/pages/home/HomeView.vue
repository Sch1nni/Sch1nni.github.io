<template>
    <div>
        <div>
            <div class="">
                <TheHeader />
                <TheIntro />
                <FewStories />
            </div>
        </div>
    </div>
</template>

<script setup>

    // COMPONENTS ----------------------------------------
    import TheHeader from './sections/TheHeader.vue'
    import TheIntro from './sections/TheIntro.vue'
    import FewStories from './sections/FewStories.vue'

    // PINIA ----------------------------------------
    import { useBaseStore } from '@/stores/main'
    const st_base = useBaseStore()

    // DATA ----------------------------------------
    const title = st_base.title
</script>
