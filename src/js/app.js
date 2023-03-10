function orderByProps(obj, sortProps) {
  const result = [];
  let remainingProps = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (sortProps.includes(prop) === false) {
        remainingProps.push(prop);
      }
    }
  }

  remainingProps = [...sortProps, ...remainingProps.sort()];

  for (const prop of remainingProps) {
    result.push({ key: prop, value: obj[prop] });
  }

  return result;
}

export default orderByProps;
