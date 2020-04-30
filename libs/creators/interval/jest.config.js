module.exports = {
  name: 'creators-interval',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/creators/interval',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
