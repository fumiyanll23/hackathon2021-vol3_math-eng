from random import sample

def choose_prime_numbers() -> list:
    prime_numbers = [1087, 8111, 4421, 2437, 9199, 4937, 1511, 9733, 6997, 3413]

    return sample(prime_numbers, 2)

def ring_inv(el: int, p: int) -> int:
    """
    find multiple inverse over ring. O(log(el))
    Args:
        el (int): an element of ring,
        p (int): module
    """

    # find a which meets el*a+p*b = 1
    m = p
    a, la = 0, 1
    while p != 0:
        q = el // p
        el, p = p, el%p
        a, la = la-q*a, a
    return la % m

def generate_keys(p: int, q: int) -> list:
    '''
    generate public-key (e,n) and secret-key (d,n) from 2 prime numbers p, q
    '''

    n = p * q
    l = (p-1) * (q-1)
    e = 65537
    d = ring_inv(e, l)

    return [[e,n], [d,n]]
