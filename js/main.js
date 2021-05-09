function wifiLists(username, date, data) {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    data.forEach(wifi =>{
        clon.querySelector('.t tbody').innerHTML += `<tr><td>${wifi.ssid}</td><td>${wifi.password}</td></tr>`
    });
    clon.querySelector('.title').innerHTML += `${username}<br>${date}`
    document.body.appendChild(clon);
}

data = []
$.ajax({
    method:'GET',
    url:'https://api.jsonbin.io/b/60970ca47a19ef1245a5c443/latest',
    success:function (response) {
        data = response;
        console.log(data);
        data.forEach(wifi => {
            wifiLists(wifi.username,wifi.date,wifi.data)
        });
    }
});