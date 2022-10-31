function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,450);
    canvas.position(600,100);
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
    }
}