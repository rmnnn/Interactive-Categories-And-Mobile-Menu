let menuBtn = document.querySelector('.header button');



const mobileMenu = () =>{
    let menu = document.querySelector('.header ul');
    let menuBtn = document.querySelector('.header button');

    if(menuBtn.innerText === 'MENU'){
        menu.style.display = 'block';
        menuBtn.innerText = 'CLOSE';
    }else{
        menu.style.display = 'none';
        menuBtn.innerText = 'MENU';
    }
};
menuBtn.addEventListener('click', mobileMenu);
const imageSlider = () => {
    let rightBtn = document.querySelector('#right-btn');
    let leftBtn = document.querySelector('#left-btn');
    let images = document.querySelectorAll('.slider-images img');
    let imgNum = 0;

    rightBtn.addEventListener('click', ()=>{
        images.forEach((image)=>{
            image.style.display = 'none';
        });
        imgNum++;
        if(imgNum === images.length){
            imgNum = 0;
        }
        images[imgNum].style.display = 'block';
    })

    leftBtn.addEventListener('click', ()=>{
        images.forEach((image)=>{
            image.style.display = 'none';
        });
        imgNum--;
        if(imgNum === -1){
            imgNum = images.length -1;
        }
        images[imgNum].style.display = 'block';
    })
}
imageSlider();

let pCategories = document.querySelector('.portfolio-categories');
let categoriesButtons = pCategories.querySelectorAll('button');

categoriesButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let category = button.getAttribute('data-category');
            let singleItem = document.querySelectorAll('.portfolio-single-item');

    singleItem.forEach((item)=>{        
        item.style.display = 'none';
    })
    if(category === 'sve'){
        singleItem.forEach((item)=>{        
            item.style.display = 'block';
        })
    }
    
    singleItem.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    })
    })
})

let modalSection = document.querySelector('.modal-section');
let modalBtn = modalSection.querySelectorAll('button');
let modal1 = document.querySelectorAll('.modal-1');
let modal2 = document.querySelectorAll('.modal-2');
let closeModal = document.querySelectorAll('#closeModal');
let overlay = document.querySelector('.overlay');
modal1[0].addEventListener('click', ()=>{
    modal1[1].style.display = 'block';
    overlay.style.display = 'block';
})

modal2[0].addEventListener('click', ()=>{
    modal2[1].style.display = 'block';
    overlay.style.display = 'block';

})

closeModal.forEach((close)=>{
    close.addEventListener('click', (e)=>{
        let parent = e.target.closest('.popup-modal');
        parent.style.display = 'none';
        overlay.style.display = 'none';

    })
})



/*
    *task: sve onclick u htmlu prebaciti u event listenere ((done))
    *task: dodati 2 kat. u portfolio i par itema. ((done))
    *task: jos jedan modal razliciti pored ovog  ((done))
*/