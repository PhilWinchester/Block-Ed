class Node:
    def __init__(self):
        self.leftChild = True       # pointer to left child node
        self.rightChild = "hi"      # pointer to right child node
        self.parentNode = 2      # pointer to parent node
        self.siblingNode = {'None':False}     # pointer to sibling node
        self.side = [1,2,3,4,5]            # whether this node is left or right

    def printNode(self):
        print "in printNode"
        return self.temp
