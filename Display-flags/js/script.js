const API_URL = "https://restcountries.com/v3.1/all"

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData)
    for(ind = 0; ind < countriesData.length; ind++){
        console.log(countriesData[ind].flags.png);// for Display all the country flags in the console
        
    }
  }
  
  const req = new XMLHttpRequest();

  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();