// ENEMY CLASS
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // 1 Setting the Enemy initial location
    this.x = x;
    this.y = y;
    // 2 Setting the Enemy speed
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // 3 Loading the image by setting this.sprite to the appropriate image in the image folder 
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    if (this.x < 505)
        this.x += (this.speed * dt);
    else
        this.x = -300;

    // Vehicle-player collision resets the game
    if (this.x < player.x + 50 &&
    this.x + 50 > player.x &&
    this.y < player.y + 50 &&
    this.y + 50 > player.y)
    player.reset();
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



//PLAYER CLASS
var Player = function(x, y) {
    // Setting the Player initial location
    this.x = x;
    this.y = y;
    // Setting the Player speed
    // this.speed = speed;
    // Loading the image by setting this.sprite to the appropriate image in the image folder
    this.sprite = 'images/char-pink-girl.png';
};

// 1 The update method for the Player (can be similar to the one for the Enemy)
Player.prototype.update = function(dt) {
    // do something
};

// 2 The render method for the Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// 3 The handleInput method - Player.handleInput() method
Player.prototype.handleInput = function(keypress) {
    // canvas.width = 505
    // canvas.height = 606;

    switch (keypress) {
        // Move player left
        case 'left':
            this.x -= 100;
            break;
        // Move player up
        case 'up':
            this.y -= 83;
            break;
        // Move player right
        case 'right':
            this.x += 100;
            break;
        // Moe player down
        case 'down':
            this.y += 83;
            break;
    }

    // Recall that the player cannot move off screen
    if (this.x > 400) {
        this.x = 400;
        console.log('outside right');
    }
    if (this.x < 0) {
        this.x = 0;
        console.log('outside left');
    }
    if (this.y > 405) {
        this.y = 405;
        console.log('outside bottom');
    }
    if (this.y < 0) {
        console.log('call reset method');
        setTimeout(winnerMessage, 200)
        // player.reset();
    }
};

// If the player reaches the water the game should be reset by moving the player
// back to the initial location (you can write a separate reset Player method to handle that).
Player.prototype.reset = function() {
    this.y = 405;
    this.x = 200;
};

// CONGRATULATIONS POPUP MESSAGE
function winnerMessage() {
    swal(
        'Good job!'
    ).then(player.reset())
}


// Now instantiate your objects
var enemyOne = new Enemy(-300, 63, 270);
var enemyTwo = new Enemy(-500, 140, 270);
var enemyThree = new Enemy(-100, 229, 270);
var enemyOneBack = new Enemy(-600, 63, 270);
var enemyTwoBack = new Enemy(-50, 140, 270);
var enemyThreeBack = new Enemy(-400, 229, 270);

// Place all enemy objects in an array called allEnemies
allEnemies = [enemyOne, enemyTwo, enemyThree, enemyOneBack, enemyTwoBack, enemyThreeBack];

// Place the player object in a variable called player
var player = new Player(200, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
