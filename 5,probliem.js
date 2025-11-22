function points(games) {
  let total = 0;
  for (let g of games) {
    const [x, y] = g.split(":").map(Number);
    if (x > y) total += 3;
    else if (x === y) total += 1;
  }
  return total;
}

console.log(points(["3:1", "2:2", "0:1", "4:4", "1:0", "2:1", "0:0", "3:2", "1:1", "4:0"]));
