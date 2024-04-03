(() => {
class Rectangle {

constructor(topLeftXPos, topLeftYPos,width,length){

  this.topLeftXPos = topLeftXPos;
  this.topLeftYPos = topLeftYPos;
  this.width = width;
  this.length = length;
}
collides(otherRectangle) {
if (this.topLeftXPos === otherRectangle.topLeftXPos ||this.topLeftYPos === otherRectangle.topLeftYPos ) {
    return 'impact';
} else {
    return 'not impact';
   }
  }
 }
 rec = new Rectangle(20,20,100,100);
 rec2 = new Rectangle(20,20,100,100);
 console.log(rec2.collides(rec));
})();