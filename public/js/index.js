import menuSider from './menuSider.js';
import selectorMainContent from './selectorMainContent.js';
import sliders from './slides.js';

menuSider();
selectorMainContent();
sliders();

// document.querySelector('.toggle_categories').addEventListener('click', () => {
//     document.querySelector('.categories').classList.toggle('show');
// });

// document.querySelector('.categories__a_close').addEventListener('click', () => {
//     document.querySelector('.categories').classList.toggle('show');
// });

// const contentSelector = document.querySelector('.content__selector');

// for(let child of contentSelector.children) {
//     child.addEventListener('click', () => {
//         for(let sibling of contentSelector.children) {
//             sibling.classList.remove('selector_focused')
//         }
//         child.classList.add('selector_focused')
//     })
// };

// document.addEventListener('click', (e) => {
//     const cat = document.querySelector('.categories');
//     if(cat.classList.contains('show') && e.target !== document.querySelector('.toggle_categories') 
//     && !e.target.classList.contains('categories') && !hasAncestorOfClass(e.target, 'categories')) {
//         cat.classList.remove('show');
//     }
// });

// const hasAncestorOfClass = function(elem, className){
//     if(elem === document.body.parentNode) return false;
//     return elem.parentNode.classList.contains(className)? true : hasAncestorOfClass(elem.parentNode, className);
// }

// const bannerPromObject = {
//     ul: document.querySelector('.banner_prom__ul'),
//     moved: true,
// }

// bannerPromObject.length = document.querySelector('.banner_prom__ul').children.length;
// for(let i=0; i<bannerPromObject.length; i++) {
//     bannerPromObject.ul.children[i].style.order = i
// }
// bannerPromObject.move = function(slide) {
//     if(!this.moved) return;
//     this.moved = false

//     for(let i=0; i<this.length; i++) {
//         bannerPromObject.ul.children[i].style.animation = `slide_${slide==1?'left':'right'} 2s normal`
//         setTimeout(() => {
//             let newOrder = (parseInt(this.ul.children[i%this.length].style.order)-slide*1+this.length)%this.length
//             this.ul.children[i%this.length].style.order = newOrder
//             bannerPromObject.ul.children[i].style.animation = 'none'
//             this.moved = true
//         }, 1900)
//     }

// }

// let milis = 5000, idInterval

// function startInterval() {
//     idInterval = setInterval(() => {
//         bannerPromObject.move(-1)
//     }, milis)
// }
// startInterval()

// document.querySelector('#banner_prom__left').addEventListener('click', () => {
//     bannerPromObject.move(-1)
//     clearInterval(idInterval)
//     startInterval()
// })

// document.querySelector('#banner_prom__right').addEventListener('click', () => {
//     bannerPromObject.move(1)
//     clearInterval(idInterval)
//     startInterval()
// })
