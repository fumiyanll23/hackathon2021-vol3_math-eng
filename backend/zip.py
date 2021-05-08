import os
import shutil

dirs = ["Decryption", "Encryption", "KeyGen"]

if __name__ == "__main__":
    for dir in dirs:
        shutil.make_archive(f'dist/{dir}', 'zip', root_dir=os.path.join(os.path.dirname(__file__), dir))
