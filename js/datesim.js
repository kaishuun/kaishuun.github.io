/* COPY ONLY document.getElementById('').innerHTML=""; */

function initialfunc () {
      document.getElementById('').innerHTML="";
}
function textchange01()
{
      if(textclicked === 0)
      {
            document.getElementById("text1").innerHTML = "You: I can’t wait to go to school."
      }
      else if(textclicked === 1)
      {
            document.getElementById('background').style.display = "none";
            document.getElementById('girl').style.display = "inline-block";
            document.getElementById("text1").innerHTML = "You: Oh look it’s twintails!, my childhood friend"
      }
      else if(textclicked === 2)
      {
            document.getElementById("text1").innerHTML = "You: I used to walk to school with her, before she started running."
      }
      else if(textclicked === 3)
      {
            document.getElementById("text1").innerHTML = "You: She sure is running fast!"
      }
      else if(textclicked === 4)
      {
            document.getElementById('girl').style.display = "none";
            document.getElementById('pole').style.display = "inline-block";
      }
      else if(textclicked === 5)
      {
            document.getElementById('pole').style.display = "none";
            document.getElementById('hold').style.display = "inline-block";
            document.getElementById("text1").innerHTML = "You: Twintails!! Are you okay?!?"
      }
      else if(textclicked === 6)
      {
            document.getElementById("text1").innerHTML = "Twintails: That pole came out of nowhere"

      }
      else if(textclicked === 7)
      {
            document.getElementById("text1").innerHTML = "Would you help her?"
            document.getElementById("choice1").innerHTML = "Yes"
            document.getElementById("choice2").innerHTML = "No"
      }
      textclicked += 1
}
function choice1()
{
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById("text1").innerHTML = "You: I need to call 911! "
}
function choice2()
{
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById('hold').style.display = "none";
      document.getElementById('toss').style.display = "inline-block";
      document.getElementById("text1").innerHTML = "This isn’t worth my time…"
}

function textchange01()
{
      if(textclicked === 0)
      {
            document.getElementById("text1").innerHTML = "You: I can’t wait to go to school."
      }
      else if(textclicked === 1)
      {
            document.getElementById('background').style.display = "none";
            document.getElementById('girl').style.display = "inline-block";
            document.getElementById("text1").innerHTML = "You: Oh look it’s twintails!, my childhood friend"
      }
      else if(textclicked === 2)
      {
            document.getElementById("text1").innerHTML = "You: I used to walk to school with her, before she started running."
      }
      else if(textclicked === 3)
      {
            document.getElementById("text1").innerHTML = "You: She sure is running fast!"
      }
      else if(textclicked === 4)
      {
            document.getElementById('girl').style.display = "none";
            document.getElementById('pole').style.display = "inline-block";
      }
      else if(textclicked === 5)
      {
            document.getElementById('pole').style.display = "none";
            document.getElementById('hold').style.display = "inline-block";
            document.getElementById("text1").innerHTML = "You: Twintails!! Are you okay?!?"
      }
      else if(textclicked === 6)
      {
            document.getElementById("text1").innerHTML = "Twintails: That pole came out of nowhere"

      }
      else if(textclicked === 7)
      {
            document.getElementById("text1").innerHTML = "Would you help her?"
            document.getElementById("choice1").innerHTML = "Yes"
            document.getElementById("choice2").innerHTML = "No"
      }
      textclicked += 1
}
function choice1_1()
{
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById("text1").innerHTML = "You: I need to call 911! "
}
function choice1_2()
{
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById('hold').style.display = "none";
      document.getElementById('toss').style.display = "inline-block";
      document.getElementById("text1").innerHTML = "This isn’t worth my time…"
}
function textchange03() {
      if(textclicked === 0)
      {
            document.getElementById("text4").innerHTML = "You: Ms. Nurse! How is she?!?!"
      }
      else if(textclicked === 1)
      {
            document.getElementById("text4").innerHTML = "Nurse: Ohoho. Silly child. You think I’m a MS. Nurse but…."
      }
      else if(textclicked === 2)
      {
            document.getElementById('1').style.display  = "inline-block"
            document.getElementById("text4").innerHTML = "Nurse: I was a male all along!"
      }
      else if(textclicked === 3)
      {
            document.getElementById("text4").innerHTML = "You: I don’t care!"
      }
      else if(textclicked === 4)
      {
            document.getElementById("text4").innerHTML = "You: I just need to make sure the girl is okay!"
      }
      else if(textclicked === 5)
      {
            document.getElementById("text4").innerHTML = "Nurse: Ahh okay, the room is just over ther- "
      }
      else if(textclicked === 6)
      {
            document.getElementById('1').style.display  = "none"
            document.getElementById('2').style.display  = "inline-block"
            document.getElementById("text4").innerHTML = "You: NOOO! Not the pole!!"
      }
      else if(textclicked === 7)
      {
            document.getElementById("text4").innerHTML = "You: You…"
      }
      else if(textclicked === 8)
      {
            document.getElementById('2').style.display  = "none"
            document.getElementById('0').style.display  = "none"
            document.getElementById('3').style.display  = "inline-block"
            document.getElementById("text4").innerHTML = "You: pole, you’ve taken another loved one yet again…"
      }
      else if(textclicked === 9)
      {
            document.getElementById("text4").innerHTML = "Nurse: It.. it’s okay…"
      }
      else if(textclicked === 10)
      {
            document.getElementById("text4").innerHTML = "Nurse: You must go to the one you hold dear to you…"
      }
      else if(textclicked === 11)
      {
            document.getElementById("text4").innerHTML = "Nurse: The room is over… there…."
      }
      else if(textclicked === 12)
      {
            document.getElementById("text4").innerHTML = "Nurse: ughk."
      }
      else if(textclicked === 13)
      {
            document.getElementById("text4").innerHTML = "You: NOOOOOOOO. "
      }
      else if(textclicked === 14)
      {
            document.getElementById("text4").innerHTML = "You: I JUST MET YOU!!!"
      }
      else if(textclicked === 15)
      {
            gotoindex6()
      }
      textclicked += 1
}
function gotoindex6()
{
      //Write this to transition to index 6.
}

function textchange04()
{



}
