import json
from . import encryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    pks = body['encKey']
    plain_integers = body['message']

    # compute
    cipher_integers = encryption_module.encrypt(plain_integers, pks)

    # output
    if body['scheme'] is None or pks is None or plain_integers is None:
        return {
            'statusCode': 400
        }
    else:
        print('The plain text has been encrypted.')
        print('The ciphertext is')
        print(cipher_integers)
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'cipherText': cipher_integers
                }
            )
        }
