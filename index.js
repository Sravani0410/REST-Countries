const countries=document.querySelector(".main")
const dropDown=document.querySelector(".dropdown")
const dropElem=document.querySelector(".drop")
const region=document.querySelectorAll(".region")
const search=document.querySelector(".search")

// all country displayed in the main
async function getCountry(){
  const url=await fetch("https://restcountries.com/v3.1/all")
  const res=await url.json()
  console.log(res)
  res.map(e=>{
    showCountry(e)
  })
  
}
getCountry()

function showCountry(data){
   const country=document.createElement("div")
   country.classList.add("country")
   country.innerHTML=`
               <div class="country-img">
                  <img src="${data.flags.png}" alt="">
               </div>
               <div class="country-info">
                    <h5 class="countryName">${data.name.common}</h5>
                    <p><strong>Population :</strong>${data.population}</p>
                    <p class="regionName"><strong>Region :</strong>${data.region}</p>
                    <p><strong>Capital :</strong>${data.capital}</p>
               </div>`
    countries.appendChild(country)           
}


// dropdown functionally
dropDown.addEventListener("click",()=>{
   dropElem.classList.toggle("showDropdown")
//    console.log("click")
})

//Filter functionality by region-->inside dropdown functionally
const regionName=document.getElementsByClassName("regionName")
region.forEach(e=>{
    e.addEventListener("click",()=>{
        // console.log(e.innerText)
        // console.log(e)
       Array.from(regionName).forEach(elem=>{
        // console.log(e)
        if(elem.innerText.includes(e.innerText)|| e.innerText=="All"){
           elem.parentElement.parentElement.style.display="grid"
        }
        else{
            elem.parentElement.parentElement.style.display="none"
        }
       })
    })
})


// search by country
const countryName=document.getElementsByClassName("countryName")
search.addEventListener("input",()=>{
    // console.log(search.value)
    Array.from(countryName).forEach(elem=>{
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            elem.parentElement.parentElement.style.display="grid"
        }
        else{
            elem.parentElement.parentElement.style.display="none"
        }
    })
})