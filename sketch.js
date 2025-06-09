let plantado = false;

let crescido = 10;

let maxCrescimento = 100;

let colhido = false;

function setup() {
  createCanvas(400, 400);

  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  fill(0);

  textSize(16);

  text("Clique para plantar a semente", width / 5, 20);

  if (plantado && !colhido) {
    if (crescido < maxCrescimento) {
      crescido += 0.5;
    }

    stroke(0);

    fill(34, 139, 34);

    rect(width / 2 - 5, height - crescido - 50, 10, crescido);

    ellipse(width / 2, height - crescido - 50, 30, 30);
  }

  if (colhido) {
    fill(0);

    textSize(20);

    text("Planta colhida!", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!plantado) {
    plantado = true;

    crescido = 0;

    colhido = false;
  } else if (plantado && !colhido && crescido >= maxCrescimento) {
    colhido = true;
  }
}
