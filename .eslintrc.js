module.exports = {
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'flowtype', 'react-hooks'],

  rules: {
    'prettier/prettier': ['error'],

    // 可能的错误 //

    // 禁止未使用的变量
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['off'],
    // 禁止未定义的变量
    'no-undef': 0,
    // 强制处理callback error
    'handle-callback-err': 0,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 0,
    'no-useless-computed-key': 0,
    // 禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 0,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    /*
     function foo() {
     return true;
     console.log("done");
     }//错误
     */
    'no-unreachable': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    // typeof foo === "undefimed" 错误
    'valid-typeof': 2,

    // 最佳实践 //

    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'windows'],
    // 允许使用 单引号和es6的``
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: ['error', 'always'],
    // 尽可能使用`===`
    eqeqeq: 2,
    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [2, 'always'],
    // 在代码块之前强制使用空格
    'space-before-blocks': 2,
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 一元操作符必须要有空格
    'space-unary-ops': 2,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        exceptions: ['-'],
      },
    ],
    // 强制关键字周围空格的一致性
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 强制在箭头函数中 "xxx() => {}"
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 在冒号后要加上空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ],
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 0,
    // 不允许使用var
    'no-var': 2,
    // 要求在逗号后使用一个或多个空格
    'comma-spacing': [
      'error',
      {
        after: true,
      },
    ],
    // 禁止分号前后有空格
    'semi-spacing': 2,
    // 禁止分号之前出现空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // 不允许改变用const声明的变量
    'no-const-assign': 'error',
    // 如果一个变量不会被重新赋值，最好使用const进行声明。
    'prefer-const': 'error',
    // 检查 Hooks 的使用规则
    'react-hooks/rules-of-hooks': 'error',
    // 强制指定react hook依赖
    'react-hooks/exhaustive-deps': 0,
    // 强制类型后面要有一个","
    'flowtype/delimiter-dangle': [2, 'only-multiline'],
    // 在 : 后强制加空格
    'flowtype/space-after-type-colon': [2, 'always'],
    // 在 | & 符号中,强制加空格
    'flowtype/union-intersection-spacing': [2, 'always'],
  },
};
