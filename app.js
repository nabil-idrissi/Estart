const menubutton = document.getElementById('menubutton');
const body2 = document.getElementById('body');
const nav = document.getElementById('nav');
const second = document.getElementById('second-section');
const left = document.getElementById('left');
const h2 = document.getElementById('h2');
const right = document.getElementById('right');
const cl1 = document.getElementById('cl1');
const cl2 = document.getElementById('cl2');
const cl3 = document.getElementById('cl3');
const span1 = document.getElementById('span1');
var circle = document.getElementById('circle');
var ac = document.getElementById('txt3');
/* const clos = document.querySelectorAll('.clo'); */
/* 
span1.addEventListener('mouseover'(e)=>{
     circ
    circle.style.width = 80+'px';
    circle.style.height = 80+'px';

})  */


span1.addEventListener('mouseover',(e)=>{
    
    
    circle.style.width = 200+'px';
    circle.style.height = 200+'px';
    h12.style.transform = 'scale('+1.2+')';
    h12.style.textShadow = `10px 7px 1px rgba(0, 0, 0, 0.1)`;
    
    
});
span1.addEventListener('mouseleave',(e)=>{
   
    circle.style.width = 50+'px';
    circle.style.height = 50+'px';
    h12.style.transform = 'scale('+1+')';
    h12.style.textShadow = ``;
});

right.addEventListener('mouseover',(e)=>{
    circle.style.width = 0+'px';
    circle.style.height = 0+'px';
    
    cl1.style.animation =  `fly 2s 0s linear infinite `;
    cl2.style.animation =  `fly2 2s 0s linear infinite `;
    cl3.style.animation =  `fly 2s 0s linear infinite `;


});
right.addEventListener('mouseleave',(e)=>{
    circle.style.width = 50+'px';
    circle.style.height = 50+'px';

    setTimeout(() => {
        cl1.style.animation =  `fly 25s linear infinite `;
        cl2.style.animation =  `fly2 10s linear infinite `;
        cl3.style.animation =  `fly 17s linear infinite `;
        
    }, 1500);
    

});


var kk = document.getElementById('nav').offsetHeight;
var k2 = document.getElementById('second-section').offsetHeight;
var k3 = k2+kk;



h2.addEventListener('mouseover',function(e){
    
    circle.style.width = 80+'px';
    circle.style.height = 80+'px';
    circle.style.opacity = 0.1;
    
    /* circle.style.borderColor= 'white'; */
    /* circle.style.animation = `jj4 10s forwards ease-out` */
});

h2.addEventListener('mouseleave',function(e){
    
    circle.style.width = 50+'px';
    circle.style.height = 50+'px';
    circle.style.borderColor= 'rgb(248, 49, 14)';
    circle.style.opacity = 1;
});

ac.addEventListener('mouseover',function(e){
    
    circle.style.width = 130+'px';
    circle.style.height = 130+'px';
    circle.style.opacity = 0.1;
    /* circle.style.borderColor= 'white'; */
    /* circle.style.animation = `jj4 10s forwards ease-out` */
});
ac.addEventListener('mouseleave',function(e){
    
    circle.style.width = 50+'px';
    circle.style.height = 50+'px';
    circle.style.borderColor= 'rgb(248, 49, 14)';
    circle.style.opacity = 1;
})
var aas = document.querySelectorAll('#ul li a');
for(var i =0;i<aas.length;i++){
    aas[i].addEventListener('click',function(){
        menubutton.classList.remove('clicked');

    })
    aas[i].addEventListener('mouseover',function(e){
    
        circle.style.width = 80+'px';
        circle.style.height = 80+'px';
        
        /* circle.style.borderColor= 'white'; */
        /* circle.style.animation = `jj4 10s forwards ease-out` */
    });
    aas[i].addEventListener('mouseleave',function(e){
        
        circle.style.width = 50+'px';
        circle.style.height = 50+'px';
        circle.style.borderColor= 'rgb(248, 49, 14)';
        circle.style.opacity = 1;
    })

}

var crt = document.getElementById('cro');

crt.addEventListener('mouseover',function(e){
    
    circle.style.width = 100+'px';
    circle.style.height = 100+'px';
    
    
});
crt.addEventListener('mouseleave',function(e){
    
    circle.style.width = 50+'px';
    circle.style.height = 50+'px';
    
});
var goto = document.getElementById('goto');
window.addEventListener('scroll',()=>{
    if(window.scrollY>k2){
        a++;
        

    }
    if(a>0){
        crt.style.display='none';
        

    }
    
});
var a = 0;
crt.addEventListener('click',function(){
    a++;
});

    




/* aa.addEventListener('mouseover',(e)=>{
    circle.classList.add("bigone");
}); */

