/* COPY ONLY document.getElementById('').innerHTML=""; */

function initialfunc () {
      document.getElementById('').innerHTML="";
}
function textchange2()
{
      if(textclicked === 0)
      {
            document.getElementById("text1").innerHTML = "You: I sure do love that Tim Horton’s coffee!";
      }
      else if(textclicked === 1)
      {
            document.getElementById("text1").innerHTML = "You: It’s delicious, cheap and always fresh!";
      }
      else if(textclicked === 2)
      {
            document.getElementById("text1").innerHTML = "You: Let’s see, what should I get…";
      }
      else if(textclicked === 3)
      {
            document.getElementById("text1").innerHTML = "You: Maybe a doughnut?";
      }
      else if(textclicked === 4)
      {
            document.getElementById('girl').style.display = "inline-block";
            document.getElementById("text1").innerHTML = "You: hello.";
      }
      else if(textclicked === 5)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Why hello there.";
      }
      else if(textclicked === 6)
      {
            document.getElementById("text1").innerHTML = "You: I like your Superb sweater. How much was it?";
      }
      else if(textclicked === 7)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Oh, only $1000.";
      }
      else if(textclicked === 8)
      {
            document.getElementById("text1").innerHTML = "You: Wow, How much was that donut?";
      }
      else if(textclicked === 9)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Ah, only $5.";
      }
      else if(textclicked === 10)
      {
            document.getElementById("text1").innerHTML = "You: NO WAY! I gotta get that donut.";
      }
      else if(textclicked === 11)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Rude...";
      }
      else if(textclicked === 12)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Don’t you care about my sweater?";
      }
      else if(textclicked === 13)
      {
            document.getElementById("text1").innerHTML = "You: Excuse me, I’d like to make an order";
      }
      else if(textclicked === 14)
      {
            document.getElementById("text1").innerHTML = "DonutGirl: Whatever, I got to get going";
      }
      else if(textclicked === 15)
      {
        document.getElementById('girl').style.display = "none";
        document.getElementById('hurt').style.display = "inline-block";
        document.getElementById("text1").innerHTML = "You: Oh no!";
      }
      else if(textclicked === 16)
      {
        document.getElementById('hurt').style.display = "none";
        document.getElementById('maybe').style.display = "inline-block";
        document.getElementById("text1").innerHTML = "DonutGirl: ...";
      }
      else if(textclicked === 17)
      {
        document.getElementById("text1").innerHTML = "Would you like to help?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No.";

      }
      textclicked += 1
}

function choice1_1()
{
  document.getElementById("text1").innerHTML = "You: I need to call 911!"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""

}
function choice1_2()
{
  document.getElementById("text1").innerHTML = "(Takes her doughnut and walks away)"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""

}
function textchange5()
{

if(textclicked === 0)
      {
            document.getElementById("text1").innerHTML = "You: Twintails!"
      }
      else if(textclicked === 1)
      {
            document.getElementById('BackImg1GC').style.display = "inline-block";
            document.getElementById('BackImg2GC').style.display = "none";
            document.getElementById("text1").innerHTML = "You: How are you? Are you alive?"
      }
      else if(textclicked === 2)
      {
            document.getElementById("text1").innerHTML = "You: Oh bless, you’re okay!"
      }
      else if(textclicked === 3)
      {
            document.getElementById("text1").innerHTML = "You: I’m so happy!"
      }
      else if(textclicked === 4)
      {
            document.getElementById("text1").innerHTML = "Twintails: Okay…?"
      }
      else if(textclicked === 5)
      {
            document.getElementById("text1").innerHTML = "You: So, when can you get out?"
      }
      else if(textclicked === 6)
      {
            document.getElementById("text1").innerHTML = "Twintails: I’m on life support… I can’t move…"
      }
      else if(textclicked === 7)
      {
            document.getElementById("text1").innerHTML = "You: Oh no!"
      }
      else if(textclicked === 8)
      {
            document.getElementById("text1").innerHTML = "Twintails: It’s okay...But before I die…"
      }
      else if(textclicked === 9)
      {
            document.getElementById("text1").innerHTML = "Twintails: I just want to tell you… I love you.."
      }
      else if(textclicked === 10)
      {
            document.getElementById("text1").innerHTML = "You: Twintails!"
      }
      else if(textclicked === 11)
      {
            document.getElementById("text1").innerHTML = "Twintails: I’ve loved you since…  I met you…"
      }
      else if(textclicked === 12)
      {
            document.getElementById("text1").innerHTML = "You: Oh my…"
      }
      else if(textclicked === 13)
      {
            document.getElementById("text1").innerHTML = "Accept Her love?";
            document.getElementById("choice5_1").innerHTML = "Yes";
            document.getElementById("choice5_2").innerHTML = "Deny her passion";
      }
    textclicked += 1
}
function choice5_1()
{
  if(textclickedchoice1 === 1){
    document.getElementById("text1").innerHTML = "";
    document.getElementById("choice5_2").innerHTML = "";
    document.getElementById("choice5_1").innerHTML = "You: I love…"
  }
  else if(textclickedchoice1 === 2){
    document.getElementById("choice5_1").innerHTML = "You: I love you too"
  }
  else if(textclickedchoice1 === 3){
    document.getElementById("choice5_1").innerHTML = "You: Ever since I met your beautiful twin tails…"
  }
  else if(textclickedchoice1 === 4){
    document.getElementById("choice5_1").innerHTML = "You: And your beautiful eyes…"
  }
  else if(textclickedchoice1 === 5){
    document.getElementById("choice5_1").innerHTML = "You: You’ve always been on my mind. I love you."
  }
  else if(textclickedchoice1 === 6){
    document.getElementById("choice5_1").innerHTML = "Twintails: Oh!"
  }
  else if(textclickedchoice1 === 7){
    document.getElementById("choice5_1").innerHTML = "You: Oh no! What’s wrong?!?"
  }
  else if(textclickedchoice1 === 8){
    document.getElementById("choice5_1").innerHTML = "Twintails: HAGK! kAH! UGHUUGH!"
  }
  else if(textclickedchoice1 === 9){
    document.getElementById("choice5_1").innerHTML = "You: No! It’s a heart attack! Nurse! Nuuuuurse!!!!"
  }
  else if(textclickedchoice1 === 10){
    //Make it fade out and go to end screen andy.
  }
  textclickedchoice1 += 1
}
function choice5_2()
{
  if(textclickedchoice2 === 1){
    document.getElementById("choice5_1").innerHTML = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("choice5_2").innerHTML = "You: Nah I barely even know you."
  }
  else if(textclickedchoice2 === 2){
    document.getElementById("choice5_2").innerHTML = "You: Later."
  }
  else if(textclickedchoice2 === 3){
    //Go to index 7
  }

  textclickedchoice2 += 1
}
