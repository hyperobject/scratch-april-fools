// ==UserScript==
// @name           April Fool's Day
// @version        1.1
// @namespace      
// @description    Re-implements some of the April Fool's Day pranks that the ST added for April Fool's Day in past years
// @include        http://scratch.mit.edu/*
// ==/UserScript==

//Censors
//>>>>>>> Adds the Neigh Logo
var censors = {};
censors["pi "] = '3.14159265... ';
censors["you "] = "pikachu ";
censors["your "] = "pikachu's ";
censors["Scratch Forums"] = "Scratch Forums - Still only $0.99 (USD) a post!";
censors["the Scratch Team"] = "a bunch of fluffy kittehs";
censors["Scratch Team"] = "a bunch of fluffy kittehs";
censors["Scratcher"] = "Pony";
censors["Community Moderator"] = "Pasture Monitor";
censors["everybody"] = "everypony";
censors["anybody"] = "anypony";
censors["somebody"] = "somepony";
censors["nobody"] = "nopony";
censors["facepalm"] = "facehoof";
censors["yes"] = "eeyup";
censors["computer"] = "toaster";
censors["only"] = "ponly";
censors["Scratch"] = "Neigh";
censors["Ponys"] = "Ponies";
//<<<<<<< HEAD
var target = document.getElementById("punwrap");
var myText = target.innerHTML;
//=======
var target = document.body;
var myText = target.innerHTML;
//Replaces the Scratch Logo with the Neigh Logo.
myText = myText.replace('<a href="/">Scratch</a>', "<img src='http://i.imgur.com/Apomb.png' />");
myText = myText.replace('<a href="/"></a>', "<img src='http://i.imgur.com/Apomb.png' />");
//>>>>>>> Adds the Neigh Logo
for (censor in censors) {
  myText = myText.replace(makeregex(censor, "g"), censors[censor]);
}
target.innerHTML = myText;

function makeregex(str, modifiers) {
  str = str.replace(/\[/gi, '\\\[');
  str = str.replace(/\]/gi, '\\\]');
  str = str.replace(/\^/gi, '\\\^');
  str = str.replace(/\$/gi, '\\\$');
  str = str.replace(/\./gi, '\\\.');
  str = str.replace(/\|/gi, '\\\|');
  str = str.replace(/\?/gi, '\\\?');
  str = str.replace(/\*/gi, '\\\*');
  str = str.replace(/\+/gi, '\\\+');
  str = str.replace(/\(/gi, '\\\(');
  str = str.replace(/\)/gi, '\\\)');
  str = str.replace(/\{/gi, '\\\{');
  str = str.replace(/\}/gi, '\\\}');
  return new RegExp(str, modifiers);
}
