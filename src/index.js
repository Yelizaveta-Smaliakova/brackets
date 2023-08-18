module.exports = function check(str, bracketsConfig) {
  brack = {
    "()":"\\(\\)",
    "[]":"\\[\\]",
    "||":"\\|\\|"
  }
  bracketsConfig = bracketsConfig.map((el) => {
      if (Object.keys(brack).indexOf(el.join(""))!=-1) return new RegExp(brack[el.join("")], "g")
      else return new RegExp(el.join(""), "g")
      });
      
  let oldLen = str.length
  let newLen = 0

  while (oldLen != newLen) {
      oldLen = str.length
      bracketsConfig.forEach((el) => str = str.replace(el,''))
      newLen = str.length
  }

  return newLen === 0 ? true : false
}
