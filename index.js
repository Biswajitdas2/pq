gsap.from("nav a",{
    y:20,
    duration:1.5,
    stagger:0.6,
    opacity:0
})
gsap.from("h1",{
    y:-20,
    duration:1.5,
    stagger:0.6,
    opacity:0,
    delay:0.8
})

gsap.from(".text-section h3",{
    y:-20,
    duration:1.5,
    stagger:0.6,
    opacity:0
})

gsap.from(".cv",{
    y:-20,
    duration:1.5,
    stagger:0.6,
    opacity:0
})

gsap.from(".contact",{
    x:-20,
    duration:1.5,
    stagger:0.6,
    opacity:0
})

gsap.from(".icons i",{
    x:20,
    duration:1.5,
    stagger:0.6,
    opacity:0
})
gsap.from(".photo-section",{
    duration:1.5,
    stagger:0.6,
    opacity:0
})
gsap.from(".about p",{
    duration:1.5,
    stagger:0.6,
    opacity:0,
    stagger:1,
    y:20
})



// var tl = gsap.timeline({scrollTrigger:{
//     trigger: ".page-1",
//     start: "70% 55%",
//     end: "70% 40%",
//     scrub: 2,
//     pin:true,
//     markers: true
// }})
// const back=document.querySelector(".page-2")
// // tl.to(".whole-2",{
//     y:"-40%"
// },'a')

// tl.from(".page-2",{
//     y:920,
//     duration:1,
//     opacity:1
// })

