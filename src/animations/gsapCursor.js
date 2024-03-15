import gsap from "gsap";

export default async function gsapCursor() {

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("scroll", scrollMove);
    document.addEventListener("scrollend", scrollMove);

    let mousePosition = { x: 0, y: 0 };

    let cursorEvent = {}

    let i = 0;

    let targets = document.querySelectorAll(".target");
    targets.forEach(target => {
        target.addEventListener("mouseenter", mouseEnter);
        target.addEventListener("mouseleave", mouseLeave);
    });

    console.log("targets",targets);

    async function resetCursor(e) {
        cursorEvent = {}
    }

    async function mouseLeave(e) {
        resetCursor(e);    
    }

    async function mouseEnter(e) {

        i++;

        resetCursor(e);
        let target = e.target;

        if(target.getAttribute('defaultCursor')) {

            let default_target = document.querySelector(target.getAttribute('targetCursor'));
            default_target = default_target ? default_target : target;
            let rect = default_target.getBoundingClientRect();

            cursorEvent.left = rect.left + default_target.clientWidth / 2;
            cursorEvent.top = ( rect.top + default_target.clientHeight / 2 ) /* + window.scrollY */;
            cursorEvent.width = default_target.clientWidth + 15;
            cursorEvent.height = default_target.clientHeight + 15;
            cursorEvent.radius = 3;

        }

        if(target.getAttribute('cursorBackground')) {
            console.log('cursorBackground',target.getAttribute('cursorBackground'));
            cursorEvent.backgroundColor = target.getAttribute('cursorBackground');
            cursorEvent.height = 60;
            cursorEvent.width = 60;
        }

        if(target.getAttribute('cursorInverse')) {

            
            // se cursorInverse è un numero allora set cursorEvent.width e cursorEvent.height
            if(!isNaN(target.getAttribute('cursorInverse'))) {
                cursorEvent.height = target.getAttribute('cursorInverse');
                cursorEvent.width = target.getAttribute('cursorInverse');
            } else {
                cursorEvent.height = 60;
                cursorEvent.width = 60;
            }

            cursorEvent.backdropFilter = 'invert(1)';
        }

    }

    async function scrollMove(e) {

        
        const cursorPosition = {
            top: mousePosition.y /* + window.scrollY */,
            left: mousePosition.x
        };
        console.log('scrollMove',cursorPosition.left, cursorPosition.top);

        setCursors( cursorPosition.left, cursorPosition.top );

    }

    async function mouseMove(e) {

        
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;

        console.log('mouseMove',mousePosition.x,mousePosition.y);

        gsap.set([cursor], { opacity: 1 });
        const cursorPosition = {
            left: e.clientX,
            top: e.clientY /* + window.scrollY */,
        };

        console.log("setCursors",cursorPosition.left,cursorPosition.top);
        setCursors( cursorPosition.left, cursorPosition.top );
    }

    function setCursors(x,y) {

        gsap.to(".cursor", {
            left: cursorEvent.left ? cursorEvent.left : x,
            top: cursorEvent.top ? cursorEvent.top : y,
            xPercent: cursorEvent.xPercent ? cursorEvent.xPercent : -50,
            yPercent: cursorEvent.yPercent ? cursorEvent.yPercent : -50,
            height: cursorEvent.height ? cursorEvent.height : 20,
            width: cursorEvent.width ? cursorEvent.width : 20,
            borderRadius: cursorEvent.radius ? cursorEvent.radius : "50%",
            backgroundColor: cursorEvent.backgroundColor ? cursorEvent.backgroundColor : 'transparent',
            backdropFilter: cursorEvent.backdropFilter ? cursorEvent.backdropFilter : 'none',
            duration: 0.3
        });
    }

}