/* below is detecting if mouse out and hide cursor*/
window.addEventListener('mouseout',()=>{
    circle.style.display = 'none';

});
window.addEventListener('mousemove',(e)=>{
    if(e.pageY>k2){
        document.getElementById('body').style.cursor='default';
        circle.style.display = 'none';
        h2.style.cursor = 'default';
        
        for(var i =0;i<aas.length;i++){
            aas[i].style.cursor = 'pointer';

        }


    }else if(window.innerWidth>825){
        //edit circle for mobile remove if(w.i>500 and else down below)
        document.getElementById('body').style.cursor='none';
        circle.style.display = 'block';
        h2.style.cursor = 'none';
        
        for(var i =0;i<aas.length;i++){
            aas[i].style.cursor = 'none';

        }


    }else{
        circle.style.display = 'none';
        document.getElementById('body').style.cursor='default';

    }
    


    
    
    var x = e.pageX;
    var y = e.pageY;
    

    circle.style.top= (y)+'px';
    /* container.style.transform = 'translateX(' + (-startwith*count) + 'px)';  */
    /* circle.style.transform='translateY('+(-y)+')'; */

    circle.style.left=(x)+'px';


});
var nextbutton1 = document.getElementById('nextbutton');
var prevbutton1 = document.getElementById('prebutton');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var count = 1;
prevbutton1.addEventListener('click',function(){
    /* if(count === 1){
        img1.classList.remove('activeimage');
    
        img3.classList.add('activeimage');
        count = 3;

    } */
    /* if(count === 3){
        img3.classList.remove('activeimage');
    
        img2.classList.add('activeimage');

    } */
    if(count === 1){
        img4.classList.add('activeimage');
        img1.classList.remove('activeimage');
        console.log(count);
    
        
        count=4;
        console.log(count);

    }else if(count === 2){
        img1.classList.add('activeimage');
        img2.classList.remove('activeimage');
        console.log(count);
    
        
        count=1;
        console.log(count);


    }else if(count === 4){
        img3.classList.add('activeimage');
        img4.classList.remove('activeimage');
        console.log(count);
    
        
        count=3;
        console.log(count);

    }else{
        img2.classList.add('activeimage');
        img3.classList.remove('activeimage');
        console.log(count);
    
        
        count=2;
        console.log(count);

    }
    
    
    
    /* if(count === 2){
        img2.classList.remove('activeimage');
    
        img3.classList.add('activeimage');

    }
    if(count === 3){
        img3.classList.remove('activeimage');
    
        img1.classList.add('activeimage');
        count = 0;

    } */
    

});
aa=1;

/* while(aa>0){
    setTimeout(() => {
        img1.classList.remove('activeimage');
        
        img2.classList.add('activeimage');
        count ++;
        
    }, 1000);
    

} */
cc1=0;
cc2 = 0;
nextbutton1.addEventListener('mouseover',function(){
    cc1 ++;
   /*  console.log(cc1 + 'cc1'); */
});
prevbutton1.addEventListener('mouseover',function(){
    cc1 ++;
   /*  console.log(cc1 + 'cc1'); */
});
var click1 = document.getElementById('click1');
window.addEventListener('mousemove',(e)=>{
    
    if(cc1>0 && cc2===0){
        
        click1.style.display = 'none';
        /* console.log(cc2 +'cc2'); */
        cc2++;
    
    }

})

nextbutton1.addEventListener('click',function(){
    
    if(count === 1){
        img1.classList.remove('activeimage');
        
        img2.classList.add('activeimage');

    }
    if(count === 2){
        img2.classList.remove('activeimage');
    
        img3.classList.add('activeimage');
        

    }
    if(count === 3){
        img3.classList.remove('activeimage');
    
        img4.classList.add('activeimage');
        
        

    }
    if(count === 4){
        img4.classList.remove('activeimage');
    
        img1.classList.add('activeimage');
        count = 0;
        

    }
    count ++;
   

    /* currentImage = document.getElementsByClassName('activeimage'); */
    
    /* var a = currentImage.id;
    console.log(a); */
    /* currentImageid = parseInt(currentImage.id) ; */
    /* console.log(currentImageid); */
    /* nextImageid = currentImageid == 3 ? 1 : currentImageid + 1;
    nextImage = document.getElementById(nextImageid); */
    /* console.log(nextImageid); */
    /* currentImage.classList.add('inactiveimage');
    currentImage.classList.remove('activeimage');
    nextImage.classList.add('activeimage');
    nextImage.classList.remove('inactiveimage');  */

})
//function slider
/* function slider(direction){
    currentImage = document.getElementsByClassName('activeimage');
    console.log(currentImage);
    currentImageid = parseInt(currentImage.id) ;
    if(direction == 'next'){
        console.log('next');
        if(currentImageid == 3){
            nextImageid = 1;
        }else{
            nextImageid = currentImageid +1;
        }
        
        
    }else{
        console.log('prev');
        if(currentImageid == 1){
            nextImageid = 3;
        }else{
            nextImageid = currentImageid -1;
        }
       
    }
    nextImage = document.getElementById(nextImageid);
    console.log(nextImageid);
    currentImage.classList.add('inactiveimage');
    currentImage.classList.remove('activeimage');
    nextImage.classList.add('activeimage');
    nextImage.classList.remove('inactiveimage');
} */










