def decrypt(cipher_integers: list, sks: list) -> list:
    '''
    decrypt cipher_integers
    '''

    d, n = sks

    return [pow(i, d, n) for i in cipher_integers]

def main():
    # input
    cipher_integers = [150271233]
    sks = [130005953, 186841783]

    # compute

    # output
    print(decrypt(cipher_integers, sks))


if __name__ == '__main__':
    main()
