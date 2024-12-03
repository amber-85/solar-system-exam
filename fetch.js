export const getPlanetData()

const getPlanetData=(index,property)=>
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
                const planet=tex.bodies[index];
                return planet[property];
            })