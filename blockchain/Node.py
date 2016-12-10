from hashlib import sha256
hash_function = sha256

class Node:
    def __init__(self, vote_data):
        # hashes vote data with sha256 algorithms
        # need to update so that the data being encrypted is more than a single integer
        self.value = hash_function(vote_data).hexdigest()
        self.leftChild = None       # pointer to left child node
        self.rightChild = None      # pointer to right child node
        self.parentNode = None      # pointer to parent node
        self.siblingNode = None     # pointer to sibling node
        self.side = None            # whether this node is left or right

    def print_node(self):
        print "Left Child %s, Right Child %s, Parent Node %s, Sibling %s, Side %s" % (self.leftChild, self.rightChild, self.parentNode, self.siblingNode, self.side)
