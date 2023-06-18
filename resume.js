
fetch('https://api.ipify.org?format=json')
    console.log(response)
  .then(response => response.json())
    console.log(data)
  .then(data => {
    const ipAddress = data.ip;
    console.log(`IP Address: ${ipAddress}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
