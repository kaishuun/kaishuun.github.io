function mainP () {
      if (!textclicked) {
            textclicked = true;
            document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      }
}
function beansOpt () {
      if (abeans === true && textclicked === true) {
            document.getElementById('text1').innerHTML="Insert Bean Brand";
            document.getElementById('testp1').innerHTML="10 beans";
            document.getElementById('testp2').innerHTML="57 beans";
            document.getElementById('testp3').innerHTML="124 beans";
            choices = "beans";
      }
}
function  kettleopts() {
      if (akettle === true && textclicked === true) {
            document.getElementById('text1').innerHTML="Insert Kettle Brand";
            document.getElementById('testp1').innerHTML="0C";
            document.getElementById('testp2').innerHTML="112C";
            document.getElementById('testp3').innerHTML="90C";
            choices = "kettle";
      }
}
function grinderopts () {
      if (agrinder === true && textclicked === true) {
            document.getElementById('text1').innerHTML="Insert Grinder Brand";
            document.getElementById('testp1').innerHTML="fine";
            document.getElementById('testp2').innerHTML="coarse";
            document.getElementById('testp3').innerHTML="medium";
            choices = "grinder";
      }
}
function funnelopts(){
      if (textclicked && afunnel) {
            document.getElementById('text1').innerHTML="Insert Funnel Brand";
            document.getElementById('testp1').innerHTML="Finish making coffee?";
            document.getElementById('testp2').innerHTML="Yes";
            document.getElementById('testp3').innerHTML="No";
            choices = "funnel";
      }
}
function funnel () {
      document.getElementById('default').style.display = "none";
      if (good === 3) {
            document.getElementById('win').style.display = "inline-block";
            document.getElementById('wina').style.display = "inline-block";
      } else {
            document.getElementById('lose').style.display = "inline-block";
            document.getElementById('losea').style.display = "inline-block";
      }
      document.getElementById('text1').innerHTML ="";
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
      afunnel = false;
      agrinder = false;
      abeans = false;
      akettle = false;
      document.getElementById("funnel").style.opacity = "0";
}
function superbeans () {
      document.getElementById("beans").style.opacity = "0.5";
      $('#beans').addClass('animated fadeOut');
      abeans = false;
      document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function superkettle () {
      $('#kettle').addClass('animated rotateOut');
      akettle = false;
      document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function supergrinder () {
      $('#grinder').addClass('animated hinge');
      agrinder = false;
      document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function superfunnel () {
      document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function aoptions() {
      if( choices === "beans" ) {
            superbeans();
      } else if (choices === "kettle") {
            superkettle();
      } else if (choices === "grinder") {
            supergrinder();
      }
}
function boptions() {
      if(choices === "beans") {
            good += 1;
            superbeans()
      } else if (choices === "kettle") {
            superkettle();
      } else if (choices === "grinder") {
            supergrinder();
      }
      else if (choices = "funnel")
      {
            funnel();
      }
}
function coptions(){
      if(choices === "beans") {
            superbeans();
      } else if (choices === "kettle") {
            superkettle();
            good += 1;
      } else if (choices === "grinder") {
            supergrinder();
            good += 1;
      }
      else if (choices = "funnel")
      {
            superfunnel();
      }
}
