const { Asset } = require('parcel-bundler');

class TxtAsset extends Asset {
  // type = 'js';

  constructor (name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
    console.log('now were getting somewheres');
  }

  generate () {
    const content = this.contents.replace(/`/g, '\\`');
    console.log('got contents', contents);
    return [{
      type: 'js',
      value: `module.exports = \`${content}\``
    }];
  }
}

module.exports = TxtAsset;
