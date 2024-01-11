const containor = document.querySelector("#main-containor");

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/nepal");
request.send();

request.addEventListener("load", function () {
  // console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const dataHTML = `
      <div class="img-div">
      <img src="${data.flags.png}" alt="" />
        </div>
        <h1>${data.name.common}</h1>
        <h2> Capital :${data.capital}</h2>
                <div class = "country-data">
                    <h3>Population:</h3>
                    <h3>Region:</h3>
                    <h3>Subregion:</h3>
                </div>
                          <div class = "country-data2">
                          <h3>${data.population}</h3>
                          <h3>${data.region}</h3>
                          <h3>${data.subregion}</h3>
                      </div>
  `;
  containor.insertAdjacentHTML("afterbegin", dataHTML);
});
