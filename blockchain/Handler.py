from Merkle import *
from hashlib import sha256
hash_function = sha256

# Handler (i.e. blockchain) for each election.
# Manages opening, closing of elections
# Adds votes, verifies votes, etc
# holds the chain and all the pointers
class Handler:
    def __init__(self, name, el_id, options):
        self.name = name            # name of the election
        self.id = el_id             # id of the election
        self.options = options      # choices for the election
        self.chain = []             # list of trees

    # change the name of the election
    def change_name(self, new_name):
        self.name = new_name

    # change the options for this elections
    # takes the whole set of options, NOT a single one to add or remove
    def change_options(self, new_opt):
        self.options = new_opt

    # add vote to tree
    # need to get the id of the tree
    def vote(self, v):
        block = self.chain[v.id]
        ret_str = block.add_leaf(v)
        if ret_str == "full":
            cap_tree(block)

    def cap_tree(self, tree):
        print len(tree)
        # if tree is length of 10
        # hash it's values
        # inert into chain
