import _cnm from 'clear-nm'
import process from 'process'

const obj = {
  cnm: () => {
    _cnm(process.cwd()).then(() => {
      console.log("over")
    })
  }
}

export default obj