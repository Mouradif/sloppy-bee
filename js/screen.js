// Ideal width and height for current screen
var targetWidth = 720;
var targetHeight = 480;

var deviceRatio = window.innerWidth / window.innerHeight;
var newRatio = (targetHeight / targetWidth) * deviceRatio;

var gameWidth = targetWidth * newRatio;
var gameHeight = targetHeight;

// Better ?
var gameRatio = window.innerWidth/window.innerHeight;
gameWidth = 640 * gameRatio;
gameHeight = 640;

// F*CK That Sh*t
gameWidth = window.innerWidth;
gameHeight = window.innerHeight;