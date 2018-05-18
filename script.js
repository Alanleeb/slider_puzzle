function doFirst() {
   box1 = document.getElementById('firstBox');
   box1.addEventListener("dragstart", startDrag, false);
   box1.addEventListener('dragend', endDrag, false);
   box2 = document.getElementById('box2')
   box2.addEventListener("dragenter", function(e) {e.preventDefault();},false)
   box2.addEventListener("dragover", function(e) {e.preventDefault();},false)
   box2.addEventListener("drop", dropped,false)
   bax4 = document.getElementById('box4')
}
function endDrag(e) {
  pic = e.target;
  pic.style.visibility = 'hidden';
}
function startDrag(e) {
  var box1Code = '<img class="firstBox" src="Images/image_part_001.jpg" alt="pic1">'
  e.dataTransfer.setData('text', box1Code);
}
function dropped(e) {
  e.preventDefault();
  box2.innerHTML = e.dataTransfer.getData('text')
}

window.addEventListener("load", doFirst, false);
