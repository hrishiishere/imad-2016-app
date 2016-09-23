console.log('Loaded!');
console.log('by hrishi!');
var img= document.getElementById('image');
var marginleft='0';
function moveright()
{
    marginleft = marginleft + 1 ;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function()
{
    var interval = setinterval(moveright, 50);
};