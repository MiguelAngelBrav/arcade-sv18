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
    // which will ensure the game runs at the same speed for
    // all computers.

    // in this method you will change the x position of enemies
    // and yeah here you will need to multiply dt to speed
    // this.speed * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



//PLAYER CLASS
// This class requires an update(), render() and a handleInput() method.
//var Player = function(x, y, speed???) {
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

// 2 The render method for the Player (use the code from the render method for the Enemy)
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 3 The handleInput method - Player.handleInput() method
Player.prototype.handleInput = function() {
    // do something
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player();



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
