
      // Get the ball element
      var ball = document.getElementById("ball");

      // Set the initial position of the ball
      var posX = window.innerWidth / 2;
      var posY = window.innerHeight / 2;
      ball.style.left = posX + "px";
      ball.style.top = posY + "px";

      // Set the speed and direction of the ball
      var speedX = Math.random() *1.5;
      var speedY = Math.random() *1.5;

      // Update the ball's position at regular intervals
      setInterval(updateBallPosition, 10);


      function createTrail() {
        // Create a new trail element
        var trailElement = document.createElement("div");
        trailElement.className = "trail";
        trailElement.style.left = posX + "px";
        trailElement.style.top = posY + "px";
        document.body.appendChild(trailElement);

        // Add the trail element to the trail array
        trail.push(trailElement);

        // Remove the oldest trail element if the trail length exceeds a certain number
        if (trail.length > 10) {
          var oldestTrail = trail.shift();
          oldestTrail.parentNode.removeChild(oldestTrail);
        }
      }

      function updateBallPosition() {
        // Update the position of the ball based on the speed
        posX += speedX;
        posY += speedY;

        // Make the ball bounce off the screen edges
        if (posX < 0 || posX + ball.offsetWidth > window.innerWidth) {
          speedX *= -1;
        }
        if (posY < 0 || posY + ball.offsetHeight > window.innerHeight) {
          speedY *= -1;
        }

        // Update the CSS properties of the ball element
        ball.style.left = posX + "px";
        ball.style.top = posY + "px";
      }
