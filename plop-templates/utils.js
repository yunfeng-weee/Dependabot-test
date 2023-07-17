exports.notEmpty = (name) => (v) => !v || v.trim() === '' ? `${name} is required` : true;

exports.isInBlocks = (data, key) => {
  if (data.blocks && data.blocks.length > 0 && data.blocks.indexOf(key) > -1) {
    return true;
  }
  return false;
};
