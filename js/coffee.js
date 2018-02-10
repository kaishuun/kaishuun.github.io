
function mainP ()
{
      textclicked = true;
      document.getElementById('text1').innerHTML = "How do I make coffee again??(click an object)";
}

function beansOpt ()
{
      if (abeans === true && textclicked === true)
      {
            document.getElementById('testp1').innerHTML="10 beans";
            document.getElementById('testp2').innerHTML="57 beans";
            document.getElementById('testp3').innerHTML="124 beans";
            choices = "beans"
      }
}
function  kettleopts()
{
      if (akettle === true && textclicked === true)
      {
            document.getElementById('testp1').innerHTML="10 beans";
            document.getElementById('testp2').innerHTML="57 beans";
            document.getElementById('testp3').innerHTML="124 beans";
            choices = "kettle"
      }
}
function grinderopts ()
{
      if (agrinder === true && textclicked === true)
      {
            document.getElementById('testp1').innerHTML="10 beans";
            document.getElementById('testp2').innerHTML="57 beans";
            document.getElementById('testp3').innerHTML="124 beans";
            choices = "grinder"
      }
}
function funnel()
{
      if (textclicked === true)
      {

      }
}
function superbeans()
{
      document.getElementById("beans").style.opacity = "0.5";
      abeans = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function superkettle()
{
      document.getElementById("kettle").style.opacity = "0.5";
      akettle = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function supergrinder()
{
      document.getElementById("grinder").style.opacity = "0.5";
      agrinder = false;
      document.getElementById('testp1').innerHTML="";
      document.getElementById('testp2').innerHTML="";
      document.getElementById('testp3').innerHTML="";
}
function aoptions()
{
      if(choices === "beans")
      {
            superbeans()
      }
      else if (choices === "kettle")
      {
            superkettle()
      }
      else if (choices === "grinder")
      {
            supergrinder()
      }
}
function boptions()
{
      if(choices === "beans")
      {
            good += 1
            superbeans()
      }
      else if (choices === "kettle")
      {
            superkettle()
      }
      else if (choices === "grinder")
      {
            supergrinder()
      }
}
function coptions()
{
      if(choices === "beans")
      {
            superbeans()
      }
      else if (choices === "kettle")
      {
            superkettle()
      }
      else if (choices === "grinder")
      {
            supergrinder()
      }
}
