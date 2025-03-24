function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6N6Sbt0zLpD":
        Script1();
        break;
      case "69u86lhOBw4":
        Script2();
        break;
      case "6icwaFg6euV":
        Script3();
        break;
      case "5rk0S9P0kh7":
        Script4();
        break;
      case "6NwcCd0oTgU":
        Script5();
        break;
      case "6ewPVTXoTMB":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5kIEfil1oKZ');
const duration = 750;
const easing = 'ease-out';
const id = '62u7lH2hl43';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6pFR5YePtDw');
const duration = 750;
const easing = 'ease-out';
const id = '5lMpsbgooir';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6icRRZaNzyH');
const duration = 750;
const easing = 'ease-out';
const id = '5X4mByYsAHg';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6eUR5TOh3cJ');
const duration = 750;
const easing = 'ease-out';
const id = '5ypjm5aQtNf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('69CNdbdGXQP');
const duration = 750;
const easing = 'ease-out';
const id = '5xiE68JPfAa';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5xlX2HaV8ox');
const duration = 750;
const easing = 'ease-out';
const id = '6XjouEDRpEG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
