module.exports = {
  name: 'creators',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/creators',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
