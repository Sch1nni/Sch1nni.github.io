<template>
    <div class="mt-section" >
        <div class="flex items-center min-h-[70vh]">
            <div class="container" an-intro-section>
                <div class="grid grid-cols-12 place-items-center" >
                    <div class="col-start-1 col-end-8 w-full">
                        <h1 id="title" class="text-6xl font-shelton mb-5" an-intro-title>Test Parabolico</h1>
                        <p id="subtitle" class="mb-5" an-intro-subtitle>
                            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum eaque consectetur.</b>
                        </p>
                        <p id="textTypeWriter" an-intro-text>
                            Lorem <b>Test Parabolico</b> ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quos dolor expedita id sit obcaecati accusantium reiciendis, esse tempore velit nemo veritatis inventore aperiam exercitationem fugiat pariatur, perferendis consectetur.
                            Lorem <i>ipsum dolor sit amet</i> consectetur adipisicing elit.
                        </p>
                        <div id="textTypeWriter" class="flex gap-5 mt-[3rem]">
                            <div an-intro-buttons class="target" cursorInverse="120">
                                <n-button strong secondary type="tertiary">
                                    Leggi i miei articoli
                                </n-button>
                            </div>
                            <div an-intro-buttons class="target" cursorInverse="120">
                                <n-button strong >
                                    Contattami
                                </n-button>
                            </div>
                        </div>
                    </div>
                    <div class="col-start-9 col-end-13" >
                        <div an-intro-img-container>
                            <hr class="mb-4 border-top-2" an-intro-separator-top>
            
                            <div class="relative" >
                                <div
                                    class=" absolute top-0 right-0 w-full h-full flex justify-center z-10"
                                    @mouseenter="mouseEnter()"
                                    @mouseleave="mouseLeave()"
                                >
    
                                    <a
                                        class="grow h-full social-link"
                                        :class="{'pointer-events-none': !animated}"
                                        href="https://www.instagram.com/bonafede.francesco/"
                                        target="_blank"
                                    >
                                        <div class="social-link--icon"><n-icon size="50"><LogoInstagram/></n-icon></div>
                                    </a>
                                    <a
                                        class="grow h-full target social-link"
                                        :class="{'pointer-events-none': !animated}"
                                        href="https://www.facebook.com/frafe.sandro.5"
                                        target="_blank"
                                    >
                                        <div class="social-link--icon"><n-icon size="50"><LogoFacebook/></n-icon></div>
                                    </a>
                                    <a
                                        class="grow h-full target social-link"
                                        :class="{'pointer-events-none': !animated}"
                                        href="https://www.linkedin.com/in/francesco-bonafede-57ba96197/"
                                        target="_blank"
                                    >
                                        <div class="social-link--icon"><n-icon size="50"><LogoLinkedin/></n-icon></div>
                                    </a>
                                </div>
                                <div class="imgContainer">
                                    <img
                                        class="saturate-0 aspect-square object-cover relative z-1"
                                        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        an-intro-img
                                    >
                                </div>
                                
                            </div>
                            <hr class="mt-4 border-top-2" an-intro-separator-bottom>
                        </div>
                        <small class="mt-2 text-justify inline-block" an-intro-bottom-name>
                            Lorem ismallsum dolor sit amet consectetur adipisicing elit. Ad cum velit natus voluptas.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'

import { gsap } from "gsap";

let animated = ref(false)

import { LogoInstagram } from "@vicons/ionicons5"; 
import { LogoFacebook } from "@vicons/ionicons5"; 
import { LogoLinkedin } from "@vicons/ionicons5";

function mouseEnter() {
    gsap
        .timeline()
        .to('.social-link', {
            duration: .5,
            scaleY: 1,
            ease: "power2.inOut",
            stagger: 0.1,
        })
        .to('.social-link--icon', {
            duration: .5,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            stagger: 0.1,
        })
}

function mouseLeave() {
    gsap
        .timeline()
        .to('.social-link--icon', {
            duration: .5,
            y: 200,
            opacity: 0,
            ease: "power2.inOut",
            stagger: 0.1,
        })
        .to('.social-link', {
            duration: .5,
            scaleY: 0,
            ease: "power2.inOut",
            stagger: 0.1,
        })
        
}

