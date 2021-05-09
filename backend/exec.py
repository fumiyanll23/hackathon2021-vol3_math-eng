import json
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from backend.Decryption.src import lambda_function as dec
from backend.Encryption.src import lambda_function as enc
from backend.KeyGen.src import lambda_function as keygen


def exec_keygen():
    '''KeyGen を実行する関数'''
    event = {
        'queryStringParameters': {'scheme': 'rsa'}
    }
    keygen.lambda_handler(event, {})


def exec_enc():
    '''Encryption を実行する関数'''
    event = {
        'body': json.dumps({
            'scheme': 'rsa',
            'encKey': '65537/40668779',
            'message': 'こんにちはworld'
        })
    }
    enc.lambda_handler(event, {})


def exec_dec():
    '''Decryption を実行する関数'''
    event = {
        'body': json.dumps({
            'scheme': 'rsa',
            'decKey': '31676993/40668779',
            'cipherText': 'bokNj/bXJtv/cNDMT/FT38/cjV4z/cCxtA/bezxy/bZVcU/GmXe/3iFy'
        })
    }
    dec.lambda_handler(event, {})


if __name__ == '__main__':
    exec_keygen()
    exec_enc()
    exec_dec()
