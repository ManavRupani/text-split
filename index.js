gsap.registerPlugin(SplitText,ScrollTrigger);

let mySplitText = new SplitText('.split',{type:'chars'})

let chars = mySplitText.chars;

gsap.from (chars,{
    yPercent:130,
    stagger:0.02,
    ease:"back.out",
    // repeat:true,
    duration:1,
    scrollTrigger:{
        trigger:'.split',
        start:"top 80%",
        toggleActions: "play none none reset",
        markers:true
    }
    
})