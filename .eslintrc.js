module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', //解析器，将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    //不使用分号
    semi: ['error', 'never'],
    //该规则标记在不改变代码行为的情况下可以安全移除的转义。
    'no-useless-escape': 'off',
    //禁止修改const变量的值
    'no-const-assign': 2,
    //禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    // 禁止空语句块
    'no-empty': 2,
  },
}
