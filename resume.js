
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
