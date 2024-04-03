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
const myCircle = new Circle(0,0,9);
console.log("Surface du cercle:", myCircle.surface)
})();
