var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   // todo

   earth.setView([60.16033487035952,24.948333806181136]);

   earth.setZoom(15);

}

function showCoords() {
   // todo

   alert(earth.getCenter());

}

60.16033487035952,24.948333806181136