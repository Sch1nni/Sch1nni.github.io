import api from '@/services/baseApiService.js'
import { gsap } from "gsap";

export default {
    logTest() {
    },

    changeTheme(text) {
        this.theme = text
    },

    async get_user() {
        return await api.server_fetch('loadUsers', {}, { string: '' }).then(async (result) => {
            await new Promise((resolve) => setTimeout(resolve, 1000)) // simula ritardo
            return result
        })
    },

    changeLocale(objectLocale) {
        this.locale = objectLocale.locale
        this.date_locale = objectLocale.date_locale
    },

    async setError(error) {
        this.error = {
            title: error.code,
            message: error.message,
        }
        await new Promise((resolve) => setTimeout(resolve, 0))
        this.error = false
    },

    /* MAGIC CURSOR */

    async setCursorEvent(cursorEvent) {

        document.addEventListener("mousemove", this.mouseMove);
        document.addEventListener("scroll", this.scrollMove);
        document.addEventListener("scrollend", this.scrollMove);

        this.mousePosition = { x: 0, y: 0 };
        this.cursorEvent = {}
    },

    async setTargetEvent() {

        await new Promise((resolve) => setTimeout(resolve, 800)) // simula ritardo

        let targets = document.querySelectorAll(".target");
        targets.forEach(target => {
            target.addEventListener("mouseenter", this.mouseEnter);
            target.addEventListener("mouseleave", this.mouseLeave);
        });
    },

    resetCursor(e) {
        this.cursorEvent = {}

        let cursor = document.querySelector('.cursor');

        cursor.innerHTML = '';
    },

    mouseLeave(e) {
        this.resetCursor(e);    
    },

    mouseEnter(e) {



        this.resetCursor(e);
        let target = e.target;

        if(target.getAttribute('defaultCursor')) {

            let default_target = document.querySelector(target.getAttribute('targetCursor'));
            default_target = default_target ? default_target : target;
            let rect = default_target.getBoundingClientRect();

            this.cursorEvent.left = rect.left + default_target.clientWidth / 2;
            this.cursorEvent.top = ( rect.top + default_target.clientHeight / 2 ) /* + window.scrollY */;
            this.cursorEvent.width = default_target.clientWidth + 15;
            this.cursorEvent.height = default_target.clientHeight + 15;
            this.cursorEvent.radius = 3;

        }

        if(target.getAttribute('cursorBackground')) {
            this.cursorEvent.backgroundColor = target.getAttribute('cursorBackground');
            this.cursorEvent.height = 60;
            this.cursorEvent.width = 60;
        }

        if(target.getAttribute('cursorInverse')) {


            let text = target.getAttribute('cursorInverseText') ?? null;

            if(text){
                let cursor = document.querySelector('.cursor');
                cursor.innerHTML = text;
            }


            if(!isNaN(target.getAttribute('cursorInverse'))) {
                this.cursorEvent.height = target.getAttribute('cursorInverse');
                this.cursorEvent.width = target.getAttribute('cursorInverse');
                this.cursorEvent.radius = target.getAttribute('cursorInverse') / 2;
            } else {
                this.cursorEvent.height = 60;
                this.cursorEvent.width = 60;
                this.cursorEvent.radius = 30;
            }
            this.cursorEvent.backdropFilter = 'invert(1)';
        }
    },

    scrollMove(e) {
        this.cursorPosition = {
            top: this.mousePosition.y /* + window.scrollY */,
            left: this.mousePosition.x
        };



        this.setCursors( this.cursorPosition.left, this.cursorPosition.top );
    },

    mouseMove(e) {



        this.mousePosition.x = e.clientX;
        this.mousePosition.y = e.clientY;

        let cursor = document.querySelector('.cursor');

        gsap.set([cursor], { opacity: 1 });
        this.cursorPosition = {
            left: e.clientX,
            top: e.clientY /* + window.scrollY */,
        };

        this.setCursors( this.cursorPosition.left, this.cursorPosition.top );
    },

    setCursors(x,y) {


        
        gsap.to(".cursor", {
            left: this.cursorEvent.left ?? x,
            top: this.cursorEvent.top ?? y,
            xPercent: this.cursorEvent.xPercent ?? -50,
            yPercent: this.cursorEvent.yPercent ?? -50,
            height: this.cursorEvent.height ?? 20,
            width: this.cursorEvent.width ?? 20,
            borderRadius: this.cursorEvent.radius ?? "20",
            backgroundColor: this.cursorEvent.backgroundColor ?? 'transparent',
            backdropFilter: this.cursorEvent.backdropFilter ?? 'none',
            duration: 0.3
        });
    }
    /* --- MAGIC CURSOR --- */
}
