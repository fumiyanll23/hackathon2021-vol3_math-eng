import { NextPage } from 'next'

import { Counter } from '@/components/templates/Counter'

// ___________
//
const IndexPage: NextPage = () => (
  <div>
    <h1>Counter</h1>
    <div>
      <Counter />
    </div>
  </div>
)

export default IndexPage
