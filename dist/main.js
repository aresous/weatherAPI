(()=>{"use strict";document.querySelector(".weather-container");const e=async function(e){return await async function(e){let t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=fb26cf51dc89b8cefda54030ebd28499&units=imperial`,n=await fetch(t,{mode:"cors"});return await n.json()}(e)};let t=document.querySelector("#city-input"),n=document.querySelector("#city-button"),o=(document.querySelector(".weather-container"),document.querySelector(".weather-image")),c=document.querySelector(".description"),r=document.querySelector(".temperature");n.addEventListener("click",(n=>{e(t.value).then((e=>{console.log(e.weather[0].icon),o.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,c.textContent=e.weather[0].description,r.textContent=Math.floor(e.main.temp)+"°F"})).catch((e=>{console.log(e)}))})),t.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),n.click())})),e("honesdale").then((e=>console.log(e)))})();