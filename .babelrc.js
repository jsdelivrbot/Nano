module.exports = {
  presets: [['env', {modules: false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
}

