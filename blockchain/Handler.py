from Merkle import *

class Handler:
    def __init__(self, name, el_id):
        self.name = name
        self.id = el_id
        self.temp = False
        self.merkle = Merkle()

    def print_resp(self, json):
        print "in handler"
        print self.merkle.merkleTest()
        return json

    def new_election(self, name, options):
        return '%s %s' % (str(name), options)
