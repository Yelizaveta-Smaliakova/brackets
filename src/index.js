function here(str, brackets) {
    for (let i = 0; i < brackets.length; i++) {
        if (str.indexOf(brackets[i]) != -1) return true;
    }
    return false;
}

module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    while (here(str, brackets)) {
        for (let i = 0; i < brackets.length; i++) {
            str = str.replace(brackets[i], "");
        }
    }
    return (str.length == 0);
}
