<template>
    <div class="fixed top-[0px] left-0 pt-[10px] right-0 z-50 bg-white">
        <div class="container">
            <div class="grid grid-cols-3 border-b-2 border-black pb-1">
                <div class="flex justify-start">{{ today }}</div>
                <div
                    class="flex justify-center items-center max-h-[23px] overflow-visible cursor-pointer"
                    
                        @mouseenter="contactEnter()"
                        @mouseleave="contactLeave()"
                        @click="contactClick()"
                    >
                    <!-- <div class="max-h-[23px] overflow-visible bg-red-100"> -->
                        <div class="btn-contact">CONTATTAMI</div>
                    <!-- </div> -->
                </div>
                <div class="flex justify-end"><n-icon><Menu/></n-icon></div>
            </div>
        </div>
        <div class="BlackHole"></div>
    </div>
</template>

<script setup>

    import { Menu } from "@vicons/ionicons5";

    import gsap from "gsap";

    import { onMounted, ref } from 'vue'

    import { useRouter } from 'vue-router'
    let router = useRouter()

    // COMPUNTED ----------------------------------------
    // data di oggi
    let today = computed(() => {
        const date = new Date()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString('it-IT', options)
    })

    function contactEnter() {
        gsap.to('.btn-contact', {
            duration: .3,

            scale: 1.8,
            rotate: 5,
            y: 40,
            padding: '5px 1rem',

            backgroundColor: '#3D3B3E',
            color: '#fff',
            ease: 'power2.out'
        })
    }

    function contactLeave() {
        gsap.to('.btn-contact', {
            duration: .3,

            scale: 1,
            rotate: 0,
            y: 0,
            padding: '5px 1rem',

            backgroundColor: 'transparent',
            color: '#3D3B3E',
            ease: 'power2.out'
        })
    }

    async function contactClick() {
        gsap.to('.btn-contact', {
            duration: .3,
            opacity: 0,
        })
        gsap.to('.BlackHole', {
            duration: .3,
            opacity: 1,
            scale: 1,
            zIndex: 9999,
            ease: 'power2.out'
        })
        await new Promise(resolve => setTimeout(resolve, 300))
        router.replace({ name: 'contact', query: { back: 'home' } })
    }

    onMounted(() => {
        // contactEnter()
    })

</script>

<style scoped>
    .BlackHole {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--black);
        opacity: 0;
        z-index: -1;
        scale: .1;
        transform-origin: top center;
    }
</style>