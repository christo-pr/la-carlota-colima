export function random(min, max) {
  return Math.floor(Math.random() * (+max - +min) + +min)
}

export function randomList(count, total) {
  const list = []

  while (list.length < count) {
    var r = random(0, total)
    if (list.indexOf(r) === -1) list.push(r)
  }

  return list
}
