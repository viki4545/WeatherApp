const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('searchBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer')
// const getInfo = (event) => {
//     alert('hii');
// }

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please enter your city name.`;
        data_hide.classList.add('data-hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7a5185c63badade1ab1e8b72e8dd57b2`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            
            // condition to check sunny or cloudy
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style = 'color: #eccc68'></i>"
            }else  if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style = 'color: #f1f2f6'></i>"
            }else  if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style = 'color: #a4b0be'></i>"
            }else{
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style = 'color: #eccc68'></i>"
            }

            data_hide.classList.remove('data-hide');
            
        }catch{
            city_name.innerText = `Please enter the correct city name.`;
            data_hide.classList.add('data-hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
