module.exports = {
  name: 'operators',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/operators',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
