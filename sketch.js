  //width and height variables
  var oceanWidth = 800;
  var oceanHeight = 700;
  var whiteWashWidth = 850;
  var whiteWashHeight = 700;

  //speed variables
  var tideO = 0.5;
  var tideWW = 0.7;
  var cloudSpeed = 0.2;

  //color variables
  var skyColor, cloudColor, oceanColor, whiteWashColor, sandColor, sunColor, birdColor, starfishColor;
  var palmColorB, palmColorF, coconutColorA, coconutColorB, coconutTrunkColor, crabColorA, crabcolorB;

  //opacity variables
  var a, b;

  //moving parts x and y variables
  var birdx1 = 150;
  var birdx1Diff = 0;
  var birdy1 = 150;
  var birdy1Diff = 0;
  var birdx2 = 650;
  var birdx2Diff = 0;
  var birdy2 = 200;
  var birdy2Diff = 0;
  var coconutx = 671;
  var coconuty = 375;
  var cloudLx = 27;
  var cloudLy = 127;
  var cloudRx = 612;
  var cloudRy = 21;
  var crabx = 573;
  var craby = 473;

  function setup() {
      var c = createCanvas(750, 500);
      c.position((windowWidth - 750) / 2, 20);
      noCursor();
  }

  function drawColors() {
      a = mouseY;
      b = mouseY / 6;

      skyColor = color(56, 174, 204);
      cloudColor = color(218 - b, 240 - b / 2, 247 - b / 2);
      oceanColor = color(36 - b, 123 - b / 3, 160 - b / 3);
      whiteWashColor = color(139 - b, 240 - b / 3, 238 - b / 3);
      sandColor = color(194 - b / 2, 178 - b / 2, 128 - b / 2);
      sunColor = color(247 + a, 94 + a, 3 + a);
      birdColor = color(0);
      starfishColor = color(240 - b, 134 - b, 89 - b);
      palmColorB = color(21 - b, 153 - b, 110 - b);
      palmColorF = color(10 - b, 183 - b, 126 - b);
      coconutColorA = color(128 - b, 84 - b, 28 - b);
      coconutColorB = color(161 - b, 118 - b, 84 - b);
      coconutTrunkColor = color(94 - b, 69 - b, 48 - b);
      paperColor = color(247, 243, 218);
      crabColorA = color(232, 56, 56);
      crabColorB = color(140, 14, 79);
  }

  function drawSky() {
      background(skyColor);
      noStroke();
      from = color(225, 22, 84, a);
      to = color(243 - b / 2, 255 - b / 2, 189 - b / 2, a);
      interA = lerpColor(from, to, 1 / 7);
      interB = lerpColor(from, to, 2 / 7);
      interC = lerpColor(from, to, 3 / 7);
      interD = lerpColor(from, to, 4 / 7);
      interE = lerpColor(from, to, 5 / 7);
      interF = lerpColor(from, to, 6 / 7);
      fill(from);
      rect(0, 0, width, height / 16);
      fill(interA);
      rect(0, height / 16, width, height / 16);
      fill(interB);
      rect(0, 2 * height / 16, width, height / 16);
      fill(interC);
      rect(0, 3 * height / 16, width, height / 16);
      fill(interD);
      rect(0, 4 * height / 16, width, height / 16);
      fill(interE);
      rect(0, 5 * height / 16, width, height / 16);
      fill(interF);
      rect(0, 6 * height / 16, width, height / 16);
      fill(to);
      rect(0, 7 * height / 16, width, height / 16);
  }

  function drawClouds() {
      //cloud left
      ellipseMode(CORNER);
      fill(cloudColor);
      arc(cloudLx, cloudLy, 30, 30, PI, TWO_PI, CHORD);
      arc(cloudLx + 30, cloudLy, 30, 30, PI, TWO_PI, CHORD);
      arc(cloudLx, cloudLy + 10, 30, 30, TWO_PI, PI, CHORD);
      arc(cloudLx + 30, cloudLy + 10, 30, 30, TWO_PI, PI, CHORD);
      rect(cloudLx, cloudLy + 15, 60, 12);
      arc(cloudLx + 45, cloudLy + 8, 23, 23, PI + HALF_PI, TWO_PI + HALF_PI, CHORD);
      arc(cloudLx - 10, cloudLy + 8, 23, 23, TWO_PI + HALF_PI, PI + HALF_PI, CHORD);
      arc(cloudLx + 20, cloudLy + 2, 23, 23, PI, TWO_PI, CHORD);
      arc(cloudLx + 20, cloudLy + 15, 23, 23, TWO_PI, PI, CHORD);
      //cloud right
      ellipseMode(CORNER);
      fill(cloudColor);
      arc(cloudRx, cloudRy, 30, 30, PI, TWO_PI, CHORD);
      arc(cloudRx + 30, cloudRy, 30, 30, PI, TWO_PI, CHORD);
      arc(cloudRx, cloudRy + 10, 30, 30, TWO_PI, PI, CHORD);
      arc(cloudRx + 30, cloudRy + 10, 30, 30, TWO_PI, PI, CHORD);
      rect(cloudRx, cloudRy + 15, 60, 12);
      arc(cloudRx + 45, cloudRy + 8, 23, 23, PI + HALF_PI, TWO_PI + HALF_PI, CHORD);
      arc(cloudRx - 10, cloudRy + 8, 23, 23, TWO_PI + HALF_PI, PI + HALF_PI, CHORD);
      arc(cloudRx + 20, cloudRy + 2, 23, 23, PI, TWO_PI, CHORD);
      arc(cloudRx + 20, cloudRy + 15, 23, 23, TWO_PI, PI, CHORD);
  }

  function moveClouds() {
      //cloud left 
      if (cloudLx >= width + 30 || cloudLx <= -30) {
          cloudSpeed = cloudSpeed * -1;
      }
      cloudLx = cloudLx + cloudSpeed;

      //cloud right
      if (cloudRx >= width + 30 || cloudRx <= -30) {
          cloudSpeed = cloudSpeed * -1;
      }
      cloudRx = cloudRx - cloudSpeed;
  }

  function drawSun() {
      fill(sunColor);
      ellipseMode(CENTER);
      ellipse(mouseX, mouseY, 100, 100);
  }

  function drawSand() {
      fill(sandColor);
      rect(0, height / 2, width, height / 2);
  }

  function drawStarfish() {
      //starfish back
      stroke(starfishColor);
      strokeWeight(4);
      line(539, 407, 536, 390);
      line(539, 407, 547, 390);
      line(539, 407, 520, 408);
      line(539, 407, 557, 407);
      line(539, 407, 542, 430);

      //starfish front
      push();
      translate(200, -280);
      rotate(PI / 6);
      scale(1.2);
      strokeWeight(4);
      line(539, 407, 536, 390);
      line(539, 407, 547, 390);
      line(539, 407, 520, 408);
      line(539, 407, 557, 407);
      line(539, 407, 542, 430);
      pop();
  }

  function drawOcean() {
      //ocean
      noStroke();
      fill(whiteWashColor); //whitewash
      arc(200, height / 2, whiteWashWidth, whiteWashHeight, 0, PI, CHORD);

      if (whiteWashWidth >= 850 || oceanWidth <= 699) {
          tideWW = tideWW * -1;
      }
      whiteWashWidth = whiteWashWidth + tideWW;

      fill(oceanColor);
      arc(200, height / 2, oceanWidth, oceanHeight, 0, PI, CHORD);

      if (oceanWidth >= 800 || oceanWidth <= 699) {
          tideO = tideO * -1;
      }
      oceanWidth = oceanWidth + tideO;
  }

  function drawBirds() {
      //birds
      noFill();
      strokeWeight(1);
      stroke(birdColor);

      arc(birdx1, birdy1, 10, 10, PI, TWO_PI, OPEN); //bird 1
      arc(birdx1 + 10, birdy1, 10, 10, PI, TWO_PI, OPEN);
      birdx1 = birdx1 + random(-5, 5);
      birdx1 = constrain(birdx1, 0, width);
      birdy1 = birdy1 + random(-5, 5);
      birdy1 = constrain(birdy1, 0, height / 2);

      arc(birdx2, birdy2, 10, 10, PI, TWO_PI, OPEN); //bird 2
      arc(birdx2 + 10, birdy2, 10, 10, PI, TWO_PI, OPEN);
      birdx2 = birdx2 + random(-5, 5);
      birdx2 = constrain(birdx2, 0, width);
      birdy2 = birdy2 + random(-5, 5);
      birdy2 = constrain(birdy2, 0, height / 2);
  }

  function drawTrees() {
      //coconut tree back
      noStroke();

      ellipseMode(CORNER);
      fill(palmColorB);
      arc(620, 150, 85, 50, (3 * PI - QUARTER_PI), PI + HALF_PI, OPEN);
      arc(643, 184, 75, 50, PI + (PI / 10), TWO_PI, OPEN);
      arc(547, 184, 75, 30, (3 * PI - PI / 10), TWO_PI, OPEN);
      arc(580, 210, 60, 55, (3 * PI - PI / 3), PI + (3 * PI / 4), OPEN);
      arc(620, 205, 60, 55, (PI + QUARTER_PI), TWO_PI + QUARTER_PI, OPEN);

      fill(coconutTrunkColor);
      quad(619, 221, 645, 380, 649, 380, 626, 221);

      fill(palmColorF);
      arc(620, 195, 85, 50, PI + QUARTER_PI, TWO_PI, OPEN);
      arc(560, 200, 85, 50, (3 * PI - PI / 8), (TWO_PI - QUARTER_PI), OPEN);
      arc(590, 130, 40, 65, TWO_PI + QUARTER_PI, PI + PI / 3, OPEN);

      fill(coconutColorA);
      ellipse(623, 195, 20, 20);
      fill(coconutColorB);
      ellipse(613, 198, 18, 18);
      ellipse(608, 211, 18, 18);
      ellipse(637, 222, 18, 18);
      fill(coconutColorA);
      ellipse(625, 215, 20, 20);

      fill(coconutColorA); //rolling coconut
      ellipse(coconutx, coconuty, 20, 20);
      coconutx = coconutx + 0.4;
      coconuty = coconuty + 0.5;

      //coconut tree front
      push();
      translate(-200, 50);
      scale(1.3);

      ellipseMode(CORNER);
      fill(palmColorB);
      arc(620, 150, 85, 50, (3 * PI - QUARTER_PI), PI + HALF_PI, OPEN);
      arc(643, 184, 75, 50, PI + (PI / 10), TWO_PI, OPEN);
      arc(547, 184, 75, 30, (3 * PI - PI / 10), TWO_PI, OPEN);
      arc(580, 210, 60, 55, (3 * PI - PI / 3), PI + (3 * PI / 4), OPEN);
      arc(620, 205, 60, 55, (PI + QUARTER_PI), TWO_PI + QUARTER_PI, OPEN);

      fill(coconutTrunkColor)
      quad(619, 221, 645, 380, 649, 380, 626, 221);

      fill(palmColorF);
      arc(620, 195, 85, 50, PI + QUARTER_PI, TWO_PI, OPEN);
      arc(560, 200, 85, 50, (3 * PI - PI / 8), (TWO_PI - QUARTER_PI), OPEN);
      arc(590, 130, 40, 65, TWO_PI + QUARTER_PI, PI + PI / 3, OPEN);

      fill(coconutColorB);
      ellipse(623, 195, 20, 20);
      fill(coconutColorA);
      ellipse(613, 198, 18, 18);
      ellipse(608, 211, 18, 18);
      ellipse(637, 222, 18, 18);
      fill(coconutColorB);
      ellipse(625, 215, 20, 20);
      pop();

      //coconut tree middle
      push();
      translate(280, -280);
      rotate(PI / 6);
      scale(1.1);
      ellipseMode(CORNER);
      fill(palmColorB);
      arc(620, 150, 85, 50, (3 * PI - QUARTER_PI), PI + HALF_PI, OPEN);
      arc(643, 184, 75, 50, PI + (PI / 10), TWO_PI, OPEN);
      arc(547, 184, 75, 30, (3 * PI - PI / 10), TWO_PI, OPEN);
      arc(580, 210, 60, 55, (3 * PI - PI / 3), PI + (3 * PI / 4), OPEN);
      arc(620, 205, 60, 55, (PI + QUARTER_PI), TWO_PI + QUARTER_PI, OPEN);

      fill(coconutTrunkColor)
      quad(619, 221, 645, 380, 649, 380, 626, 221);

      fill(palmColorF);
      arc(620, 195, 85, 50, PI + QUARTER_PI, TWO_PI, OPEN);
      arc(560, 200, 85, 50, (3 * PI - PI / 8), (TWO_PI - QUARTER_PI), OPEN);
      arc(590, 130, 40, 65, TWO_PI + QUARTER_PI, PI + PI / 3, OPEN);

      fill(coconutColorB);
      ellipse(623, 195, 20, 20);
      fill(coconutColorA);
      ellipse(613, 198, 18, 18);
      ellipse(608, 211, 18, 18);
      ellipse(637, 222, 18, 18);
      fill(coconutColorB);
      ellipse(625, 215, 20, 20);
      pop();
  }

  function drawMrCrab() {
      noFill();
      stroke(crabColorB);
      strokeWeight(2);
      arc(crabx - 10, craby, 15, 15, PI, TWO_PI);
      arc(crabx - 10, craby + 6, 15, 15, PI, TWO_PI);
      arc(crabx + 15, craby, 15, 15, PI, TWO_PI);
      arc(crabx + 15, craby + 6, 15, 15, PI, TWO_PI);
      line(crabx + 7, craby + 7, crabx + 4, craby - 8);
      line(crabx + 12, craby + 7, crabx + 15, craby - 8);
      fill(crabColorA);
      ellipse(crabx, craby, 20, 15);
      arc(crabx - 3, craby - 15, 10, 10, PI + PI / 2, PI + PI / 10, PIE);
      arc(crabx + 10, craby - 15, 10, 10, TWO_PI - PI / 10, PI + HALF_PI, PIE);

      crabx = crabx + random(-4, 4);
      crabx = constrain(crabx, 537, 590);
      craby = craby + random(-4, 4);
      if (mouseY >= height / 2) {
          craby = constrain(craby, 440, 510);
      } else {
          craby = constrain(craby, 520, 530);
      }
  }

  function draw() {
      drawColors();
      drawSky();
      drawClouds();
      moveClouds();
      drawSun();
      drawSand();
      drawStarfish();
      drawOcean();
      drawBirds();
      drawTrees();
      drawMrCrab();
  }