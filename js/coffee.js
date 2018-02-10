function mainP () {
      if (!textclicked)
      {
            textclicked = true;
            document.getElementById('text1').innerHTML = "Click objects to make Coffee";
      }

}

function beansOpt () {
      if (abeans === true && textclicked === true) {
            document.getElementById('testp1').innerHTML="10 beans";
            document.getElementById('testp2').innerHTML="57 beans";
            document.getElementById('testp3').innerHTML="124 beans";
            choices = "beans";
      }
}
function  kettleopts() {
      if (akettle === true && textclicked === true) {
            document.getElementById('testp1').innerHTML="0C";
            document.getElementById('testp2').innerHTML="112C";
            document.getElementById('testp3').innerHTML="90C";
            choices = "kettle";
      }
}
function grinderopts () {
      if (agrinder === true && textclicked === true) {
            document.getElementById('testp1').innerHTML="fine";
            document.getElementById('testp2').innerHTML="coarse";
            document.getElementById('testp3').innerHTML="medium";
            choices = "grinder";
      }
}
function funnelopts()
{
      if (textclicked && afunnel) {
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
      } else {
            document.getElementById('lose').style.display = "inline-block";
      }
      superfunnel()
      afunnel = false;
      agrinder = false;
      abeans = false;
      akettle = false;
      document.getElementById('text1').innerHTML = "Finished!";
      document.getElementById("funnel").style.opacity = "0.5";
}
function superbeans () {
      document.getElementById("beans").style.opacity = "0.5";
      abeans = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function superkettle () {
      document.getElementById("kettle").style.opacity = "0.5";
      akettle = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function supergrinder () {
      document.getElementById("grinder").style.opacity = "0.5";
      agrinder = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function superfunnel () {
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

function coptions()
{
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
