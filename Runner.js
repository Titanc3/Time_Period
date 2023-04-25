// REQUIRED: 3 html texts with ids 'timeTill', 'schedule', and 'title'
const fullList = []; // norm variables
const symbols =  "∆ ∇ ∎ ≡ ≣ ⊏ ⊐ ⊑ ⊒ ⊕ ⊖ ⊗ ⊘ ⊙ ⊚ ⊛ ⊜ ⊝ ⊞ ⊟ ⊠ ⊡ ⊿ ⋄ ⋐ ⋑ ⋒ ⋓ ⍁ ⍂ ⎔ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▬ ▭ ▮ ▯ ▰ ▱ ▲ △ ▴ ▵ ▶ ▷ ▸ ▹ ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ◧ ◨ ◩ ◪ ◫ ◬ ◭ ◮ ◯ ◰ ◱ ◲ ◳ ◴ ◵ ◶".split(" ");

function short(array, hours, minutes, one, two, three, four) {
  return ((array[one][two]*60)+array[three][four])-((hours*60)+minutes);
}
  
function timedUpdate() {
  let d = new Date();
  let min = d.getMinutes();
  let hr = d.getHours();
  let till = 0;
  for (item of fullList) {
    if ((item[1][0]*60)+item[1][1] > (hr*60)+min) {
      till = item;
      break;
    }
  }
  if (till == 0) { 
    document.getElementById("timeTill").innerHTML = "End of "+getParameterByName("title"); 
  }
  else if (short(till, hr, min, 0, 0, 0, 1) == Math.abs(short(till, hr, min, 0, 0, 0, 1))) {
    document.getElementById("timeTill").innerHTML = `${Math.floor(short(till, hr, min, 0, 0, 0, 1)/60)} Hours ${Math.round(((short(till, hr, min, 0, 0, 0, 1)/60)-Math.floor(short(till, hr, min, 0, 0, 0, 1)/60))*60)} Minutes<br>Till ${till[2]}`;
  }
  else if (short(till, hr, min, 1, 0, 1, 1) == Math.abs(short(till, hr, min, 1, 0, 1, 1))) {
    document.getElementById("timeTill").innerHTML = `${Math.floor(short(till, hr, min, 1, 0, 1, 1)/60)} Hours ${Math.round(((short(till, hr, min, 1, 0, 1, 1)/60)-Math.floor(short(till, hr, min, 1, 0, 1, 1)/60))*60)} Minutes<br>Till the end of ${till[2]}`;
  }
  document.getElementById("schedule").innerHTML = ""
  if (document.querySelector('.time:checked') != null) {
    for (const miniList of fullList) { // displaying info loop
      let a = miniList[0][1];
      let b = miniList[1][1];
      if (a.toString().length == 1) { a="0"+a.toString() }
      if (b.toString().length == 1) { b="0"+b.toString() }
      if (miniList[0][0] > 12) { newHour = `${miniList[0][0]-12} PM`.split(" ") }
      else { newHour = `${miniList[0][0]} AM`.split(" ") }
      if (miniList[1][0] > 12) { newHour2 = `${miniList[1][0]-12} PM`.split(" ") }
      else { newHour2 = `${miniList[1][0]} AM`.split(" ") }
      document.getElementById("schedule").innerHTML += `<br>   ${miniList[2]}<br>${newHour[0]}:${a} ${newHour[1]} - ${newHour2[0]}:${b} ${newHour2[1]}<br>`;
    }
  }
  else {
    for (const miniList of fullList) { // displaying info loop
    let a = miniList[0][1];
    let b = miniList[1][1];
    if (a.toString().length == 1) { a="0"+a.toString() }
    if (b.toString().length == 1) { b="0"+b.toString() }
    document.getElementById("schedule").innerHTML += `<br>   ${miniList[2]}<br>${miniList[0][0]}:${a} - ${miniList[1][0]}:${b}<br>`;
    }
  }
}
  
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function decrypt(index, index2) { return symbols.indexOf(timesInMinutes[index][index2]); }

if (getParameterByName("m") != null && getParameterByName("names") != null && getParameterByName("title") != null) {
  timesInMinutes = getParameterByName("m").split("|"); // query variables
  names = getParameterByName("names").split("|");
  
  for (let i = 0; i < timesInMinutes.length; i+=2) {
    fullList.push([[decrypt(i, 0), decrypt(i, 1)], [decrypt(i+1, 0), decrypt(i+1, 1)], names[i/2]]); //xtra rip reading code, format: [[hr, min](start), [hr, min](stop), name]
  }
  
  for (const miniList of fullList) { // displaying info loop
    let a = miniList[0][1];
    let b = miniList[1][1];
    if (a.toString().length == 1) { a="0"+a.toString() }
    if (b.toString().length == 1) { b="0"+b.toString() }
    document.getElementById("schedule").innerHTML += `<br>   ${miniList[2]}<br>${miniList[0][0]}:${a} - ${miniList[1][0]}:${b}<br>`;
  }  // url example:   titanc3.github.io/period?m=∆≣|⊏⊐|⊙⊚|⊛⊞|⊟⊠|⊟⊛&names=poop|zoop|sloop&title=scholo
  
  console.log("Hey! No snooping!");
  document.getElementById("title").innerHTML = getParameterByName("title")+" Schedule";
  setInterval(timedUpdate, 3000);
}
