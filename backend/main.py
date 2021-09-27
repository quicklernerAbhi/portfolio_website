from flask import Flask
from flask_cors import CORS

app = Flask(_name_)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "Hello!"