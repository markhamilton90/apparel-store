export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function comparePriceHighToLow(arr) {
  return function(a, b) {
    return arr[a].price > arr[b].price ? -1 : arr[a].price < arr[b].price ? 1 : 0
  }
}

export function comparePriceLowToHigh(arr) {
  return function(a, b) {
    return arr[a].price > arr[b].price ? 1 : arr[a].price < arr[b].price ? -1 : 0
  }
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
