
    fetch('https://cybervine.github.io/resume.doc.html')
        console.log('fetch')
      .then(response => response.json())
      console.log('json', response)

      .then(data => {
        var ipAddress = data.ip;
        console.log('IP Address:', ipAddress);
        console.log('data', data)
      })
      .catch(error => {
        console.error('Error:', error);
      });