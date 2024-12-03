
// use DOM to create variables to edit HTML elements.
// create variable for each plantet and panet rings on popup rings

    const planetSun=document.querySelector("aside.sun");
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
    const planetOuterRing=document.querySelector(".planet__ring--outer")


//create variable for each elements to visualize the description of each planet fetched from API

    const planetMoonsUl=document.querySelector(".moon__list");
    const planetName=document.querySelector(".planet__name");
    const planetLatinName=document.querySelector(".planet__latin");
    const planetIntro=document.querySelector(".planet__intro");
    const planetCircumference=document.querySelector(".om__text");
    const planetMaxTemp=document.querySelector(".max__text");
    const planetMinTemp=document.querySelector(".min__text");
    const planetDistance=document.querySelector(".km__text");
  

    




// const getPlanetData=(index,property)=>
//     fetch ("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",{
// method:'POST'})
// .then(res => res.json())
// .then(dat =>{
//             return fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",{
//                 method:'GET',
//                 headers:{'x-zocom':dat.key}        
//             })
//         }).then(jSon =>
//             jSon.json())
//             .then(tex =>{   
//                 const planet=tex.bodies[index];
//                 return  planet[property];
//             })
//             .then(values=>{
//                 const
//             })
           
const getPlanetData=(index)=>
    fetch ("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",{
method:'POST'})
.then(res => res.json())
.then(dat =>{
            return fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",{
                method:'GET',
                headers:{'x-zocom':dat.key}        
            })
        }).then(jSon =>
            jSon.json())
            .then(tex =>{   
            //    console.log(tex.bodies[index]);
                return tex.bodies[index];         
    }) 
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


closeBtn.addEventListener('click',()=>{
    popupPage.style.display="none";
    planetMoonsUl.innerHTML="";
    })


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
