#!/usr/bin/env node
const program = require('commander'); // 命令行解析工具
const chalk = require('chalk'); // 输出增色
const clear = require('clear'); // 清空终端屏幕；
const figlet = require('figlet'); // 生成基于`ASCII`的艺术字

clear();
// console.log(
//   chalk.yellow(figlet.textSync('Aladdin', { horizontalLayout: 'full' }))
// );

program
  // 定义命令和参数
  .command('create <project-name>')
  .description('创建一个新的项目')
  .action((projectName) => {
    // 打印命令行输入的值
    console.log(chalk.green(`项目名称是：${projectName}`));
    // require('../lib/create')(projectName);
  });

program
  .version(`${require('../package.json').version}`)
  .usage('<command> [options]');

// 解析用户执行命令传入参数
program.parse(process.argv);