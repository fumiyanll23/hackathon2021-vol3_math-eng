def encrypt(plain_integers: list, pks: list) -> list:
    '''
    encrypt plain_integers
    '''

    e, n = pks

    return [pow(i, e, n) for i in plain_integers]

# def main():
#     # input
#     plain_integers = [81]
#     pks = [65537, 186841783]

#     # compute

#     # output
#     print(encrypt(plain_integers, pks))


# if __name__ == '__main__':
#     main()