async function exeuteAnimation() {
    
    let section = document.querySelector('[an-intro-section]')
    let title = document.querySelector('[an-intro-title]')
    let subtitle = document.querySelector('[an-intro-subtitle]')
    let text = document.querySelector('[an-intro-text]')
    let buttons = document.querySelectorAll('[an-intro-buttons]')
    let img = document.querySelector('[an-intro-img]')
    let separator_top = document.querySelector('[an-intro-separator-top]')
    let separator_bottom = document.querySelector('[an-intro-separator-bottom]')
    let img_container = document.querySelector('[an-intro-img-container]')
    let bottom_name = document.querySelector('[an-intro-bottom-name]')

    gsap.set(section, { opacity: 0 })
    // get height of an-intro-section e imposta come min height
    await new Promise(resolve => setTimeout(resolve, 200))

    gsap.to(section, { opacity: 1, duration: 1 })
    gsap.set(img, { opacity: 0, scaleY: 0, transformOrigin: 'center center',})

    title.innerHTML = title.textContent.replace(/\S/g, "<div class='inline-block letter-title'>$&</div>");
    let letter_title = document.querySelectorAll(".letter-title");

    subtitle.innerHTML = subtitle.textContent.replace(/\S/g, "<div class='inline-block letter-subtitle'>$&</div>");
    let letter_subtitle = document.querySelectorAll(".letter-subtitle");

    text.innerHTML = text.textContent.replace(/\S/g, "<div class='inline-block letter'>$&</div>");
    let letter = text.querySelectorAll(".letter");

    gsap.set(letter_title, { width: 0, opacity: 0, y: 50 })
    gsap.set(letter_subtitle, { width: 0, height: 0, opacity: 0, y: 25 })
    gsap.set(letter, { opacity: 0, height: 0, scale: 0, display: 'none', y: 5 })
    gsap.set(buttons, { opacity: 0, y: 25, height: 0, display: 'none' })
    gsap.set(separator_top, { y: 0, opacity: 0, })
    gsap.set(separator_bottom, { y: 0, opacity: 0, })
    gsap.set(bottom_name, { y: 0, opacity: 0, })

    await new Promise(resolve => setTimeout(resolve, 100))
    let initial_separator_offset = img_container.getBoundingClientRect().height / 2

    gsap.set(separator_top, { y: initial_separator_offset, opacity: 1, })
    gsap.set(separator_bottom, { y: -initial_separator_offset, opacity: 1, })
    gsap.set(bottom_name, { y: -initial_separator_offset, opacity: 1, })

    gsap
        .timeline({})
        .to(letter_title, {
            duration: .1,
            width: 'auto',
            opacity: 1,
            y: 0,

            stagger: 0.1,
            ease: "power2.inOut",
            onComplete: function() {
                title.classList.add('hide_after')
            }
        })
        .to(letter_subtitle, {
            duration: .05,
            width: 'auto',
            height: 'auto',
            opacity: 1,
            y: 0,
            stagger: 0.02,
            ease: "power2.inOut",
            onComplete: function() {
                subtitle.classList.add('hide_after')
            }
        })
        .to(letter, {
            duration: .05,
            opacity: 1,
            height: 'auto',
            scale: 1,
            display: 'inline-block',
            stagger: 0.005,
            ease: "power2.inOut",
        })
        .to( img, {
            duration: 1,
            opacity: 1,
            scaleY: 1,            
            ease: "power2.inOut",
            onComplete: function() {
                animated.value = true
            }
        }, '<')
        .to(separator_top, {
            duration: 1,
            y: 0,
            ease: "power2.inOut",
        }, '<')
        .to(separator_bottom, {
            duration: 1,
            y: 0,
            ease: "power2.inOut",
        }, '<')
        .to(bottom_name, {
            duration: 1,
            y: 0,
            ease: "power2.inOut",
        }, '<')
        .to(buttons, {
            duration: .5,
            opacity: 1,
            y: 0,
            height: 'auto',
            display: 'inline-block',
            stagger: 0.5,
            ease: "power2.inOut",
        })

}

onMounted( async () => {

    exeuteAnimation()
})

</script>

<style lang="scss" scoped>
    #title{
        // background: red;
        width: fit-content;
        position: relative;
        padding-right: 35px;
        opacity: var(--after-opacity);

        &:not(.hide_after):after {

            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;

            content: '';
            display: block;
            width: 30px;
            background-color: #3D3B3E;
            // border: 10px solid black;
            box-sizing: border-box;

            animation: blink .8s infinite;
        }
    }

    #subtitle{
        font-weight: 700;
    }

    .social-link{
        background-color: #3D3B3E50;
        transform: scaleY(0);

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        backdrop-filter: blur(2px);
        transition: background-color .3s ease;

        &:nth-child(odd){
            transform-origin: top;
        }
        &:nth-child(even){
            transform-origin: bottom;
        }

        &:hover{
            background-color: #3D3B3E80;
        }

        &--icon{
            opacity: 0;
            transform: translateY(200px);
            color: #fff;
            margin-bottom: 0;
            transition:
                margin-bottom .3s ease,
        }

        &:hover &--icon{
            margin-bottom: 2rem;
        }

    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
