module.exports = {
  // 사전 정의된 전역 변수 사용
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  // ECMScript 규격의 JSX 사용 여부
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 서드파티 플러그인
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unused-imports'],
  // 추가한 플러그인에서 사용할 규칙
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 규칙
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': ['error', 'never'],
    'react/prop-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
    'prettier/prettier': 'error', // Error when breaking Prettier rules
    'import/no-duplicates': 'error', // no-duplicate-imports autofix
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/style-prop-object': 'off',
  },
};
