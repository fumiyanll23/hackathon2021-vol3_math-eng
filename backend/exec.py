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
            'encKey': [65537, 186841783],
            'message': [81]
        })
    }
    enc.lambda_handler(event, {})


def exec_dec():
    '''Decryption を実行する関数'''
    event = {
        'body': json.dumps({
            'scheme': 'rsa',
            'decKey': [130005953, 186841783],
            'cipherText': [150271233]
        })
    }
    dec.lambda_handler(event, {})


if __name__ == '__main__':
    exec_keygen()
    exec_enc()
    exec_dec()
