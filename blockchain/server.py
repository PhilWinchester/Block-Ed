from flask import *
from json import *
from Handler import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

Elections = []

@app.route('/', methods=['GET','POST'])
def hello_world():
    if request.method == 'GET':
        jsonResp = {'json': True, 'cors': True}
        print jsonify(jsonResp)
        return jsonify(jsonResp)
    elif request.method == 'POST':
        if request.get_json:
            req_json = stripUnicode(request.get_json())
            print req_json
        else:
            print "no json ;("
        return jsonify(response=200)

@app.route('/new_election', methods=['GET', 'POST'])
def new_election():
    if request.method == 'GET':
        return jsonify(Elections)
    elif request.method == 'POST':
        if request.get_json:
            election_data = stripUnicode(request.get_json())
        else:
            return jsonify(bad_data=400)
        el_handler = Handler(election_data.name, election_data.id)
        Elections.append(el_handler)
        return jsonify(Elections)

@app.route('/vote', methods=['POST'])
def vote():
    return jsonify(request.get_json())

def stripUnicode(json):
    new_dict = {}
    for key in json:
        k = str(key)
        if isinstance(json[key], unicode):
            v = str(json[key])
        else:
            v = json[key]
        new_dict[k] = v
        print type(k), type(v)
    return new_dict


if __name__ == '__main__':
    app.run(debug=True)
