export default function vPatchify(properties) {
  return {
    '0': {
      patch: Object.assign({}, properties)
    }
  };
}
