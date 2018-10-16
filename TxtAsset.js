const { Asset } = require('parcel-bundler');

const REGEX_ALL_BACKTICKS = /`/g;
const ESCAPED_BACKTICK = '\\`';

class TxtAsset extends Asset {

  constructor (name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate () {
    const escapedText = this.contents.replace(REGEX_ALL_BACKTICKS, ESCAPED_BACKTICK);
    return [{
      type: 'js',
      value: `module.exports = \`${escapedText}\``,
    }];
  }
}

module.exports = TxtAsset;
