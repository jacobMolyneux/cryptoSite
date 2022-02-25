import requests
import tweepy

api_key = '8jw9tY4SvQhR9HN5TPRi8RBRp'
api_secret_key = 'XDNj5HICwxBffwLolOukA4OZTd7TnKOzfiFDUAOfhueqmS2BV6'
access_token = '879601750830972928-veUdrWTHeYLd5uokkyPjZMv87jgHdSg'
access_token_secret = '9ZNYMfgY9OFQZpQBvUi2ml8nAD6rr7BZiSJh0Dip0Fz3I'

auth = tweepy.OAuth1UserHandler(api_key, api_secret_key, access_token, access_token_secret)

api = tweepy.API(auth)

# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)

response = api.search_tweets('bitcoin', lang ='en', count = 10)
for i in response:
    print(i.text)

