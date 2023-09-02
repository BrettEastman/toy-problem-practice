def mergeTrees(t1, t2):
    if t1 is None:
        return t2
    if t2 is None:
        return t1
    t1.val += t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t2.right = mergeTrees(t1.right, t2.right)
    return t1
