from Node import *

class Merkle:
    def __init__(self):
        self.cap_size = 10
        self.node = Node()

        def merkleTest(self):
            print "In merkleTest"
            return self.node.leftChild, self.node.rightChild, self.node.parentNode, self.node.siblingNode, self.node.side
