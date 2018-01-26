import { store } from 'rfx-core'

import { useStrict } from 'mobx'

import UI from './ui'

useStrict(true)

export default store.setup({
  UI
})
