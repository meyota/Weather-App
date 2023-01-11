// Decalre a variable
let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const SearchInput=document.getElementById("Search-input");
const searchButton=document.getElementById("search-button");



searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(SearchInput.value);
SearchInput.value='';


});

// code for particular location

const getWeather=async (city)=>
{
    try {

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f775fa788ff6def2f93ebedcc62377a5 `,
            {mode: 'cors'}
        );   
        
    

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="./icons/thunderstorm.png"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="./icons/cloud-solid.png"
        }
       else if(id<600&& id>500)
        {
            tempicon.src="./icons/rain.png"
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="./icons/snow.png"
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="./icons/clouds.png"
        }
         else if(id==800)
        {
            tempicon.src="./icons/clouds-and-sun.png"
        }



   
    }
catch(error)
{
    alert('city not found');
}





};


// Takes users current location

window.addEventListener("load",()=>{

    let lon;
    let lat;

    // checks if the browser supports geolocaliation

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {

            lon=position.coords.longitude;
            lat=position.coords.latitude;

                const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f775fa788ff6def2f93ebedcc62377a5 `
                
                // fetch data from api

                fetch(api).then((response)=>{
                    return response.json();
                })
                // convert json to text data

                .then (data =>
                    {
                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];

                    // set current location to id
                    
                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                    console.log(data);

                    if(id<300 && id>200)
                    {
                        tempicon.src="./icons/thunderstorm.png"
                    }
                   else  if(id<400 && id>300)
                    {
                        tempicon.src="./icons/cloud-solid.png"
                    }
                   else if(id<600&& id>500)
                    {
                        tempicon.src="./icons/rain.png"
                    }
                   else  if(id<700 && id>600)
                    {
                        tempicon.src="./icons/snow.png"
                    }
                   else  if(id<800 && id>700)
                    {
                        tempicon.src="./icons/clouds.png"
                    }
                     else if(id==800)
                    {
                        tempicon.src="./icons/clouds-and-sun.png"
                    }

                    
                    })

        })
    }
})
