function randomClassNameRange(prefix, separator = "-", min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${prefix}${separator}${num}`;
}

export { randomClassNameRange };
