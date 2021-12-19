function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WrGIV7u5m/',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if (error)
    {
        console.errop(error);
    }
    else {console.log(results);
    
        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        img=document.getElementById('cat');
        img1=document.getElementById('dog');
        img2=document.getElementById('horse');
        img3=document.getElementById('cow');

        if (results[0].label == "cat")
        {
          img.src="cat (gif).gif";
          img1.src="dog (still).png";
          img2.src="horse (still).jpg";
          img3.src="cow (still).png";
        }
else if (results[0].label == "dog")
{
  img.src="cat (still).gif";
  img1.src="dog (gif).gif";
  img2.src="horse (still).jpg";
  img3.src="cow (still).png";
}
else if (results[0].label == "horse")
{
  img.src="cat (still).gif";
  img1.src="dog (still).gif";
  img2.src="horse (gif).gif";
  img3.src="cow (still).png";
}
else {
    img.src="cat (still).gif";
    img1.src="dog (still).gif";
    img2.src="horse (still).jpg";
    img3.src="cow (gif).gif";
  }
    }
}