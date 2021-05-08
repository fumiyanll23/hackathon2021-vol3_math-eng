# API 仕様書

# 鍵生成

## [GET] `/key_gen{?scheme}`

### 処理概要

- 指定されたスキーマの暗号化鍵と復号鍵を返す。
- 指定されたスキーマがない場合、`BadRequest` を返す。

### Example URI

GET `/key_gen?scheme=rsa`

### URI Parameters

- `scheme` : `string` (必須)
  - 暗号に使用するスキーマ。現在は `rsa` のみとする

### Response [`200`]

#### Headers

```yaml
Content-Type: application/json
```

#### Body

```json
{
  "scheme": "rsa",
  "encKey": 12345,
  "decKey": 67890
}
```

# 暗号化

## [POST] `/encryption`

### 処理概要

- 与えられた、スキーマ、暗号鍵、平文を暗号化して返す。
- どれか一つのパラメータがなかったら `BadRequest` を返す。

### Example URI

POST `/encrytion`

### Request (application/json)

#### Attributes

- `scheme` : `string` (必須)
  - 暗号に使用するスキーマ。現在は `rsa` のみとする
- `encKey`: `number` (必須)
  - 暗号化に使用する暗号化鍵。
- `message`: `string` (必須)
  - 平文。

### Response 200

#### Headers

```yaml
Content-Type: application/json
```

#### Body

```json
{
  "scheme": "rsa",
  "cipherText": "eohiasasl"
}
```

# 復号

## [POST] `/decryption`

### 処理概要

- 与えられた、スキーマ、復号鍵、暗号文を復号して返す。
- どれか一つのパラメータがなかったら `BadRequest` を返す。

### Example URI

POST `/decryption`

### Request (application/json)

#### Attributes

- `scheme` : `string` (必須)
  - 暗号に使用するスキーマ。現在は `rsa` のみとする
- `decKey`: `number` (必須)
  - 復号に使用する復号鍵。
- `cipherText`: `string` (必須)
  - 暗号文。

### Response 200

#### Headers

```yaml
Content-Type: application/json
```

#### Body

```json
{
  "scheme": "rsa",
  "message": "hello world"
}
```
