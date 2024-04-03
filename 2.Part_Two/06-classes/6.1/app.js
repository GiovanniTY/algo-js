(() => {
class Circle {
 constructor(xPos,yPos,radius) {
   this.xPos = xPos;
   this.yPos = yPos; 
   this.radius = radius;
 }
move(xOffset, yOffset) {
this.xPos += xOffset;
this.yPos += yOffset;
}
get surface() {
let zone = Math.PI * Math.pow(this.radius,2);
return zone;
}
}
//Test
const myCircle = new Circle(0,0,9);//créer un cercle
console.log("Surface du cercle:", myCircle.surface)//Print surface du cerlce
myCircle.move(20,5);//déplacer les coordonnées du cercle
console.log("Nouvelle Position du cercle:", myCircle.xPos, myCircle.yPos);//Print
})();
