function orderByProps(obj, sortProps) {
  const result = [];
  let remainingProps = [];
  const newSortProp = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (sortProps.includes(prop) === false) {
        remainingProps.push(prop);
      } else {
        newSortProp.push(prop);
      }
    }
  }

  remainingProps = [...newSortProp, ...remainingProps.sort()];

  for (const prop of remainingProps) {
    result.push({ key: prop, value: obj[prop] });
  }

  return result;
}

export default orderByProps;
