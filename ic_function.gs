// GS Mode Running:::
// GameScript v1.5 Pro
<gs-1.5p>
Game function;
# Game; Idel Clicker
___
minisubtitle.print-text{Welcome to the idel clicker game! First click on the button to start clicking, and click on the "AUTO CLICK" button to start auto clicking, and to stop it, click on "STOP" which is in the "AUTO CLICK" button.}
___
<button>Button; Function: Click, repeat[embed:<button-function></button-function>, Shape[Circle Modern] </button>
 <button-function>embed[<button></button]; Click function:
Click: do function, change[embed:<button-click></button-click>]
</button-function>
  <button-click>Click button: add [embed:<button-changer></button-changer>]</button-click>
   <button-changer>add function:Button Change, add appear-box[You did one click! Now click on the autoclicking button.]</button-changer>
___
<autoclick-button>Button, function: autoClick, repeat[embed:<autoclick-button-function></autoclick-button-function>], Shape[Circle Modern]</autoclick-button>
 <autoclick-button-function>embed[<autoclick-button></autoclick-button>]; autoClick function:
Click: do function, change[embed:<autoclick-button-click></autoclick-button-click>]
</autoclick-button-function>
 <autoclick-button-click>autoClick button: add [embed:<autoclick-button-changer>]</autoclick-button-changer>
  <autoclick-button-changer>add function:Button Change, add appear-box[You clicked the autoclicking button! Now click stop to stop the autoclicking.]</autoclick-button-changer>
_
<stopautoclick-button>embed[GameScript Reader--Section 2]; Function::: stop function of [embed:GameScript Reader--Section 2].. stop function of(everything) </stopautoclick-button>
___
# Style
Wallpaper: Polka Dots, color"Red #FC0303"
___
</gs-1.5p>
