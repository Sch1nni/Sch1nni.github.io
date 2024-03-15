<template>
    <div class="container">
        <div class="mt-section">
            <h1 class="text-center text-5xl font-bold">PAGINA {{ title }}</h1>
        </div>

        <hr class="my-section" />

        <div>
            <h2 class="text-3xl font-semibold mb-4">Data e ora</h2>
            <n-date-picker :format="format" />
        </div>

        <hr class="my-section" />

        <!-- NaiveUI -->
        <NaiveUI />

        <hr class="my-section" />

        <!-- Componenti per le pagine -->
        <TheComponents />

        <hr class="my-section" />

        <!-- Pinia -->
        <ThePinia />

        <hr class="my-section" />

        <!-- Test chiamata -->
        <TheAxios />

        <hr class="my-section" />
    </div>
</template>

<script setup>
    // COMPONENTS ----------------------------------------
    import NaiveUI from './sections/NaiveUI.vue'
    import TheComponents from './sections/TheComponents.vue'
    import ThePinia from './sections/ThePinia.vue'
    import TheAxios from './sections/TheAxios.vue'

    // DATA ----------------------------------------
    const title = 'INFO'
    const format = 'dd MMMM yyyy'
</script>
