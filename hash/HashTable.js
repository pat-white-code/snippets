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
    let hash = this._hash(key);
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
  _get(key) {
    let hash = this._hash(key);
    let data = this.keyMap[hash];
    for(let i = 0 ; i < data ; i++) {
      let currentKey = data[i][0];
      if(currentKey == key) {
        return data[i]
      }
    }
    return undefined;
  }
  keys() {
    let output = [];
    for (let i = 0 ; i < this.keyMap.length ; i++) {
      let slot = this.keyMap[i];
      if(slot) {
        for( let j = 0 ; j < slot.length ; j++) {
          let keyValue = slot[j];
          output.push(keyValue[0]);
        }
      }
    }
    return output;
  }
}