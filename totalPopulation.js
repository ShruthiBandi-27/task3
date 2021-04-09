var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    var res = data.map(function(item){
        return item.population;
    })
    var totalPopulation = res.reduce(function(acc,item){
            return acc + item;
    })
    console.log("Total Population: "+totalPopulation);
    
}