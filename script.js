const body= document.querySelector("body");
const seeMore=document.querySelector(".see-more-wrap")

seeMore.addEventListener('click',() =>{
    console.log("see me")
})


  


  

const hamburgerOpen = document.querySelector('#hamburger');

hamburgerOpen.addEventListener('click', () => {
    document.body.classList.toggle('hamburger-open');
    console.log("open")
});




//body.addEventListener("scroll",()=>console.log('scroll'))
function logger(){
    console.log('reach')
}

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
      const target=document.querySelector('.artical1')
      
      let observer = new IntersectionObserver(()=>logger(), options);


// if (document.body.scrollTop > 1000) {
//    console.log('scroll')}