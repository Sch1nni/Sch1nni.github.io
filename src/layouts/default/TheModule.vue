<template>
    <div class="min-h-[100vh] flex flex-col justify-between" :style="'background-image: url(' + bg_home + ')'">
        <!-- <div>
            <div class="my-5">
                <Transition
                    name="fade"
                    mode="out-in"
                > -->
                    <router-view />
                <!-- </Transition>
            </div>
        </div>
        <div class="py-5 font-bold text-center bg-zinc-500 text-white">FOOTER</div> -->
    </div>
</template>

<script setup>
    import bg_home from '@/assets/img/bg_home.png'

    // IMPORT ----------------------------------------
    import { onMounted, ref } from 'vue'

    // COMPONENTS ----------------------------------------
    import { watch } from 'vue'
    import { useMessage } from 'naive-ui'

    const message = useMessage()

    // PINIA ----------------------------------------
    import { useBaseStore } from '@/stores/main'
    const st_base = useBaseStore()

    // WATCH ----------------------------------------
    watch(
        () => st_base.error,
        (val) => {
            if (val) {
                message.error(val.message, { duration: 5000 })
            }
        },
    )
</script>
