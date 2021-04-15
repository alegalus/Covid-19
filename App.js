window.onload = iniciar

function iniciar(){
    let button = document.getElementById("cargarEstadistica")
    button.addEventListener("click", clickBoton)
   



}

async function cargarUrl(url){
    let response = await fetch(url)
    return response.json()

}


async function clickBoton(){
    let spinner = document.getElementById("donutSpinner")
    spinner.style.visibility = "visible"

    let pais = document.getElementById("selectPais").value
    let fecha = document.getElementById("inputFecha").value
    

    let json = await cargarUrl(`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`)
    console.log(json)
    let estadisticas = json.dates[fecha].countries[pais]
    console.log(estadisticas)
    document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed.toLocaleString()
    document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths.toLocaleString()
    document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed.toLocaleString()
    document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths.toLocaleString()
    document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered.toLocaleString()
    document.getElementById("today_open_cases").innerHTML = estadisticas.today_open_cases.toLocaleString()
    document.getElementById("today_recovered").innerHTML = estadisticas.today_recovered.toLocaleString()
    
    
    spinner.style.visibility = "hidden"
  
    
    

}





