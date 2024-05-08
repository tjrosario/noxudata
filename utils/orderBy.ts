function sortBy(key, cb) {
  if (!cb) cb = () => 0;
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(a, b));
}

function sortByDesc(key, cb) {
  if (!cb) cb = () => 0;
  return (b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(b, a));
}

export function orderBy(keys, orders) {
  let cb = () => 0;
  keys.reverse();
  orders.reverse();
  for (const [i, key] of keys.entries()) {
    const order = orders[i];
    if (order == 'asc') {
      cb = sortBy(key, cb);
    } else if (order == 'desc') {
      cb = sortByDesc(key, cb);
    } else {
      throw new Error(`Unsupported order "${order}"`);
    }
  }
  return cb;
}
