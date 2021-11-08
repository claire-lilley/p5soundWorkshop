let mySong, amplitude;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel.mp3');

}


function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent("p5container");
    mySong.play();


    amplitude = new p5.Amplitude();
}

function draw() {
    
    
    let level = amplitude.getLevel();

    let vol = map(level,0, 1, 0, 100);
    let col = map(level, 0, 1,0, 255);
    //console.log(col);

    background(col);

    noStroke();

    if (vol>=200){
        fill(col + 10);
        ellipse(width / 2, height / 2, vol + 100);
    }

    fill(col, 153, 255);
    ellipse(width/2,height/2,vol);

    
    fill(255,col,255);
    ellipse(width/2,height/2,vol);
    
}