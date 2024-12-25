// var c = 300

let a = 40

if(true)
{
    let a= 10
    const b= 20
    console.log("inneer: ",a);

    // var c=30
}


// only c will print throught this other two not come out of if because not return value was there

// console.log(c);

console.log(a);

function one(){
    const username = "dhruv"

    function two(){
        const website = "instagram"
        console.log(username); // this will work
        console.log("add: ",website+username); // this will work
        
    }
    // console.log(website); // this is an error
    console.log("first: ",username);
    two()
    console.log("second: ",username);
    
    
}

one()

if(true){
    const username = "bansal"
    if(username === "bansal"){
        const website = " twitter"
        console.log(username+website);
        
    }
  //  console.log(website); // this is an error because we study above why this error come
    
}

// console.log(username); // same error as above 

// +++++++++++++++++++++ interesting ++++++++++++++++++

console.log("before: ",addinteresting(7))

function addinteresting(value){
    return value + 1
}

console.log("after: ",addinteresting(6))


// console.log(addAbove(5)) // this is an error because we store function in const
const addAbove = function(value){
    return value+2
}

console.log(addAbove(5))