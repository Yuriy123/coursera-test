// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function () {

var names = ["John", "Jen", "Jason", "Jim"];
// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function(window) { 
	var byeSpeaker ={};
 byeSpeaker.name =["John", "Jen", "Jason", "Jim"];

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var sayWord = "Good Bye";
window.byeSpeaker = byeSpeaker;
window.sayWord = sayWord;
})(window);


// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak = function speak(name) {
byeSpeaker.name = name;
  console.log(sayWord + " " + name);
};
})();
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
