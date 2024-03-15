<template>
    <div class="border-2 p-4 h-full flex flex-col justify-between" :an-card-section="unic_code">
        <div class="pb-[3rem]">
            <h2 class="text-2xl font-shelton mb-3" an-card-title>{{title}} [{{ index }}] - {{ unic_code }}</h2>
            <p an-card-text>{{text}}</p>
        </div>
        <div class="flex justify-between items-center" >
            <a class="text-xl font-shelton hover:text-black-100 cursor-pointer" an-card-read-more>Leggi di più</a>
            <div class="flex gap-2" an-card-share>
                <a><n-icon size="25"><LogoInstagram/></n-icon></a>
                <a><n-icon size="25"><LogoFacebook/></n-icon></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import gsap from 'gsap'

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
    }
})

let unic_code = ref(null)

function executeAnimation() {

    console.log(3);
    
    let section = document.querySelector(`[an-card-section="${unic_code.value}"]`)
    
    let title = section.querySelectorAll('[an-card-title]')[0]
    let text = section.querySelectorAll('[an-card-text]')[0]
    let read_more = section.querySelectorAll('[an-card-read-more]')[0]
    let share = section.querySelectorAll('[an-card-share]')[0]
    
    console.log(4);
    console.log(4);
    
    
    text.innerHTML = text.textContent.replace(/\S/g, "<div class='inline-block letter'>$&</div>");
    let letter = document.querySelectorAll(".letter");
    
    gsap.set(text, { height: 0, opacity: 0  })
    gsap.set(letter, { y: 20, opacity: 0  })
    
    console.log(5);
    gsap
        .timeline({
            delay: props.index * .1
        })
        .to(text, {
            height: 'auto',
            opacity: 1,
            duration: 1,
            ease: 'power2.out'  
        }, )
        .to(letter, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.02,
            ease: 'power2.out'  
        }, '<')

}

onMounted(async () => {
    // unic_code.value = Math.floor(Math.random() * 1)
    console.log(1);
    unic_code.value = Math.floor(Math.random() * 100000)
    await new Promise(resolve => setTimeout(resolve, 100))
    console.log(2);
    executeAnimation()
})

</script>

<style lang="scss" scoped>

</style>