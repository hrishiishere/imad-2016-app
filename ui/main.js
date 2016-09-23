console.log('Loaded!');
console.log('by hrishi!');
var img= document.getElementById('image');
var marginleft='0';
function moveRight()
{
    marginLeft = marginLeft + 1 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setinterval(moveRight, 50);
};