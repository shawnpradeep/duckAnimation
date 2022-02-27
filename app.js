let image = document.getElementById('image1');


let images = ["url(images/frame1.svg)",
"url(images/frame2.svg)",
"url(images/frame3.svg)",
"url(images/frame4.svg)",
"url(images/frame5.svg)",
"url(images/frame6.svg)",
"url(images/frame7.svg)",
"url(images/frame8.svg)",
"url(images/frame9.svg)",
"url(images/frame10.svg)",
"url(images/frame11.svg)",
"url(images/frame12.svg)",
"url(images/frame13.svg)", 
"url(images/frame14.svg)",
"url(images/frame15.svg)",
"url(images/frame16.svg)",
"url(images/frame17.svg)",
"url(images/frame18.svg)",
"url(images/frame19.svg)",
"url(images/frame20.svg)",
"url(images/frame21.svg)",
];

// image.style.backgroundImage = images[1];

let i = 0;

setInterval(function() {
        image.style.backgroundImage = images[i];
        i = i + 1;
        if (i == 21) {
            i = 0;
        }
    
}, 50);






