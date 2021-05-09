from flask import Flask, jsonify
from flask_cors import CORS
from multiprocessing import Process, Value
from opencv import Blink

# Server default is 127.0.0.1:5000
app = Flask(__name__)
CORS(app)

blink = Blink()

def make_response(res, error_code):
    res = jsonify(res)
    res.headers.add('Access-Control-Allow-Origin', '*')
    res.headers.add('Access-Control-Allow-Credentials', 'true')
    res.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST')
    return res, error_code

@app.route('/')
def index():
    return 'Index Page'



@app.route('/get_status', methods=['GET', 'POST'])
def get_status():
    res = {
        'eye_status': 'good',
        'bpm': blink.get_bpm(),
    }
    return make_response({'res': res}, 200)

#def record_loop():
#    blink.run()
#    print('proc')

if __name__ == "__main__":
    #p = Process(target=blink.run())
    #p.start()
    app.run(host='127.0.0.1',port='5000', debug=False, use_reloader=False)
    #p.join()
    blink.run()