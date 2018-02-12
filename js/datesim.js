function initialfunc () { document.getElementById('').innerHTML=""; }

function textchange2(){
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
            document.getElementById('badback').style.display = "none";
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
        document.getElementById("wina").style.display = "inline-block";
        document.getElementById("losea").style.display = "inline-block";

      }
      textclicked += 1
}
function choice1_1(){
  document.getElementById("wina").innerHTML = "inline-block"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""
  document.getElementById("text1").innerHTML = ""
}
function choice1_2(){
  document.getElementById("losea").display.style= "inline-block"
  document.getElementById("choice1").innerHTML = ""
  document.getElementById("choice2").innerHTML = ""
    document.getElementById("text1").innerHTML = ""
}

function textchange5(){
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
function choice5_1(){
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
      document.getElementById("wina").style.display = "inline-block"
  }
  textclickedchoice1 += 1
}
function choice5_2(){
  if(textclickedchoice2 === 1){
    document.getElementById("choice5_1").innerHTML = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("choice5_2").innerHTML = "You: Nah I barely even know you."
  }
  else if(textclickedchoice2 === 2){
    document.getElementById("choice5_2").style.display = "none"
    document.getElementById("losea").style.display = "inline-block"
  }
  textclickedchoice2 += 1
}

function textchange9() {
      if(textclicked === 0){
            document.getElementById("text1").innerHTML = "You: Donut!"
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
            document.getElementById("text1").innerHTML = "Donut: Okay…?"
      }
      else if(textclicked === 5)
      {
            document.getElementById("text1").innerHTML = "You: So, when can you get out?"
      }
      else if(textclicked === 6)
      {
            document.getElementById("text1").innerHTML = "Donut: I’m on life support… I can’t move…"
      }
      else if(textclicked === 7)
      {
            document.getElementById("text1").innerHTML = "You: Oh no!"
      }
      else if(textclicked === 8)
      {
            document.getElementById("text1").innerHTML = "Donut: It’s okay...But before I die…"
      }
      else if(textclicked === 9)
      {
            document.getElementById("text1").innerHTML = "Donut: I just want to tell you… I love you.."
      }
      else if(textclicked === 10)
      {
            document.getElementById("text1").innerHTML = "You: Donut!"
      }
      else if(textclicked === 11)
      {
            document.getElementById("text1").innerHTML = "Donut: I’ve loved you since…  I met you…"
      }
      else if(textclicked === 12)
      {
            document.getElementById("text1").innerHTML = "You: Oh my…"
      }
      else if(textclicked === 13)
      {
            document.getElementById("text1").innerHTML = "Accept Her love?";
            document.getElementById("choice9_1").innerHTML = "Yes";
            document.getElementById("choice9_2").innerHTML = "Deny her passion";
      }
    textclicked += 1
}
function choice5_11(){
  if(textclickedchoice1 === 1){
    document.getElementById("text1").innerHTML = "";
    document.getElementById("choice9_2").innerHTML = "";
    document.getElementById("choice9_1").innerHTML = "You: I love…"
  }
  else if(textclickedchoice1 === 2){
    document.getElementById("choice9_1").innerHTML = "You: I love you too"
  }
  else if(textclickedchoice1 === 3){
    document.getElementById("choice9_1").innerHTML = "You: Ever since I saw your Superb sweater..."
  }
  else if(textclickedchoice1 === 4){
    document.getElementById("choice9_1").innerHTML = "You: And your beautiful donut..."
  }
  else if(textclickedchoice1 === 5){
    document.getElementById("choice9_1").innerHTML = "You: You’ve always been on my mind. I love you."
  }
  else if(textclickedchoice1 === 6){
    document.getElementById("choice9_1").innerHTML = "Donut: Oh!"
  }
  else if(textclickedchoice1 === 7){
    document.getElementById("choice9_1").innerHTML = "You: Oh no! What’s wrong?!?"
  }
  else if(textclickedchoice1 === 8){
    document.getElementById("choice9_1").innerHTML = "Donut: HAGK! kAH! UGHUUGH!"
  }
  else if(textclickedchoice1 === 9){
    document.getElementById("choice9_1").innerHTML = "You: No! It’s a heart attack! Nurse! Nuuuuurse!!!!"
  }
  else if(textclickedchoice1 === 10){
    //Make it fade out and go to end screen andy.
  }
  textclickedchoice1 += 1
}
function choice9_2(){
  if(textclickedchoice2 === 1){
    document.getElementById("choice9_1").innerHTML = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("choice9_2").innerHTML = "You: Nah I barely even know you."
  }
  else if(textclickedchoice2 === 2){
    document.getElementById("choice9_2").innerHTML = "You: Later."
  }
  else if(textclickedchoice2 === 3){
    //Go to index 7
  }

  textclickedchoice2 += 1
}

