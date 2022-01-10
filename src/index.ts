import fse from 'fs-extra'
import path from 'path'
import gitcmd from './cmds/gitcmd'
import cnm from './cmds/clearNMcmd'

const protoProxy: any = {}

const inject = (name: string, instance: any) => {
  protoProxy[name] = instance
}

inject('gitcmd', gitcmd)
inject('cnm', cnm)

const p = new Proxy(protoProxy, {
  get: function (target, propKey, reciver) {
    // TODO: 合法性检测，重名问题处理
    let allKeys = Object.keys(target)
    for (let i = 0; i < allKeys.length; i++) {
      const keyName = allKeys[i];
      if(Reflect.has(target[keyName], propKey)) {
        return target[keyName][propKey]
      }
    }
  }
})



export default p 