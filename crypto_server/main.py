from flask import Flask
from coins import get_exchange_rates

app = Flask(__name__)

@app.route('/')
def hello_world():
    return get_exchange_rates