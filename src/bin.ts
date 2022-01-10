#! /usr/bin/env node

import proxy from './index'
import { program } from 'commander'
import pkg from '../package.json'

program.version(pkg.version, '-v, --version')
  
  program.command('gc')
  .description('规范化commit')
  .action(() => {
    proxy.gc(); 
  })

  program.command('gb')
  .description('git branch')
  .action(() => {
    proxy.gb(); 
  })
  program.command('gd')
  .description('git diff')
  .action(() => {
    proxy.gd(); 
  })
  program.command('gcb')
  .option('-n, --name [value]', '新分支名称')
  .description('git checkout -b ${name}')
  .action((cmd) => {
    proxy.gcb(cmd.name); 
  })
  program.command('gcd')
  .description('git checkout develop')
  .action(() => {
    proxy.gcd(); 
  })
  program.command('gcf')
  .description('git config --list')
  .action(() => {
    proxy.gcf(); 
  })
  program.command('grm')
  .description('git rm -rf --cached .')
  .action(() => {
    proxy.grm(); 
  })
  program.command('gs')
  .description('git status')
  .action(() => {
    proxy.gs(); 
  })

  program.command('gpl')
  .description('git pull')
  .action(() => {
    proxy.gpl(); 
  })

  program.command('gps')
  .description('git push')
  .action(() => {
    proxy.gps(); 
  })

  program.command('cnm')
  .description('删除当前目录及子目录下的所有node_modules文件夹')
  .action(() => {
    proxy.cnm(); 
  })


  program.parse(process.argv)