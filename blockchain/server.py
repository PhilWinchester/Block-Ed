from flask import *
from json import *
from Handler import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

handler = Handler()

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
        return jsonify(success=True)

@app.route('/test', methods=['GET'])
def test_gen():
    print handler.new_election('test', ['a','b','c'])
    return 'a ok', 200


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
