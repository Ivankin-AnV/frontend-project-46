import _ from 'lodash';

const getChildren = (item) => item.children;
const isComplexValue = (value) => (_.isObject(value) ? '[complex value]' : value);
const isString = (item) => (_.isString(item) && item !== '[complex value]' ? `'${item}'` : item);
const getName = (item) => item.name;
const plain = (tree) => {
  const iter = (node, name = '') => {
    const result = node.flatMap((item) => {
      switch (item.status) {
        case 'added':
          return `Property '${name + getName(item)}' was added with value: ${isString(isComplexValue(item.value))}`;
        case 'deleted':
          return `Property '${name + getName(item)}' was removed`;
        case 'unchanged':
          return [];
        case 'changed':
          return `Property '${name + getName(item)}' was updated. From ${isString(isComplexValue(item.value1))} to ${isString(isComplexValue(item.value2))}`;
        case 'nested':
          return iter(getChildren(item), `${name + getName(item)}.`);
        default:
          throw new Error('Invalid format');
      }
    });
    return result.join('\n');
  };
  return iter(tree);
};
export default plain;
