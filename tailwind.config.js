// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' はデフォルトのサンセリフフォントに追加
        // Noto Sans JP をメインにし、デフォルトのサンセリフフォントをフォールバックに指定
        'sans': ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        
        // 'serif' や 'mono' など、他のカテゴリに追加することも可能
        // 例: カスタムのフォント名 'custom-roboto' を定義
        'kiwi': ['"Kiwi Maru"', ...defaultTheme.fontFamily.sans],        
      },
    },
  },
  plugins: [],
};