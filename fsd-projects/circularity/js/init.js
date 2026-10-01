var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circles = [] //variables that going hold all the circles created


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //Draws a random circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); // applies ramdom velocity to the circle
            view.addChild(circle); //add the circle to the view
            circles.push(circle); //stores the circle in the circles array
            body {
                background: url("YourImageFileNameGoesHere") no-repeat center center fixed;
                background-color: #cccccc;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
        } 
        // TODO 3 : Call the drawCircle() function
        /*
        drawCircle() // creates circle
        drawCircle() // creates circle
        drawCircle() // creates circle
        drawCircle() // creates circle
        drawCircle() // creates circle
        */

        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 50; i++){
            drawCircle() 
        } // creates 50 circles with less repetive code



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            /*
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            physikz.updatePosition(circles[0]); // update posiotion of 1st circle
            physikz.updatePosition(circles[1]); // update posiotion of 2nd circle
            physikz.updatePosition(circles[2]); // update posiotion of 3rd circle
            physikz.updatePosition(circles[3]); // update posiotion of 4th circle
            physikz.updatePosition(circles[4]); // update posiotion of 5th circle
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            game.checkCirclePosition(circles[0]); //Makes circle 1 reappear on side
            game.checkCirclePosition(circles[1]); //Makes circle 2nd reappear on side
            game.checkCirclePosition(circles[2]); //Makes circle 3rd reappear on side
            game.checkCirclePosition(circles[3]); //Makes circle 4th reappear on side
            game.checkCirclePosition(circles[4]); // Makes circle 5th reappear on side
            */
            // TODO 8 / TODO 9 : Iterate over the array
           
            for(var i = 0; i < circles.length; i++){
            physikz.updatePosition(circles[i]);//update the position of the circle
            game.checkCirclePosition(circles[i]); //check position of circles

            }

            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            var rightEdge = circle.x + circle.radius; // stores code adding the radius to circle.x so side at right edge of circle
            var leftEdge = circle.x - circle.radius;
             // stores code adding the radius to circle.x so side at left edge of circle
            var bottomEdge = circle.y + circle.radius; // stores code adding the radius to circle.y so side at bottom edge of circle
            var topEdge = circle.y - circle.radius; // stores code adding the radius to circle.y so side at top edge of circle
            if ( leftEdge > canvas.width )  {
                circle.x = 0 - circle.radius; 
            } // makes circle reappear on leftside when going right
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(rightEdge < 0){
                circle.x = canvas.width + circle.radius;  //makes it so circles reset on rightside when going left
            }
            
            if(bottomEdge < 0){
                circle.y = canvas.height + circle.radius; //When circle goes to top it resets to the bottom 
            } 

            if(topEdge > canvas.height + circle.radius){
                circle.y = 0; //When circle goes to bottom it resets to the top 

            } 
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
