import { NextPage } from 'next'

import { PageTitle } from '@/components/atoms/PageTitle'
import { KeyView } from '@/components/templates/KeyView'

import { KeyAddBtns } from '@/components/templates/KeyAddBtns'

// ___________
//
const KeysPage: NextPage = () => (
  <div>
    <PageTitle title="鍵" apply />
    <div>
      <KeyView />
      <KeyAddBtns />
    </div>
  </div>
)

export default KeysPage
