// Define the coordinates and photos
const photos = [
  { lat: 40.56992, lng: 22.99149, url: 'IMG_20230317_131114.jpg' },
  { lat: 51.51, lng: -0.1, url: 'https://drive.google.com/file/d/1QTyLW7yLepOBb3Efm6Y7CX29qiB3hVcS/view?usp=share_link' },
  { lat: 51.49, lng: -0.05, url: 'https://placekitten.com/400/300' },
];

const objects = [];
fetch('./image_data.txt')
  .then(response => response.text())
  .then(lines => lines.split('\r\n'))
  .then(data => {
     // Do product_list with your product data
    //  console.log(data);
    //  const [url, lat, lng] = data.split(',');
    //  objects.push({url: url, lat: lat, lng: lng});
    console.log(data);  
  });

  console.log(objects);

// Create the map
const map = L.map('mapid').setView([51.505, -0.09], 13);

// Add a different tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://carto.com/attribution/">CARTO</a>',
  maxZoom: 19
}).addTo(map);


// Add the photos as markers
for (const photo of photos) {
  const marker = L.marker([photo.lat, photo.lng]).addTo(map);
  marker.on('click', () => {
    window.open(photo.url, '_blank');
  });
}



