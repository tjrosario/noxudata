function sortBy(key: string, cb: any) {
  if (!cb) cb = () => 0;
  return (a: any, b: any) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(a, b);
}

function sortByDesc(key: string, cb: any) {
  if (!cb) cb = () => 0;
  return (b: any, a: any) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(b, a);
}

export function orderBy(keys: any, orders: string[]) {
  let cb: any = () => 0;
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
