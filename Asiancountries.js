var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    
         var res = data.filter(function(item){
            return item.region=="Asia";
        });
        for(i in res){
            console.log(res[i].name+" :"+res[i].region);
        }
    
    
}