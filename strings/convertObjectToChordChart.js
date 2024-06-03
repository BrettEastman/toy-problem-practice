// this isn't really a LeetCode problem, but it is a problem I encountered while working on the Lydian Labs project

const convertObjectToChordChart = (inputObject) => {
  const numBars = 12;
  const beatsPerBar = 4;
  const totalNumBeats = 48;
  const numLines = 3;
  const numBarsPerLine = numBars / numLines;

  // Initialize an array with empty strings for the total length
  const outputArray = Array.from(
    { length: totalNumBeats },
    (_, i) => inputObject[i] || ""
  );

  let result = "";

  for (let line = 0; line < numLines; line++) {
    for (let bar = 0; bar < numBarsPerLine; bar++) {
      const start = line * numBarsPerLine * beatsPerBar + bar * beatsPerBar;
      const end = start + beatsPerBar;
      if (start < totalNumBeats) {
        const bar = outputArray
          .slice(start, end)
          .map((chord) => chord.padEnd(6, "-"))
          .join("");
        result += `|-${bar.padEnd(beatsPerBar * 2 - 1, "-")}`;
      }
    }
    if (line < numLines - 1) {
      result += "|\n";
    }
  }

  return result.slice(0, -1) + "||";
};

const input = {
  0: "I",
  1: "",
  2: "V7",
  3: "",
  4: "I",
  5: "",
  6: "",
  7: "",
  8: "ii/V",
  9: "",
  10: "V",
  11: "",
  12: "",
  13: "IV",
  14: "",
  15: "V",
  16: "I",
  17: "",
  18: "",
  19: "",
  20: "vi",
  21: "V",
  22: "I",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "vii",
  29: "",
  30: "",
  31: "",
  32: "IV",
  33: "",
  34: "I",
  35: "",
  36: "",
  37: "",
  38: "V",
  39: "",
  40: "I",
  41: "",
  42: "",
  43: "",
  44: "IV",
  45: "",
  46: "I",
  47: "",
};

console.log(convertObjectToChordChart(input));
