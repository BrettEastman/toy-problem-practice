class BinaryHeap {
  constructor() {
    this.values = [41, 33, 27, 18, 13];
  }
  // insert: push the value into the values property on the heap; bubble up:
  insert(value) {
    this.values.push(value);
    let valIndex = this.values.length - 1;
    this.bubbleUp(valIndex);
  }

  bubbleUp(vI) {
    let pI = Math.floor((vI - 1) / 2);
    if (this.values[vI] > this.values[pI]) {
      [this.values[vI], this.values[pI]] = [this.values[pI], this.values[vI]];
      vI = pI;
      if (vI > 0) {
        this.bubbleUp(vI);
      }
    }
  }
}

let BH = new BinaryHeap();
BH.insert(55);
BH.insert(15);
BH.insert(44);
BH.insert(77);

console.log("BH", BH);
