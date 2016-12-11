from flask import *
from json import *
from Handler import *
from Helper import *
from Vote import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# various server helper functions
helper = Helper()

# list of all elections held in the server
# much scalability!!! such safe!!!!!
Elections = []

@app.route('/elections', methods=['GET', 'POST'])
def elections():
    if request.method == 'GET':
        return jsonify(helper.convert_elections(Elections))
    elif request.method == 'POST':
        if request.get_json:
            election_data = helper.strip_unicode(request.get_json())
        else:
            return jsonify({'error':"bad data",'response':400})
        el_handler = Handler(election_data['name'], election_data['id'], election_data['options'])
        Elections.append(el_handler)
        # need to get data out of this and create json to send back
        return jsonify(helper.convert_elections(Elections))

@app.route('/vote', methods=['POST'])
def vote():
    # create temporary dictionary item for vote
    vote_dict = helper.strip_unicode(request.get_json())
    # create Vote item for vote dictionary purely b/c I find it easier to work with objects that I can manipulate how I like
    # might remove this if it isn't repeated too much
    vote = Vote(vote_dict.get('election'), vote_dict.get('options'))
    election = Elections[vote.id]
    # print 'vote request:', vote, election.name
    election.vote(vote)
    return jsonify(request.get_json())

if __name__ == '__main__':
    app.run(debug=True)
