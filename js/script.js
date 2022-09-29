/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let mCount = 0;
let kCount = 0;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(innerWidth, innerHeight);

}

function draw() {
    
   

    if (mouseIsPressed === true){
        fill('red');
        ellipse(innerHeight/2, innerWidth/2, 400, 400);
    } else if (keyIsPressed === true){
        fill('green');
        ellipse(100, 200, 200, 200);
    } else if (mCount >= 3){
        background('blue');
    } else {
        clear();
    }
        
    
}

function mouseClicked(){
    mCount++;
    print(mouseIsPressed);
}

function keyIsPressed(){
   print(keyIsPressed);
}

