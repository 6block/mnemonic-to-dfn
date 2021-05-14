import { Accounts } from './accounts'

const button = document.querySelector('#generate')
const mnemonic = document.querySelector('#mnemonic')
const priv = document.querySelector('#priv')
const addr = document.querySelector('#addr')

button.addEventListener('click', () => {
    const account = new Accounts()
    account.generateKeys(mnemonic.value)
    priv.textContent = account.DFN.priv
    addr.textContent = account.DFN.addr
}, false)

