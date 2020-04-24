module.exports = {
  name: 'pipeable-tap',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pipeable/tap',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
