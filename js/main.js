// alligator map
let hunt_map = L.map('hunt_map').setView([28.179686, -83.437402], 5.86);

L.tileLayer('https://api.mapbox.com/styles/v1/diegoperdomouf/cm4al1pgo01af01qr0g0y1t7h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGllZ29wZXJkb21vdWYiLCJhIjoiY20zcXNyY2lmMHJicTJtb2hxYmptbWw3MSJ9.Ea8oXnS-GUzSNx16-hyV3Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20
}).addTo(hunt_map);

const harvest = [{"locations":"1995 Ellie Lane","business":"Cutrale Farms Inc","purpose":"Farm labor and management","harvest":128,"lat":27.062783449726,"long":-81.509582276322,"place":"1st"},
    {"locations":"3900 Peninsula Point","business":"Sanford Boat Works & Marina, Inc. - nearby is a restaurant called Gators Riverside Grille","purpose":"Marina","harvest":121,"lat":28.801736183838,"long":-81.213691915019,"place":"2nd"},
    {"locations":"3583 County Rd 788","business":"Florida Bass Conservation Center","purpose":"Freshwater fish hatchery","harvest":93,"lat":28.4812580135,"long":-82.045340995325,"place":"3rd"},
    {"locations":"1329 Fish Hatchery Road","business":"Wilderness Shores Ranch & Campground","purpose":"Campground","harvest":84,"lat":28.061175438714,"long":-81.895567761132,"place":"4th"},
    {"locations":"956 Old State Route 8","business":"Costa Delray - Plant nursery","purpose":"Plant Nursery","harvest":67,"lat":27.106987990954,"long":-81.363124987745,"place":"5th"},
    {"locations":"2832 North Main Street","business":"South Florida Conservancy District","purpose":"Water Management","harvest":66,"lat":26.724191563031,"long":-80.667307766434,"place":"6th"},
    {"locations":"202 N. Florida Avenue","business":"Volusia County Parks Recreation and Culture","purpose":"Government Office","harvest":58,"lat":29.030246980968,"long":-81.305691013721,"place":"7th"},
    {"locations":"126 Rosalia Court","business":"Jupiter Country Club? - Has a golf course","purpose":"Country club with a golf course","harvest":51,"lat":26.931861996153,"long":-80.162549037562,"place":"8th"},
    {"locations":"8175 Lakewood Ranch Blvd.","business":"Lakewood Ranch Town Hall","purpose":"City Hall","harvest":49,"lat":27.395293986143,"long":-82.437343999016,"place":"9th"},
    {"locations":"1987 Scrub Jay Way","business":"Merritt Island National Wildlife Refuge Visitor Center","purpose":"Wildlife Refuge","harvest":47,"lat":28.68476945762,"long":-80.904806278923,"place":"10th"}];

    for (let i = 0; i < harvest.length; i++) {
        L.marker([harvest[i].lat, harvest[i].long]).bindPopup(
            '<h3>' + harvest[i].business + '</h3>' + 
            '<h4>' + harvest[i].place + ' most harvests' + '</h4>' +
            '<p>' + '<b>' + 'Function: ' + '</b>' + harvest[i].purpose + '<br>' + '<b>' + 'Address: ' + '</b>' + harvest[i].locations + '</p>').addTo(hunt_map);
    }

// Scroll Trigger
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#hunt_map", {
        ScrollTrigger: {
            trigger: "#hunt_map",
            toggleActions: "restart pause reverse pause"
        },
        x: 200,
        duration: 2
    })
    
   });
