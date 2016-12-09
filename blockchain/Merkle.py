from Node import *

class Merkle:
    def __init__(self):
        self.cap_size = 10
        self.leaves=[]
        self.node = Node()

    def merkleTest(self):
        print "In merkleTest"
        return self.node.print_node()

    def add_leaf(self, leaf):
        leaf = Node()
        self.leaves.append(node)
        print len(self.leaves.append)
