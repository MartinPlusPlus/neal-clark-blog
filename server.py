from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
	return render_template("index.html")

@app.route('/docs')
def docs():
	return render_template("docs.html")

@app.route('/mail')
def mail():
	return render_template("mail.html")
