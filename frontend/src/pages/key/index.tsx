import { NextPage } from 'next'

import { PageTitle } from '@/components/atoms/PageTitle'
import { KeyView } from '@/components/templates/KeyView'

import { KeyAddBtns } from '@/components/templates/KeyAddBtns'

// ___________
//
const KeysPage: NextPage = () => (
  <div>
    <KeyView />
    <KeyAddBtns />
  </div>
)

export default KeysPage
