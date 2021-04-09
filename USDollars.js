var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    var res_arr = [];
    var countries_list = [];
    var symbols = [];
    var res = data.forEach(function(item){
        var curr = item.currencies;
        for(let i in curr){
            if(curr[i].symbol==='$'){
                countries_list.push(item.name);
                //countries_list.push(curr[i].name);
            }
        }
    })
    for(let i in countries_list){
        console.log(countries_list[i]);
    }
    
    
}