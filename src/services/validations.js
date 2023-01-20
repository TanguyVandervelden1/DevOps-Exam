// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const is8Long = (label) => label.length>=8;
    
exports.is8Long = is8Long;
exports.isEmpty = isEmpty;
