// Ideal width and height for current screen
/*
var targetWidth = 720;
var targetHeight = 480;

var deviceRatio = window.innerWidth / window.innerHeight;
var newRatio = (targetHeight / targetWidth) * deviceRatio;

var gameWidth = targetWidth * newRatio;
var gameHeight = targetHeight;
*/
var gameRatio = window.innerWidth/window.innerHeight;
var gameWidth = 640 * gameRatio;
var gameHeight = 640;
