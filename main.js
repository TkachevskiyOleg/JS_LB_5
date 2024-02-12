
var rectangle = {
    topLeft: { x: 0, y: 5 },
    bottomRight: { x: 10, y: 0 }
  };
  
  
  function printRectangleInfo(rect) {
    alert("Top Left: (" + rect.topLeft.x + ", " + rect.topLeft.y + ")\n" +
          "Bottom Right: (" + rect.bottomRight.x + ", " + rect.bottomRight.y + ")");
  }
  
 
  function getWidth(rect) {
    return rect.bottomRight.x - rect.topLeft.x;
  }
  
 
  function getHeight(rect) {
    return rect.topLeft.y - rect.bottomRight.y;
  }
  
  
  function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
  }
  
  
  function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
  }
  
  
  function changeWidth(rect, deltaWidth) {
    rect.bottomRight.x += deltaWidth;
  }
  
  
  function changeHeight(rect, deltaHeight) {
    rect.topLeft.y += deltaHeight;
  }
  
 
  function changeWidthAndHeight(rect, deltaWidth, deltaHeight) {
    changeWidth(rect, deltaWidth);
    changeHeight(rect, deltaHeight);
  }
  
 
  function moveX(rect, offset) {
    rect.topLeft.x += offset;
    rect.bottomRight.x += offset;
  }
  
 
  function moveY(rect, offset) {
    rect.topLeft.y += offset;
    rect.bottomRight.y += offset;
  }
  

  function moveXY(rect, offsetX, offsetY) {
    moveX(rect, offsetX);
    moveY(rect, offsetY);
  }
  
 
  function isPointInsideRectangle(rect, pointX, pointY) {
    return (
      pointX >= rect.topLeft.x &&
      pointX <= rect.bottomRight.x &&
      pointY >= rect.bottomRight.y &&
      pointY <= rect.topLeft.y
    );
  }
  
 
  printRectangleInfo(rectangle);
  alert("Width: " + getWidth(rectangle) +
        "\nHeight: " + getHeight(rectangle) +
        "\nArea: " + getArea(rectangle) +
        "\nPerimeter: " + getPerimeter(rectangle));
  
  changeWidth(rectangle, 5);
  changeHeight(rectangle, 3);
  printRectangleInfo(rectangle);
  
  moveXY(rectangle, 2, -1);
  printRectangleInfo(rectangle);
  
  var isInside = isPointInsideRectangle(rectangle, 3, 2);
  alert("Is point (3, 2) inside the rectangle: " + isInside);
  