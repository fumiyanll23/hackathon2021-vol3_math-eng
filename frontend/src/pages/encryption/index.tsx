import { NextPage } from 'next'

import { EncForm } from '@/components/templates/EncForm'
import { PageTitle } from '@/components/atoms/PageTitle'

// ___________
//
const EncryptionPage: NextPage = () => (
  <div>
    <PageTitle title="暗号化" apply />
    <EncForm />
  </div>
)

export default EncryptionPage
