'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const country=function(x){
// const req=new XMLHttpRequest();
// req.open('GET',`https://restcountries.com/v3.1/name/${x}`)
// req.send();

//     req.addEventListener('load',function()
//     {  const data=JSON.parse(this.responseText)
//         console.log(data)

//         const html=`
//         <article class="country">
//           <img class="country__img" src="${data[1].flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data[1].name.common}</h3>
//             <h4 class="country__region">${data[1].reg}</h4>
//             <p class="country__row"><span>👫</span>${data[1].population}</p>
//             <p class="country__row"><span>🗣️</span>${data[1].languages.hin}</p>
//             <p class="country__row"><span>💰</span>${data[1].currencies.INR.name
//             }]</p>
//           </div>
//         </article>`
        
//         countriesContainer.insertAdjacentHTML('beforebegin',html)
//         countriesContainer.style.opacity=1;
//         console.log(data.area)
//     })
// }
// country("india")
// setTimeout(()=>{
//     console.log( " i sec wait ")
//     setTimeout(()=>{
//         console.log(" 2 second wait ")
//         setTimeout(()=>{
//             console.log(" 3 sec wait")
//         },1000)
//     },1000)
// },1000)


//MODERN WAY  TO AJAX CALL
const request=fetch('https://restcountries.com/v3.1/name/india')
request.then(function(response){
    
    return response.json(); 
}).then(function(data){
    console.log(data[0]);
    return fetch('https://restcountries.com/v3.1/name/india')
})
.then(function(res2){
    return res2.json();
})
.then(function(data2){
    console.log(data2[1])
    return fetch('https://restcountries.com/v3.1/name/india')
}).then((res3)=>res3.json())
.then((data3)=>{
  console.log(data3)
})