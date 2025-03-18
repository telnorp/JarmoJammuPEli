var canvas = document.getElementById("gCanvas");
var ctx = canvas.getContext("2d");

var player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: "red",
    speed: 5
};

var world = new Image();
world.src = "../img/Orphanage pohja.png"; // Ensure this path is correct
world.onload = checkImagesLoaded;
world.onerror = function() {
    console.error("Failed to load world image.");
};

var playerImage = new Image();
playerImage.src = "../img/playeridle.png"; // Ensure this path is correct
playerImage.onload = checkImagesLoaded;
playerImage.onerror = function() {
    console.error("Failed to load player image.");
};

var imagesLoaded = 0;

function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 2) {
        draw(); // Draw only after both images are loaded
    }
}

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw the world
    ctx.drawImage(world, 0, 0, canvas.width, canvas.height);

    // Draw the player
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function movePlayer(direction) {
    if (direction === 'left') {
        player.x -= player.speed;
    } else if (direction === 'right') {
        player.x += player.speed;
    }
    draw();
}

window.onload = function() {
    window.onresize = draw;

    window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            movePlayer('left');
        } else if (event.key === 'ArrowRight') {
            movePlayer('right');
        }
    });
};
