// // Define the coordinates and photos
// const photos = [
//   { lat: 40.56992, lng: 22.99149, url: 'IMG_20230317_131114.jpg' },
//   { lat: 51.51, lng: -0.1, url: 'https://drive.google.com/file/d/1QTyLW7yLepOBb3Efm6Y7CX29qiB3hVcS/view?usp=share_link' },
//   { lat: 51.49, lng: -0.05, url: 'https://placekitten.com/400/300' },
// ];

// console.log(typeof(photos));
// console.log(photos.length);
// console.log(photos[Object.keys(photos)[0]]); //returns 'someVal'
// console.log(Object.values(photos)[0]); // returns 'someVal'

// function myFunction(photos){

// const path = "./images/"
// fetch('./image_data.txt')
//   .then(response => response.text())
//   .then(lines => lines.split('\r\n'))
//   .then(data => {
//       for (const x of data) {
//         // code block to be executed
//         const [url, lat, lng] = x.split(',');
//         photos.push({url: path.concat(url), lat: parseFloat(lat), lng: parseFloat(lng)});
//       };
      
//   });
//   return photos;
// }


// const arr = [];
// myFunction(arr).then(arr_new => {
//   console.log(arr_new);
// });

function myFunction(photos){
  const path = "./images/";
  return new Promise((resolve, reject) => {
    fetch('./image_data.txt')
      .then(response => response.text())
      .then(lines => lines.split('\r\n'))
      .then(data => {
        for (const x of data) {
          const [url, lat, lng] = x.split(',');
          photos.push({url: path.concat(url), lat: parseFloat(lat), lng: parseFloat(lng)});
        };
        resolve(photos);
      })
      .catch(error => {
        reject(error);
      });
  });
}


// Create the map
const map = L.map('mapid').setView([40.6401, 22.9444], 6);

// Add a different tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://carto.com/attribution/">CARTO</a>',
  maxZoom: 19
}).addTo(map);




const arr = [];
myFunction(arr).then(arr_new => {
  arr_new.forEach(obj =>{
    const marker = L.marker([obj.lat, obj.lng]).addTo(map);
    marker.on('click', () => {
      window.open(obj.url, '_blank');
    });;

  });

}).catch(error => {
  console.log(error);
});

// Add the photos as markers
// for (const photo of photos) {

 
// }



