import requests

def get_exchange_rates():
    r = requests.get('https://api.coinbase.com/v2/exchange-rates')
    return r.text



def get_spot_price(coin, base_currency):
    response = requests.get('https://api.coinbase.com/v2/prices/{}-{}/spot'.format(coin, base_currency))
    return response.text

def get_historical_data(coin):
    # [timestamp, price_low, price_high, price_open, price_close]
    response = requests.get("https://api.exchange.coinbase.com/products/{}/candles".format(coin))
    return response.text

print(get_historical_data('BTC-USD'))