/* window.addEventListener('mousemove',(e)=>{
    for( y;y<all6.length;y++){
        console.log(all6[y]);
        all6[y].addEventListener('mouseover',(e)=>{
            
            all6[y].style.borderColor = 'black';
            
        })
    }

})
 */





menubutton.addEventListener('click',(e)=>{
    menubutton.classList.toggle('clicked');
    

});

window.addEventListener('scroll',function(){
    const scrolly = window.scrollY;
    /* var kk = document.getElementById('nav').offsetHeight;
    var k2 = document.getElementById('second-section').offsetHeight;
    var k3 = k2+kk;
    console.log(k2);
    console.log(scrollY); */
    
   
    
    /* if(window.scrollY>(k2)){
        console.log(window.scrollY,kk)
        document.getElementById('body').style.cursor='pointer';
    }else{
        document.getElementById('body').style.cursor='none';

    } */
    

    
    const wY = window.scrollY;
    if(wY>50){
        nav.classList.add('sticked');
        h2.style.color = 'black';
        

    }else{
        nav.classList.remove('sticked');
        h2.style.color = 'tomato';

    }
    if(wY>600){
        goto.style.transform = 'translateX('+0+')';
        
        
        

    }else{
        goto.style.transform = 'translateX('+150+'%)';
        

    }
    
    


});

//smooth scroll
const scroll = new SmoothScroll(' a[href*="#"]',{
    speed:1100
    

});
/* observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `opacitytoone 1s forwards ease-out`;
    
    }
})

observer.observe(nav); */

//observer
/* observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 2s forwards ease-out`;
    
    }
},{threshold:0.3})

observer.observe(left); */
/* observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `righttozero 2s forwards ease-out`;
    
    }
},{threshold:0.3})

observer.observe(right);
 */
/* observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `opacitytoone 1.2s `;
    
    }
})

observer.observe(crt);
 */
var our =document.getElementById('our');
observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 2s forwards ease-out`;
    
    }
},{threshold:0.9})

observer.observe(our);

var l1 =document.getElementById('l1');
var l2 =document.getElementById('l2');
var c1 =document.getElementById('c1');
var c2 =document.getElementById('c2');
var r1 =document.getElementById('r1');
var r2 =document.getElementById('r2');

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 2s forwards ease-out`;
    
    }
},{threshold:0.6})

observer.observe(l1);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 2s forwards ease-out`;
    
    }
},{threshold:0.6})

observer.observe(l2);





observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `righttozero 1s   forwards ease-out`;
    
    }
},{threshold:0.6})
observer.observe(c1);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 1s forwards ease-out`;
    
    }
},{threshold:0.6})

observer.observe(c2);


observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `righttozero 2s forwards ease-out`;
    
    }
},{threshold:0.6})

observer.observe(r1);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `righttozero 2s  forwards ease-out`;
    
    }
},{threshold:0.6})

observer.observe(r2);

/* var meet = document.getElementById('meet'); */
var submeet = document.getElementById('submeet');
var slider1 = document.getElementById('slider1');
var About = document.getElementById('About');
var tellus = document.getElementById('tellus');
var left22 = document.getElementById('left22');
var right22 = document.getElementById('right22');
/* observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `opacitytoone 4s forwards ease-out`;
    
    }
},{threshold:0.9})

observer.observe(meet); */
observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `opacitytoone 5s forwards ease-out`;
    
    }
},{threshold:0.5})

observer.observe(submeet);
observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `scale1 2s forwards ease-out`;
    
    }
},{threshold:0.7})



observer.observe(slider1);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `scale1 2s forwards ease-out`;
    
    }
},{threshold:0.4})



observer.observe(About);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `scale1 2s forwards ease-out`;
    
    }
},{threshold:0.8})



observer.observe(tellus);

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `lefttozero 1s forwards ease-out`;
    
    }
},{threshold:0.4})



observer.observe(left22);
observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `righttozero 1s forwards ease-out`;
    
    }
},{threshold:0.4})



observer.observe(right22);
/* window.history.pushState('', 'New Page Title', '/'); */
/* var teamA = document.getElementById('teamA');
teamA.addEventListener('click',function(){
    console.log('clicked');
    window.history.pushState('', 'New Page Title', '/new-url.php');
    location.hash = "";
}); */