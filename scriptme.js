$(document).ready(function(){
$("#SpellBreak").hover(enterSpell, leaveSpell);
function enterSpell(){
  this.src="images/SpellBreak2.gif"
}
function leaveSpell(){
  this.src="images/SpellBreak1.jpg"
}
$("#menu").click(funFunction);
function funFunction(){
  $(".con").slideToggle()
}
});
