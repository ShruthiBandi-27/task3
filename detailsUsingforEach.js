var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach(function(item){
        console.log("Name:"+item.name+","+"Capital:"+item.capital+",Flag:"+item.flag);
    })
}