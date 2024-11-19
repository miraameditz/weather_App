let div = document.getElementById("output");
let input = document.getElementById("input");


function showBtn() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=6c76be8bc2604290875171348241911&q=${input.value}&aqi=no`
  )
    .then((res) => res.json())
    .then(
      (res) =>
        (div.innerHTML = `
            <div class="card" >
          <img src="https:${res.current.condition.icon}" />
          <h1>${res.location.country} , ${res.location.name}</h1>
          <h1>${res.current.temp_c} °C</h1>
          <h4>Humidity : ${res.current.humidity} %</h4>
          </div>
          `)
    )
    .catch((error) => {
      console.error("Error AAraha h", error);
      div.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    });
}