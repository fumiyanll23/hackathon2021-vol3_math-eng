export type Scheme = 'RSA'

export type Key = {
  id: number
  scheme: Scheme
  enc: string
  dec: string
}
