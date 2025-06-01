let page = document.querySelector("#page")
let cursor = document.querySelector("#cursor")
let box = document.querySelector(".image")
let boxes = document.querySelectorAll(".image")


page.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration : 0.7,
        ease: "back.out(1.4)"
    })
})





boxes.forEach((box) => {

    box.addEventListener("mouseenter", function(dets) {

        let title = box.getAttribute("data-title");
        let price = box.getAttribute("data-price");

        let content = document.createElement("div");
        content.classList.add("cursor-content");
        content.innerHTML = `<h1>${title}</h1><p>${price}</p>`;

        cursor.innerHTML = ""; // clear previous content
        cursor.appendChild(content);

        gsap.to(cursor, {
            height: "200px",
            width: "200px",
            ease: "elastic.out(1,0.9)",
            backgroundColor: "black",
            borderRadius: "20px"
        });

            box.anim = gsap.to(box, {
                             y: 10,
                            duration: 0.5,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut"
        });
    });

    box.addEventListener("mouseleave", function(dets) {
        cursor.innerHTML = "";
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.2,
            height: "20px",
            width: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.199)",
            borderRadius: "50%"
        });



        if (box.anim) box.anim.kill();
            gsap.to(box, {
                    y: 0,
                     duration: 0.5,
                    ease: "power2.out"
                });
    });
});


// boxes.forEach((box) => {
//     box.addEventListener("mouseenter", function(dets) {
//         let title = box.getAttribute("data-title");
//         let price = box.getAttribute("data-price");
//         cursor.innerHTML = `<h1>${title}</h1><br><p>${price}</p>`;
//         gsap.to(cursor, {
//             height : "200px",
//             width : "200px",
//             ease: "elastic.out(1,0.9)",
//             backgroundColor : "black",
//             color : "white",
//             borderRadius : "20px"
//         });

//         gsap.from(box,{
//             y:10,
//             repeat : -1,
//             yoyo : true
//         })

//     });

//     box.addEventListener("mouseleave", function(dets) {
//         cursor.innerHTML = "";
//         gsap.to(cursor, {
//             x:dets.x,
//             y:dets.y,
//             duration : 0.2,
//             height : "20px",
//             width : "20px",
//             backgroundColor : "white",
//             borderRadius : "50%"
//         });


//         gsap.from(box,{
//             y:0,
//             repeat : 1,
//             yoyo : false
//         })
//     });
// });







// box.addEventListener("mouseenter",function(dets){

//     cursor.innerHTML = ani_tags
//      gsap.to(cursor,{
//         height : "200px",
//         width : "200px",
//         ease: "elastic.out(1,0.9)",
//         backgroundColor : "black",
//         color : "white",
//         borderRadius : "20px"
//     })
// })


// box.addEventListener("mouseleave",function(dets){
    
//     cursor.innerHTML = ""
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration : 0.2,
//         height : "20px",
//         width : "20px",
//         backgroundColor : "white",
//         borderRadius : "50%"
//     })
// })