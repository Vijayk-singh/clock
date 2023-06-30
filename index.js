
    

setInterval(()=>{
    var d = new Date();
    date =d.toLocaleTimeString();
    var day =d.toLocaleDateString();
    document.getElementById("d").innerHTML =date;
    document.getElementById("date").innerHTML=day;
},60)

