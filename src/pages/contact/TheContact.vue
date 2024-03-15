<template>
    <div class="flex justify-center items-center h-screen w-screen bg-black text-teal-50">
       

        <a
            class="absolute top-10 right-10 text-3xl font-shelton text-white"
            @click="close()"
        >CHIUDI</a>


        <div>
            <h1 class="text-5xl font-shelton">Contattami</h1>
            <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div class="flex flex-col gap-5 mt-[2rem]">
                <n-input placeholder="Nome"></n-input>
                <n-input placeholder="Cognome"></n-input>
                <n-input
                    v-model:value="value"
                    type="textarea"
                    placeholder="Messaggio"
                />
                <a
                    class="text-center text-3xl font-shelton text-white cursor-pointer"
                    @click="close()"
                >Invia</a>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'

    import { useRoute,useRouter } from 'vue-router'
    let router = useRouter()
    let route = useRoute()

    function close() {

        let target = route.query['back'] ?? 'home'


        router.push({ name: target })
    }
</script>

<style lang="scss" scoped>

</style>