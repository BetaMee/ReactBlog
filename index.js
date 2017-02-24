require('babel-polyfill');
//加载样式钩子，补足服务端渲染无法识别CSS文件的情况
require('css-modules-require-hook')({
    extensions: ['.css'],
    generateScopedName: '[name]__[local]-[hash:base64:8]'
});
// Image required hook
//引入asset-require-hook，来识别图片资源，对小于8K的图片转换成base64字符串，大于8k的图片转换成路径引用。
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif','webp'],
    limit: 10000
});
//处理字体
require('asset-require-hook')({
    extensions: ['ttf','woff','svg','eot','woff2'],
    limit: 10000
});

//启动服务端脚本
require('./server/server');