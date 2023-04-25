function submit() {
  let webpage = "" // insert the webpage that uses the runner
  let symbols = "∆ ∇ ∎ ≡ ≣ ⊏ ⊐ ⊑ ⊒ ⊕ ⊖ ⊗ ⊘ ⊙ ⊚ ⊛ ⊜ ⊝ ⊞ ⊟ ⊠ ⊡ ⊿ ⋄ ⋐ ⋑ ⋒ ⋓ ⍁ ⍂ ⎔ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▬ ▭ ▮ ▯ ▰ ▱ ▲ △ ▴ ▵ ▶ ▷ ▸ ▹ ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ◧ ◨ ◩ ◪ ◫ ◬ ◭ ◮ ◯ ◰ ◱ ◲ ◳ ◴ ◵ ◶".split(" ");
  let names = document.getElementById("names").value.split(" ");
  let startTime = document.getElementById("startTime").value.split(" ");
  let endTime = document.getElementById("endTime").value.split(" ");
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
