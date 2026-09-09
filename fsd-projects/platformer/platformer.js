$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 700, 10, 30, "blue");
    createPlatform(375, 500, 10, 300, "blue");
    createPlatform(400, 500, 50, 50, "orange");
    createPlatform(200, 570, 50, 50, "orange");
    createPlatform(300, 450, 40, 50, "blue");
    createPlatform(550, 400, 60, 50, "orange");
    createPlatform(650, 350, 20, 300, "pink");
    createPlatform(650, 350, 100, 20, "pink");
    createPlatform(650, 640, 500, 20, "pink");
    createPlatform(1100, 530, 60, 20, "green");
    createPlatform(1150, 290, 60, 20, "green");
    createPlatform(1300, 350, 60, 20, "green");
    createPlatform(1200, 430, 60, 20, "green");
    createPlatform(1080, 200, 60, 20, "green");
    createPlatform(1200, 430, 60, 20, "green");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1100, 50, 0.5, 0.7);
    createCollectable("diamond", 700, 400);
    createCollectable("database", 570, 200, 0, 0.7);
    createCollectable("max", 800, 700);
    createCollectable("kennedi", 100, 400);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 1700);
    createCannon("right", 200, 2500);
    createCannon("bottom", 340, 1800);
    createCannon("right", 650, 1600);
    createCannon("top", 600, 2000);
    createCannon("bottom", 700, 1800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
