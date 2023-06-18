
console.log('/////////////////////')

fetch('https://ipapi.co/json/') // Replace the URL with the geolocation API endpoint
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the entire data object
    const latitude = data.latitude; // Extract latitude value
    const longitude = data.longitude; // Extract longitude value
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });

console.log('/////////////////////')

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log(`Screen Resolution: ${screenWidth}x${screenHeight}`);

console.log('/////////////////////')

fetch('https://api.useragent.io/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const userAgent = data.user_agent;
    console.log(`User Agent: ${userAgent}`);
    // Extract other relevant properties from the data object as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });

console.log('/////////////////////')

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
          console.log(data, data.ip)
    const ipAddress = data.ip;
    console.log(`IP Address: ${ipAddress}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });


