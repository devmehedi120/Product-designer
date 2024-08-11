import { fabric } from 'fabric'; // Correct approach

// Example: Creating a simple canvas and adding a rectangle
const canvas = new fabric.Canvas('c');

const rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 200,
  height: 200,
});

canvas.add(rect);
