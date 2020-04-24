module.exports = {
  name: 'pipeable-scan',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pipeable/scan',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
