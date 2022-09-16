var countText = document.querySelector("#countText");
var count = 0;
function buttonClicker(){
    count++;
    // console.log(countText);
    countText.innerText = count;
}