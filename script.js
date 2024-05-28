isHidden = document.querySelector("#subNavBar");
function handleMenu(){
    console.log("dropDown menu");
    // (isHidden.classList.contains("hidden")) ? isHidden.classList.remove("hidden") : isHidden.classList.add("hidden");
    isHidden.classList.toggle("hidden");
}


//sliding window
const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLeftToRight, speed){
    const intersectionCallBack = (entries)=>{
        const isIntersecting = entries[0].isIntersecting;
        console.log(entries[0])
        console.log(element, isIntersecting);

        if(isIntersecting){
            document.addEventListener("scroll", scrollHandler);
        }
        else{
            document.removeEventListener("scroll", scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallBack);

    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLeftToRight){
            totalTranslate = translateX + initialTranslateLTR;
        }
        else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const secondSlider = document.querySelector('#secondSlider');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(secondSlider, true, 0.35);
