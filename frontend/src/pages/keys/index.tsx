import { NextPage } from 'next'

import { PageTitle } from '@/components/atoms/PageTitle'
import { KeysPreview } from '@/components/templates/KeysView'
import { KeyAddBtns } from '@/components/templates/KeyAddBtns'

// ___________
//
const KeysPage: NextPage = () => (
  <div>
    <PageTitle title="鍵管理" apply />
    <div>
      <KeysPreview />
      <KeyAddBtns />
    </div>
  </div>
)

export default KeysPage
