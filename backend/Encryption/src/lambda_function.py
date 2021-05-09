import json
from . import encryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    pks = list(map(int, body['encKey'].split('/')))
    plaintext = body['message']

    # compute
    plain_integers = encryption_module.list_encode134(plaintext)
    cipher_integers = encryption_module.encrypt(plain_integers, pks)
    ciphertext = encryption_module.list_encode_base62(cipher_integers)

    # output
    if body['scheme'] is None or pks is None or plaintext is None:
        return {
            'statusCode': 400
        }
    else:
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'cipherText': ciphertext
                }
            )
        }
