from flask import Flask, render_template
app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')