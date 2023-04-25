function submit() {
  // REQUIRED: button with an id of 'sumbitButton' with an onclick of 'submit()', and 3 str inputs with ids of names, startTime, and endTime (input must be separated by a space)
  let webpage = "" // insert the webpage that uses the runner
  let symbols = "∆ ∇ ∎ ≡ ≣ ⊏ ⊐ ⊑ ⊒ ⊕ ⊖ ⊗ ⊘ ⊙ ⊚ ⊛ ⊜ ⊝ ⊞ ⊟ ⊠ ⊡ ⊿ ⋄ ⋐ ⋑ ⋒ ⋓ ⍁ ⍂ ⎔ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▬ ▭ ▮ ▯ ▰ ▱ ▲ △ ▴ ▵ ▶ ▷ ▸ ▹ ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ◧ ◨ ◩ ◪ ◫ ◬ ◭ ◮ ◯ ◰ ◱ ◲ ◳ ◴ ◵ ◶".split(" ");
  let names = document.getElementById("names").value.split(" "); // the name of each time period
  let startTime = document.getElementById("startTime").value.split(" "); // the start time of each period in 24hr time/millitary time, smallest->largest
  let endTime = document.getElementById("endTime").value.split(" "); //same as start times but the end times
  let url = `${webpage}?title=${document.getElementById("title").value}&names=${names.join("|")}&m=`;

  if (startTime.length != endTime.length) {alert("Your start times and end times don't match");}
  else {
    for (let i = 0; i < startTime.length; i++) {
      let startList = startTime[i].split(":");
      let endList = endTime[i].split(":");
      if (i == 0) { url += symbols[parseInt(startList[0])] + symbols[parseInt(startList[1])] + "|" + symbols[parseInt(endList[0])] + symbols[parseInt(endList[1])]; }
      else { url += "|" + symbols[parseInt(startList[0])] + symbols[parseInt(startList[1])] + "|" + symbols[parseInt(endList[0])] + symbols[parseInt(endList[1])]; }
    }
  }
  document.getElementById("submitButton").innerHTML = url;
  alert("Your personalized URL is "+url);
  }
