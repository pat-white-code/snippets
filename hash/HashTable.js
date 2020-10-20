class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0;
    let weird_prime = 37;
    for(let i = 0 ; i < Math.min(key.length, 100) ; i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * weird_prime + val) % this.keyMap.length
    }
    return total;
  }
}