let form = document.querySelector('#citiForm');

async function getWeather(city){

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93RSZVKQYBGTMFHX4UJ9588L2&contentType=json`;

  try{
    const response = await fetch(url);

    if(!response.ok){
      throw new Error ('error al obtener los datos');
    }
    const datos = await response.json();
    console.log(datos)

  } catch(error){
    console.error(error);
  }
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  
  const city = document.querySelector('#city').value;
  if(city === ''){
    alert('escoge alguna ciudad');
    return;
  }

  getWeather(city);
  document.getElementById('city').value = '';
})