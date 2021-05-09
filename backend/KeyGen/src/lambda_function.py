import json
from . import key_gen_module

def lambda_handler(event: dict, context):
    # input

    # compute
    p, q = key_gen_module.choose_prime_numbers()
    sks, pks = key_gen_module.generate_keys(p, q)

    # output
    if event['queryStringParameters']['scheme'] == 'rsa':
        return {
            'statusCode': 200,
            'body': json.dumps(
                {
                    'scheme': 'rsa',
                    'encKey': str(sks[0])+str(sks[1]),
                    'decKey': str(pks[0])+str(pks[1])
                }
            )
        }
    else:
        return {
            'statusCode': 400
        }
