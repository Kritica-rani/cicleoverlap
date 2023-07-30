//this will generate random color
export const getRandomColor = () => {
  let color = "#";
  const letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//detect if two circles are overlapping
export const detectCircleOverlap = (circle1, circle2) => {
  const collide = !(
    circle1.top > circle2.bottom ||
    circle1.right < circle2.left ||
    circle1.bottom < circle2.top ||
    circle1.left > circle2.right
  );
  return collide;
};
