function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  const positionFromFront = queue.length - 1 - wolfIndex;

  if (positionFromFront === 0) {
    return "Pls go away and stop eating my sheep";
  }

  return `Oi! Sheep number ${positionFromFront}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
