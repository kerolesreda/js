function flickSwitch(arr) {
  let state = true;
  return arr.map(item => {
    if (item === "flick") state = !state;
    return state;
  });
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));
