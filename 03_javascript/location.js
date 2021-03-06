//        document.addEventListener("DOMContentLoaded", getJson);

let map;
let markers;
//console.log(markers);
function initMap() {
    var centrum = {
        lat: 55.685081,
        lng: 12.568769
    };
    map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 13,
        center: centrum
    });
    getJson();
}

async function getJson() {
    let jsonData = await fetch("04_json/location.json");
    markers = await jsonData.json();
    markers.forEach(pos => {
        let marker = new google.maps.Marker({
            position: pos.position,
            title: pos.title,
            content: pos.content,
            icon: pos.icon,
            map: map
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        var infowindow = new google.maps.InfoWindow({
            content: pos.content

        });
        //        console.log(pos.content);
    });
}


//'<img id="logo" src="/food8_imgs/location_icons/NOHO.png" alt="logo" center><strong> NOHO</strong><br>Flæsketorvet 28,<br>1711 København V Danmark<br> <a href = "http://mikkelhein.dk/kea/food8/wordpress/2018/04/17/noho-2/">Besøg siden her</a>'
