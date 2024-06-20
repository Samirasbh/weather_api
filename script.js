

// get input
var cityInput = document.getElementById("city");
// get button to onclick event
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var cityName = cityInput.value;
  // axios to index.php for retrive data from openmap site
    axios.get(`http://localhost/php_basic/03-ex/index.php?city=${cityName}`).then((r) => {
      if (r.data.status == "ok") {
        // get data from index.php curl result
        const myData = r.data.data;
        var json = JSON.parse(myData);
        // generate html code by js code
        const myHTML = `
        <h2>${json["name"]} Weather Status</h2>
        <div class="time">
            <div>${new Date().toLocaleString()}</div>
            <div>weather : ${json["weather"][0]["main"]}</div>
            <div>weather description :${json["weather"][0]["description"]}</div>
        </div>

        <div class="info">
            <div><p>minimum temperature:</p> <p>${json["main"]["temp_min"]} degree </p>  </div>
            <div><p>maximum temperature:</p>  <p>${json["main"]["temp_max"]} degree</p>  </div>
            <div><p>humidity:</p> <p>${json["main"]["humidity"]}%</p>  </div>
            <div><p>Wind:</p>  <p>${json["wind"]["speed"]} km/h</p> </div>
        </div> 
        
        `;
        document.getElementById("weather").innerHTML = myHTML;
      }
    });
    if(!(cityName)){
      const myHTML = `
            <h2>enter city name</h2>
      `;
      document.getElementById("weather").innerHTML = myHTML;
    }
});