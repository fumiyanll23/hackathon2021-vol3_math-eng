import json
from . import decryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    sks = body['decKey']
    cipher_integers = body['cipherText']

    # compute
    plain_integers = decryption_module.decrypt(cipher_integers, sks)

    # output
    if body['scheme'] is None or body['decKey'] is None or body['cipherText'] is None:
        return {
            'statusCode': 400
        }
    else:
        print('The ciphertext has been decrypted.')
        print('The plaintext is')
        print(plain_integers)
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'message': plain_integers
                }
            )
        }
