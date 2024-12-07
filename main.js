
import { getPlanetBlob } from "./fetch.js";


// use DOM to create variables to edit HTML elements.

    const planetSun=document.querySelector(".sun");
    const planetMercury=document.querySelector(".mercury");
    const planetVenus=document.querySelector(".venus")  ;
    const planetEarth=document.querySelector(".earth");
    const planetMars=document.querySelector(".mars");
    const planetJupiter=document.querySelector(".jupiter");
    const planetSaturn=document.querySelector(".saturn");
    const planetUranus=document.querySelector(".uranus");
    const planetNeptune=document.querySelector(".neptune");
    const popupPage=document.querySelector(".popup__page");
    const closeBtn=document.querySelector(".close__button");
    const planetSolid=document.querySelector(".planet__solid");
    const planetInnerRing=document.querySelector(".planet__ring--inner");
    const planetOuterRing=document.querySelector(".planet__ring--outer");

    const planetMoonsUl=document.querySelector(".moon__list");
    const planetName=document.querySelector(".planet__name");
    const planetLatinName=document.querySelector(".planet__latin");
    const planetIntro=document.querySelector(".planet__intro");
    const planetCircumference=document.querySelector(".cm__text");
    const planetMaxTemp=document.querySelector(".max__text");
    const planetMinTemp=document.querySelector(".min__text");
    const planetDistance=document.querySelector(".km__text");


    // create function getPlanetData to input planet data fetched from API in each html element

    const getPlanetData=(index)=> getPlanetBlob(index)
                .then(values=>{
                    planetName.innerHTML=values.name;
                    planetLatinName.innerHTML=values.latinName;
                    planetIntro.innerHTML=values.desc;
                    planetCircumference.innerHTML=`${values.circumference} km`;
                    planetMaxTemp.innerHTML=`${values.temp['day']} C`;
                    planetMinTemp.innerHTML=`${values.temp['night']} C`;
                    planetDistance.innerHTML=`${values.distance} km`;
                    values.moons.forEach(element => {
                        let moonListItem=document.createElement("li");
                        moonListItem.textContent=element;
                        planetMoonsUl.appendChild(moonListItem);
                    });
                })


// create close button by adding eventlistener and to reset the list of moon after close the popup page

closeBtn.addEventListener('click',()=>{
    popupPage.style.display="none";
    planetMoonsUl.innerHTML="";
    })


// using eventlistener to change the display of popup page to 'block' and the style of planet and planet rings to suit each planet

planetSun.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#FFD029";
    planetInnerRing.style.backgroundColor="#FFD029";
    planetOuterRing.style.backgroundColor="#FFD029";
    getPlanetData(0)
  
    })


planetMercury.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#888888";
    planetInnerRing.style.backgroundColor="#888888";
    planetOuterRing.style.backgroundColor="#888888";
    getPlanetData(1)
   
    })

planetVenus.addEventListener("click",()=>{
        popupPage.style.display="block";
        planetSolid.style.backgroundColor="#E7CDCD";
        planetInnerRing.style.backgroundColor="#E7CDCD";
        planetOuterRing.style.backgroundColor="#E7CDCD";
        getPlanetData(2)
       
    })

    
planetEarth.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#428ED4";
    planetInnerRing.style.backgroundColor="#428ED4";
    planetOuterRing.style.backgroundColor="#428ED4";
    getPlanetData(3)
})

planetMars.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#EF5F5F";
    planetInnerRing.style.backgroundColor="#EF5F5F";
    planetOuterRing.style.backgroundColor="#EF5F5F";
    getPlanetData(4)
})

planetJupiter.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#E29468";
    planetInnerRing.style.backgroundColor="#E29468";
    planetOuterRing.style.backgroundColor="#E29468";
    getPlanetData(5)
})

planetSaturn.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#C7AA72";
    planetInnerRing.style.backgroundColor="#C7AA72";
    planetOuterRing.style.backgroundColor="#C7AA72";
    getPlanetData(6)
})

planetUranus.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#C9D4F1";
    planetInnerRing.style.backgroundColor="#C9D4F1";
    planetOuterRing.style.backgroundColor="#C9D4F1";
    getPlanetData(7)
})

planetNeptune.addEventListener("click",()=>{
    popupPage.style.display="block";
    planetSolid.style.backgroundColor="#7A91A7";
    planetInnerRing.style.backgroundColor="#7A91A7";
    planetOuterRing.style.backgroundColor="#7A91A7";
    getPlanetData(8)
})
