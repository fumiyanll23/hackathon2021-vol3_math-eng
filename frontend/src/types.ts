export type Scheme = 'RSA'

export type Key = {
  scheme: Scheme
  encKey: string
  decKey: string
}
