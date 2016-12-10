from flask import *
from json import *
from Handler import *
from Helper import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# various server helper functions
helper = Helper()

# list of all elections held in the server
# much scalability!!! such safe!!!!!
Elections = []

@app.route('/', methods=['GET','POST'])
def hello_world():
    if request.method == 'GET':
        jsonResp = {'json': True, 'cors': True}
        print jsonify(jsonResp)
        return jsonify(jsonResp)
    elif request.method == 'POST':
        if request.get_json:
            req_json = helper.strip_unicode(request.get_json())
            print req_json
        else:
            print "no json ;("
        return jsonify(response=200)

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
        return jsonify(helper.convert_elections(Elections)) # need to get data out of this and create json to send back

@app.route('/vote', methods=['POST'])
def vote():
    print jsonify(request.get_json())
    return jsonify(request.get_json())

if __name__ == '__main__':
    app.run(debug=True)
