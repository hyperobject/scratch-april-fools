// ==UserScript==
// @name           April Fool's Day
// @version        1.0
// @namespace      
// @description    Re-implements the censors that the ST added for April Fool's Day in past years
// @include        http://scratch.mit.edu/forums/*
// ==/UserScript==

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
censors["and "] = "(Bloop!!) ";
censors["the "] = "(Pico rules!!) ";
censors["th3 "] = "(Pico rules - don't get smart!!) ";
censors["4nd "] = "(Bloop - very tricky!!) ";
censors["th[b][/b]e "] = "(Pico still rules!!) ";
censors["(Pico rules!!)ad"] = 'thead';
var target = document.getElementById("punwrap");
var myText = target.innerHTML;
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
