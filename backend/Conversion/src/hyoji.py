#辞書作成
##小文字
c = 0
for i in range(97, 123):
    print("'{}':'{}', " .format(c, chr(i)), end =(""))
    c += 1
##大文字
for i in range(65, 91):
    print("'{}':'{}', " .format(c, chr(i)), end =(""))
    c += 1
##数字
for i in range(48, 58):
    print("'{}':'{}', " .format(c, chr(i)), end =(""))
    c += 1
##ひらがな
for i in range(ord("ぁ"), ord("ん") + 1):
    if i == ord("ぁ") or i == ord("ぃ") or i == ord("ぅ") or i == ord("ぇ") or i == ord("ぉ") or i == ord("ゃ") or i == ord("ゅ") or  i == ord("ょ") or i == ord("ゐ") or i == ord("ゑ") or i == ord("ゎ") :
        continue
    print("'{}':'{}', " .format(c, chr(i)), end =(""))
    c += 1
##小文字大文字数字ひらがな
