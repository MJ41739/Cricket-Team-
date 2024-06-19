arr = new Array();
v = new Array();
t1 = new Array();
t2 = new Array();

// console.log(random)
const ran = () => {
    return (Math.round(Math.random()*10))
}

const p1 = document.querySelector('.p1')
const x1 = document.getElementById('one');
const p2 = document.querySelector('.p2')
const x2 = document.getElementById('two');
const p3 = document.querySelector('.p3')
const x3 = document.getElementById('three');
const p4 = document.querySelector('.p4')
const x4 = document.getElementById('four');
const p5 = document.querySelector('.p5')
const x5 = document.getElementById('five');
const p6 = document.querySelector('.p6')
const x6 = document.getElementById('six');
const p7 = document.querySelector('.p7')
const x7 = document.getElementById('seven');
const p8 = document.querySelector('.p8')
const x8 = document.getElementById('eight');
// console.log(arr)

document.addEventListener('DOMContentLoaded', function(){

    p1.addEventListener('click',function(e){
        arr.push("p1")
        x1.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p2.addEventListener('click',function(e){
        arr.push("p2")
        x2.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p3.addEventListener('click',function(e){
        arr.push("p3")
        x3.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p4.addEventListener('click',function(e){
        arr.push("p4")
        x4.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p5.addEventListener('click',function(e){
        arr.push("p5")
        x5.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p6.addEventListener('click',function(e){
        arr.push("p6")
        x6.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p7.addEventListener('click',function(e){
        arr.push("p7")
        x7.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })
    p8.addEventListener('click',function(e){
        arr.push("p8")
        x8.style.backgroundColor = "greenyellow";
        // console.log(arr[0])
    })


})
let z = 0
let cnt=0
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    while(cnt < arr.length){
        for (let i=0; i<arr.length;i++){
            random=ran();
            if (random >= 0 & random < arr.length){
                if (arr[random] in v){
        
                }
                else{
                    switch(z){
                    case 0:
                        v.push(arr[random])
                        t1.push(arr[random])
                        z=1
                        console.log("case 0 ")
                        cnt +=1
                        break;
                    case 1:
                        v.push(arr[random])
                        t2.push(arr[random])
                        z=0
                        console.log("case 1 ")
                        cnt +=1
                        break;
                }}
            }
            
        }}
})
// console.log(arr)
// for (let i=0; i<arr.length;i++){
//     if (random >= 0 & random < arr.length){
//         if (arr[random] in v){

//         }
//         else{
//             switch(z){
//             case '0':
//                 v.push(arr[random])
//                 t1.push(arr[random])
//                 z=1
//                 console.log("case 0 ")
//                 break;
//             case '1':
//                 v.push(arr[random])
//                 t2.push(arr[random])
//                 z=0
//                 console.log("case 1 ")
//                 break;
//         }}
//     }
    
// }
