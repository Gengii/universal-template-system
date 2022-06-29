module.exports = {
  // 表示当前⽬录即为根⽬录，ESLint 规则将被限制到该⽬录下
  root: true,
  env: {
    // env 表示启⽤ ESLint 检测的环境
    node: true
  },

  extends: [
    // ESLint 中基础配置需要继承的配置
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 需要修改的启⽤规则及其各⾃的错误级别
    /**
     * 错误级别分为三种：
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使⽤警告级别的错误：warn (不会导致程序退出)
     * "error" 或 2 - 开启规则，使⽤错误级别的错误：error (当被触发的时候，程序会退出)
     */
     
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "quotes": "error" // 默认
    "quotes": "off", // 修改不校验
  //  "quotes": 'warn',
    'space-before-function-paren': 'off', // 关闭prettier和eslint的方法名后面空格的冲突
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: ['index'], //需要忽略的组件名
        labeled:false
      }
    ]
  },
  lintOnSave:false, //直接关闭eslint检查
  devServer:{
    // 关闭eslint语法验证
    overlay:{
      warning:false,
      errors:false
    }
  },
}
