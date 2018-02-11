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

function choice1()
{
  document.getElementById("text1").innerHTML = "You: I need to call 911!"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""

}
function choice2()
{
  document.getElementById("text1").innerHTML = "(Takes her doughnut and walks away)"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""

}
