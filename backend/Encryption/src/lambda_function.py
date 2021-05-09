import json
from . import encryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    pks = body['encKey']
    plaintext = body['message']

    # compute
    plain_integers = encryption_module.list_encode62(plaintext)
    cipher_integers = encryption_module.encrypt(plain_integers, pks)
    ciphertext = encryption_module.list_encode_base62(cipher_integers)

    # output
    if body['scheme'] is None or pks is None or plaintext is None:
        return {
            'statusCode': 400
        }
    else:
        print('The plain text has been encrypted.')
        print('The ciphertext is')
        print(ciphertext)
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'cipherText': ciphertext
                }
            )
        }
