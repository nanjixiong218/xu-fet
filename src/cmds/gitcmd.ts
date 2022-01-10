import inquirer from 'inquirer'
import chalk from 'chalk'
import sh from 'shelljs'

const root = process.cwd();
const typeQuestion:inquirer.QuestionCollection = [
  {
    type: 'list',
    name: 'type',
    choices: [
      {
        name: '* fixed    : bug修复，建议升级z位',
        value: 'fixed',
        short: 'fixed'
      },
      {
        name: '* feature  : 新功能,新特性的添加, 建议升级y位',
        value: 'feature',
        short: 'feature'
      },
      {
        name: '* breaking : 进行了不兼容的改动，会造成breaking change, 建议升级x位',
        value: 'feature',
        short: 'feature'
      },
      {
        name: '* style    : 样式修复，不影响脚本运行',
        value: 'style',
        short: 'style'
      },
      {
        name: '* refactor : 代码重构',
        value: 'refactor',
        short: 'refactor'
      },
      {
        name: '* test     : 添加单测或者集成测试',
        value: 'test',
        short: 'test'
      },
      {
        name: '* temp     : 临时提交，不记录到changelog',
        value: 'temp',
        short: 'temp'
      }
    ]
  }
]
const msgQuestion:inquirer.QuestionCollection = [
  {
    type: 'input',
    name: 'msg',
    message: '请输入提交信息'
  }
]
interface InquirerResult {
  type: string,
  msg: string
}
class GitCmd {
  public name: string
  public age: number 
  constructor() {
    this.name = 'gitCmd'
    this.age = 10
  }
  async gc() {

    const result: InquirerResult = await inquirer.prompt<InquirerResult>(Array.prototype.concat.apply([], [typeQuestion, msgQuestion]))
    const {type, msg} = result;
    console.log(chalk.green('* 进行代码提交。。。。'))

    const commitMsg = `${type}: ${msg}`;

    sh.exec('git add .', { cwd: root});
    const gc = sh.exec(`git commit -am "${commitMsg}"`, { cwd: root})
    if(gc.code === 0) {
      console.log(chalk.green('* 代码提交完成！'))
    } else {
      console.log(chalk.red('* 代码提交失败！'))
    }
  }
  ga() {
    sh.exec('git add .', {cwd: root})
  }
  gb() {
    sh.exec('git branch', {cwd: root})
  }
  gd() {
    sh.exec('git diff', {cwd: root})
  }
  gcb(name: string) {
    sh.exec(`git checkout -b ${name}`, {cwd: root})
  }
  gcd() {
    sh.exec(`git checkout develop`,{cwd: root})
  }
  gcf() {
    sh.exec(`git config --list`, {cwd: root}) 
  }
  grm() {
    sh.exec('git rm -r --cached .', {cwd: root})
  }
  gs() {
    sh.exec('git status', {cwd: root})
  }
  gpl() {
    sh.exec('git pull', {cwd: root})
  }
  gps() {
    sh.exec('git push', {cwd: root}) 
  }
  toJSON () {
    return this.name
  }
}
export default new GitCmd()