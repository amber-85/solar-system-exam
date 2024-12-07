
// create getPlanetBlob function to fetch API bodies's value (bodies is an object with only 1 key:"bodies")
// using post to get API key first, and using "then" to deal with fetched data, using json()to jsonify data to readable data
// then using get and headers{dat.key} to fetch API bodies


export const getPlanetBlob=(index)=>
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
            
            //bodies is an object with only one key-bodies, using tex.bodies means selecting the values of the key 'bodies'
            // which is an array, therefore index can be used
            // console.log((tex));               
            // console.log(tex.bodies[index]);
                return tex.bodies[index];         
    }) 


