import YAML from 'js-yaml';

export default (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml' || 'yaml':
      return YAML.load(data);
    default:
      throw new Error(`'Unknown format! ${format}'`);
  }
};
