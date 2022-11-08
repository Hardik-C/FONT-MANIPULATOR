var difference= 0;
var rightWristX = 0;
var leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,450);
    canvas.position(660,100);
    canvas.background('grey');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX +"rightWristX =" + rightWristX +" difference =" + difference);
    }
    
}
function draw()
{
    textSize(difference);
    fill(57, 255, 20);
    text("Hardik",210,230);
}