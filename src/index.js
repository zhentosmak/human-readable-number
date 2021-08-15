module.exports = function toReadable (number) {
    const zero = 'zero'
    const hundred = 'hundred'
    const units = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
    const secondTen = {11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
    const dozens = {10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}
    const numberStr = `${number}`
    let str = ''
    if (number === 0) {
    return zero
    }
    if (numberStr.length === 1) {
      for (let key in units) {
        if (key == numberStr[0]) {
          str += units[key]
        }
      }
    }
    if (numberStr.length === 2) {
      if (numberStr[1] == 0) {
        for (let key in dozens) {
          if (key[0] == numberStr[0]) {
            str += dozens[key]
          }
        }
      } else {
        if (numberStr[0] == 1) {
          for (let key in secondTen) {
            if (numberStr[1] == key[1]) {
              str += secondTen[key]
            }
          }
        } else {
          for (let firstKey in dozens) {
            if (numberStr[0] == firstKey[0]) {
              str += dozens[firstKey]
            }
          }
          for (let secondKey in units) {
            if (numberStr[1] == secondKey) {
              str += ` ${units[secondKey]}`
            }
          }
        }
      }
    }
    if (numberStr.length === 3) {
      for (let firstKey in units) {
        if (numberStr[0] == firstKey) {
          str += `${units[firstKey]} ${hundred}`
        }
      }
      if (numberStr[1] != 0) {
        if (numberStr[2] == 0) {
          for (let key in dozens) {
            if (key[0] == numberStr[1]) {
              str += ` ${dozens[key]}`
            }
          }
        } else {
          if (numberStr[1] == 1) {
            for (let key in secondTen) {
              if (numberStr[2] == key[1]) {
                str += ` ${secondTen[key]}`
              }
            }
          } else {
            for (let firstKey in dozens) {
              if (numberStr[1] == firstKey[0]) {
                str += ` ${dozens[firstKey]}`
              }
            }
            for (let secondKey in units) {
              if (numberStr[2] == secondKey) {
                str += ` ${units[secondKey]}`
              }
            }
          }
        }
      } else {
          for (let key in units) {
            if (numberStr[2] == key) {
              str += ` ${units[key]}`
            }
          }
        }
    } 
    return str
}
