module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all',
  ],
  plugins: ['react', 'react-native'],
  env: {
    'react-native/react-native': true,
  },
}; 