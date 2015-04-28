import asObject from 'as/object';

export default function hashifyAttributes(attributes) {
  return asObject(
    Array.from(attributes).map((attribute) => ({
      key: attribute.name,
      value: attribute.value
    }))
  );
}
