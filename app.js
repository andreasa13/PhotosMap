// Define the coordinates and photos
// const photos = [
//   { lat: 51.505, lng: -0.09, url: 'https://placekitten.com/200/300' },
//   { lat: 51.51, lng: -0.1, url: 'https://placekitten.com/300/200' },
//   { lat: 51.49, lng: -0.05, url: 'https://placekitten.com/400/300' },
// ];

fetch('image_data.txt')
  .then(response => response.text())
  .then(data => {
    const photos = [];
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const fields = lines[i].split(',');
      if (fields.length === 3) {
        const photo = {
          url: fields[0],
          lat: parseFloat(fields[1]),
          lng: parseFloat(fields[2])
        };
        photos.push(photo);
      }
    }
    console.log(photos);
  })
  .catch(error => console.error(error));



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