function textchange01(){
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
            document.getElementById("wina").style.display = "inline-block";
            document.getElementById("losea").style.display = "inline-block";
      }
      textclicked += 1
}

function choice2(){
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById('hold').style.display = "none";
      document.getElementById('toss').style.display = "inline-block";
      document.getElementById("text1").innerHTML = "This isn’t worth my time…"
}

function textchange01(){
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
            document.getElementById("wina").style.display = "inline-block";
            document.getElementById("losea").style.display = "inline-block";
      }
      textclicked += 1
}
function choice1_1(){
      document.getElementById("choice1").innerHTML = ""
      document.getElementById("choice2").innerHTML = ""
      document.getElementById("text1").innerHTML = "You: I need to call 911! "
}
function choice1_2(){
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
            document.getElementById('0').style.display  = "none"
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
            document.getElementById("text4").style.display ="none"
            document.getElementById("wina").style.display ="inline-block"

      }
      textclicked += 1
}

function textchange07() {
      if(textclicked === 0)
      {
            document.getElementById("text4").innerHTML = "You: Wow that sure was a wild ride."
      }
      else if(textclicked === 1)
      {
            document.getElementById("text4").innerHTML = "You: Oh wait… over at that table, isn’t that…"
      }
      else if(textclicked === 2)
      {
            document.getElementById('back123').style.display  = "none"
            document.getElementById('only').style.display  = "inline-block"
            document.getElementById("text4").innerHTML = "You: You! You’re the nurse!"
      }
      else if(textclicked === 3)
      {
            document.getElementById("text4").innerHTML = "Nurse: Why hello there! It’s me, the nurse."
      }
      else if(textclicked === 4)
      {
            document.getElementById("text4").innerHTML = "You: I thought you died! The pole hit you!"
      }
      else if(textclicked === 5)
      {
            document.getElementById("text4").innerHTML = "Nurse: Ohoho of course not. I’m a nurse."
      }
      else if(textclicked === 6)
      {
            document.getElementById("text4").innerHTML = "Nurse: I’m the top class nurse in all of Ohio State."
      }
      else if(textclicked === 7)
      {
            document.getElementById("text4").innerHTML = "Nurse: I also have the ability to revive someone every 20 years."
      }
      else if(textclicked === 8)
      {
            document.getElementById("text4").innerHTML = "You: Wow! That’s great!"
      }
      else if(textclicked === 9)
      {
            document.getElementById("text4").innerHTML = "Nurse: Let’s live happy and forever now!"
      }
      else if(textclicked === 10)
      {
            document.getElementById("text4").innerHTML = "You: <3 <3 <3 <3"
      }
      else if(textclicked === 11)
      {
            document.getElementById("text4").style.display = "none"
            document.getElementById("wina").style.display = "inline-block"
      }
      textclicked += 1
}

function textchange06() {
      if(textclicked === 0)
      {
            document.getElementById("text4").innerHTML = "You: That sure was a weird day."
      }
      else if(textclicked === 1)
      {
            document.getElementById("text4").innerHTML = "You: I can’t wait to get home and just sleep"
      }
      else if(textclicked === 2)
      {
            document.getElementById('back').style.display  = "none"
            document.getElementById('only').style.display  = "inline-block"
            document.getElementById("text4").innerHTML = "You: No! Don’t do this!"
      }
      else if(textclicked === 3)
      {
            document.getElementById("text4").innerHTML = "Pole: You’ve been a naughty child."
      }
      else if(textclicked === 4)
      {
            document.getElementById("text4").innerHTML = "Pole: It’s every citizen’s duty to call 911 in emergencies."
      }
      else if(textclicked === 5)
      {
            document.getElementById("text4").innerHTML = "You: Please! Don’t do this!"
            document.getElementById("wina").style.display = "inline-block"
      }

      textclicked += 1
}
