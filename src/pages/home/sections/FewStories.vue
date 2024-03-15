<template>
    <div an-few-trigger>
        <div class="container my-section" >
            <div class="titles">
                <div class="flex relative">
                    <div class="titles--item target" an-few-title-1 cursorInverse="200">
                        <span>Alcuni dei miei</span>
                    </div>
                    <div class="titles--filter aspect-square target" an-few-filter cursorInverse="120">
                        <div class="titles--filter--square" an-few-square></div>
                        <p an-few-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, doloribus voluptates impedit veniam necessitatibus mollitia.</p>
                    </div>
                    
                </div>
                <div class="titles--item target" an-few-title-2 cursorInverse="200">
                    <span>Racconti</span>
                </div>
            </div>

            <div an-card-trigger="123">
                <div class="grid grid-cols-3 gap-[2rem] mt-[4rem]" an-few-article>
                        <ArticleCard
                            v-for="(item,i) in items"
                            :key="i"
                            :title="item.title"
                            :text="item.text"
                            :trigger="123"
                        />
    
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ArticleCard from '@/components/ArticleCard.vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let items = ref([
    {title: 'L\'antica storia di giorgio un mulinello molto monello', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    {title: 'Titolo 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    {title: 'Titolo 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {title: 'Titolo 4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum adipisicing elit. Quisquam, voluptatumadipisicing elit. Quisquam, voluptatum.'},
    {title: 'Titolo 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {title: 'Titolo 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    {title: 'Titolo 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    {title: 'Titolo 4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum adipisicing elit. Quisquam, voluptatumadipisicing elit. Quisquam, voluptatum.'},
])

let title1 = null
let title2 = null
let title1_text = null
let title2_text = null

let filter = null
let text = null
let text_clone = null
let square = null
let article = null

function executeAnimation(){

    let t1_width = title1_text.offsetWidth;
    let t2_width = title2_text.offsetWidth;

    gsap
        .timeline({
            // repeat: -1
        })
        .to(title1, {width: t1_width, duration: 1, ease: 'power2.out'})
        .to(title1_text, {y: 0, duration: 1, ease: 'power2.out'}, '-=.5')
        .to(title2, {width: t2_width, duration: 1, ease: 'power2.out'}, '-=.5')
        .to(title2_text, {y: 0, duration: 1, ease: 'power2.out'}, '-=.5')
        .to(square, {scaleY: 1, duration: 1, ease: 'power2.out'}, '-=.5')
        .to(article, {opacity: 1, y: 0, duration: 1, ease: 'power2.out'}, '-=.5')
        .to([text_clone,text], {opacity: 1, duration: 1, ease: 'power2.out'}, '-=.5')


}

onMounted( async () => {

    title1 = document.querySelector('[an-few-title-1]');
    title2 = document.querySelector('[an-few-title-2]');
    title1_text = title1.querySelector('span');
    title2_text = title2.querySelector('span');
    filter = document.querySelector('[an-few-filter]');
    text = document.querySelector('[an-few-text]');
    square = document.querySelector('[an-few-square]');
    article = document.querySelector('[an-few-article]');

    // height + padding
    let filterHeight = square.offsetHeight ;
    square.style.width = filterHeight + 'px';

    filter.style.setProperty('--move-left', (filterHeight/2) + 'px');

    let textClone = text.cloneNode(true);
    textClone.classList.add('clone');
    square.appendChild(textClone);

    text_clone = square.querySelector('.clone');

    gsap.set([title1, title2], {width: 0});
    gsap.set([title1_text, title2_text], {y: 100});
    gsap.set(square, {scaleY: 0});
    gsap.set([text_clone,text], {opacity: 0});
    gsap.set(article, {opacity: 0, y: 100});

    ScrollTrigger.create({
        trigger: "[an-few-trigger]",
        start: "top center",
        once: true,
        onEnter: () => {
            executeAnimation();
        }
    }) 
})

</script>

<style lang="scss" scoped>

.titles{
    &--item{
        width: fit-content;
        font-family: var(--title-family);
        font-size: 35px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
       
        text-align: center;
        background: var(--black);

        white-space: nowrap;
        overflow: hidden;

        span{
            position: relative;
            z-index: 1;

            display: flex;
            align-items: center;
            
            width: fit-content;
            height: 100%;

            padding: .8rem 6rem .8rem 2rem;
            // background: red;
        }

        &:last-child{
            margin-left: 80px;
            font-size: 60px;
        }
    }
    &--filter{


        position: relative;
        width: 800px;
        height: 100px;

        margin-left: calc(80px + var(--move-left));

        display: flex;
        align-items: center;
        padding: 0 1rem;

        &--square{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;

            height: 100%;
            background: var(--black);
            z-index: 10;
            // merge inverted
            // mix-blend-mode: difference;

            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 0 1rem;

            p{
                color: white !important;
                position: relative;
                z-index: 10;
                min-width: 800px;
            }
        }

        p{
            position: relative;
            z-index: 1;
            color: black;

        }


    }
}

</style>
