import json
from . import decryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    sks = body['decKey']
    ciphertext = body['cipherText']

    # compute
    cipher_integers = decryption_module.list_decode62(ciphertext)
    plain_integers = decryption_module.decrypt(cipher_integers, sks)
    plaintext = decryption_module.join_encode(plain_integers)

    # output
    if body['scheme'] is None or body['decKey'] is None or body['cipherText'] is None:
        return {
            'statusCode': 400
        }
    else:
        print('The ciphertext has been decrypted.')
        print('The plaintext is')
        print(plaintext)
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'message': plaintext
                }
            )
        }
