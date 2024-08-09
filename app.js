document.getElementById('weatherForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value;
  const response = await fetch(`/api/weather?city=${city}`);
  const data = await response.json();
  
  const resultDiv = document.getElementById('weatherResult');
  if (data.error) {
    resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
  } else {
    resultDiv.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  }
});
