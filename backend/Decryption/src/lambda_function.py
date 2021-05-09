import json
from . import decryption_module

def lambda_handler(event: dict, context):
    # input
    body = json.loads(event['body'])
    sks = list(map(int, body['decKey'].split('/')))
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
        return {
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'message': plaintext
                }
            )
        }
