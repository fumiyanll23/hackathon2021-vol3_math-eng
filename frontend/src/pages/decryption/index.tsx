import { NextPage } from 'next'

import { PageTitle } from '@/components/atoms/PageTitle'
import { DecForm } from '@/components/templates/DecForm'

// ___________
//
const DecryptionPage: NextPage = () => (
  <div>
    <PageTitle title="復号" apply />
    <div>
      <DecForm />
    </div>
  </div>
)

export default DecryptionPage
