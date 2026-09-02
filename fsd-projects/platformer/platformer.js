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
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(150, 650, 50, 50, "white");
    createPlatform(300, 550, 500, 50, "white");
    createPlatform(1300, 650, 50, 50, "white");
    createPlatform(1000, 550, 50, 50, "white");
    createPlatform(1300, 450, 50, 50, "white");
    createPlatform(950, 300, 50, 300, "white");
    createPlatform(1100, 320, 50, 0.3, "white");
    createPlatform(100, 200, 800, 50, "white");

    // TODO 3 - Create Collectables
    createCollectable("database", 430, 660, 0, 0);
    createCollectable("database", 950, 250, 0, 0);
    createCollectable("database", 100, 150, 0, 0);

    // TODO 4 - Create Cannons

    createCannon("bottom", 300, 548);

    createCannon("bottom", 500, 600);

    createCannon("bottom", 700, 750);

    createCannon("top", 425, 1096);

    createCannon("top", 625, 1200);

    createCannon("top", 825, 1500);

    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
