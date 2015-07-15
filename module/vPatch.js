export default (properties) => {
  return {
    '0': {
      patch: require('object-assign')({}, properties)
    }
  };
};
