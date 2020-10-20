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
  _set(key, val) {
    let hash = this.hash(key);
    // 4
    //          *
    // [ , , , , ]
    if(!this.keyMap[hash]) {
      // if there is nothing at keymap[hash],
      // we want to insert the keyvalue pair in a nested array
      this.keyMap[hash] = [[key, val]];
    } else {
      this.keyMap.push([key, val])
    }
  }
}