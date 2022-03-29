from flask import Flask
from coins import get_exchange_rates
from twitter import search_twitter

app = Flask(__name__)

@app.route('/')
def hello_world():
    return get_exchange_rates

@app.route('/sentiment')
def get_sentiment(term):
    sentiment = search_twitter(term)
    return 

       
