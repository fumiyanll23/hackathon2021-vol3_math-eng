from random import sample

def choose_prime_numbers() -> list:
    prime_numbers = [1087, 8111, 4421, 2437, 9199, 4937, 1511, 9733, 6997, 3413]

    return sample(prime_numbers, 2)

def generate_keys(p: int, q: int) -> list:
    '''
    generate public-key (e,n) and secret-key (d,n) from 2 prime numbers p, q
    '''

    n = p * q
    l = (p-1) * (q-1)
    e = 65537
    i = 0
    for i in range(2, l):
        if (e*i)%l == 1:
            d = i
            break

    return [[e,n], [d,n]]
