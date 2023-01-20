// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const is8Long = (label) => label.length >= 8;

const containsSpecialChar = (label) => {
    const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return false;
};

exports.containsSpecialChar = containsSpecialChar;
exports.is8Long = is8Long;
exports.isEmpty = isEmpty;
