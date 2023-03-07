function orderByProps(obj, sortProps) {
  const result = [];

  // Add properties in the sortProps array
  for (const prop of sortProps) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
    }
  }

  // Add remaining properties in alphabetical order
  const remainingProps = Object.keys(obj).sort();
  for (const prop of remainingProps) {
    if (sortProps.includes(prop) === false) {
      result.push({ key: prop, value: obj[prop] });
    }
  }

  return result;
}

export default orderByProps;
