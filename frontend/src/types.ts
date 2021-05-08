export type Scheme = 'RSA'

export type Key = {
  scheme: Scheme
  enc: string
  dec: string
}
