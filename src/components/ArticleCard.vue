<template>
    <div
        class="border-2 p-4 h-full flex flex-col justify-between overflow-hidden target"
        :an-card-trigger="unic_code"
        cursorInverse="120"

    >
        <div class="pb-[3rem]">
            <h2 class="text-2xl font-shelton mb-3" :an-card-title="unic_code">{{title}}</h2>
            <p :an-card-text="unic_code">{{text}}</p>
        </div>
        <div class="flex justify-between items-center" >
            <a class="text-xl font-shelton hover:text-black-100 cursor-pointer" :an-card-read-more="unic_code">Leggi di più</a>
            <div class="flex gap-3" :an-card-share="unic_code">
                <a><n-icon size="25"><LogoInstagram/></n-icon></a>
                <a><n-icon size="25"><LogoFacebook/></n-icon></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// importa instagram e facebook icon
import { LogoInstagram, LogoFacebook } from "@vicons/ionicons5";


// props
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        // genera un numero casuale tra 0 e 2
    },
    trigger: {
        type: String,
        required: true
    }
})

let unic_code = ref(null)

let _title = null
let _text = null
let read_more = null
let share = null
let letter = null

async function executeAnimation() {

    
    
    console.log(6);
    gsap
        .timeline({
            // delay: props.index * .1
        })
        .to(_text, {
            height: 'auto', // 'auto
            opacity: 1,
            duration: 1,
            ease: 'power2.out'  
        })
        
        .to(letter, {
            y: 0,
            opacity: 1,
            scaleY: 1,
            duration: .2,
            stagger: 0.02,
            ease: 'power2.out'  
        })
        .to(read_more, {
            x: 0,
            ease: 'power2.out'  
        }, '<1.5')
        .to(share, {
            y: 0,
            rotation: 0,
            duration: .5,
            stagger: 0.1,
            ease: 'power2.out'  
        }, '<.5')



}

onMounted(async () => {
    unic_code.value = Math.floor(Math.random() * 100000)
    await new Promise(resolve => setTimeout(resolve, 10))

    _title = document.querySelector(`[an-card-title="${unic_code.value}"]`)
    _text = document.querySelector(`[an-card-text="${unic_code.value}"]`)
    read_more = document.querySelector(`[an-card-read-more="${unic_code.value}"]`)
    share = document.querySelectorAll(`[an-card-share="${unic_code.value}"] > a`)

    _text.innerHTML = _text.textContent.replace(/\S/g, "<div class='inline-block letter'>$&</div>");
    letter = _text.querySelectorAll(".letter");
    
    gsap.set(_text, { height: 0, opacity: 0  })
    gsap.set(letter, { y: 5, scaleY: 0, opacity: 0  })
    gsap.set(read_more, { x: -200  })
    gsap.set(share, { y: 200, rotation: 90 })

    ScrollTrigger.create({
        trigger: `[an-card-trigger="${props.trigger}"]`,
        start: "top center",
        once: true,
        onEnter: () => {
            executeAnimation();
        }
    }) 
})

</script>

<style lang="scss" scoped>

</style>