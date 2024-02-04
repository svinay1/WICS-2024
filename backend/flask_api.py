from flask import Flask, request, jsonify
from finance_api import get_sponsor_stock_prices_current, get_sponsor_stock_prices_over_time
from chatbot import get_output
import json
from flask_cors import CORS
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)
CORS(app)

@app.route('/current-price', methods=['GET'])
def current_stock_price():
    current_prices = get_sponsor_stock_prices_current(['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'], "1d")

    if current_prices is not None:
        return json.dumps(current_prices, indent = 4), 200
    else:
        return json.dumps({'error': f"Unable to retrieve current stock prices"}, indent = 4), 500


@app.route('/price-over-time', methods=['GET'])
def price_over_time():
    prices_over_time = get_sponsor_stock_prices_over_time(['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'])

    if prices_over_time is not None:
        return json.dumps(prices_over_time, indent = 4), 200
    else:
        return json.dumps({'error': f"Unable to retrieve current stock prices"}, indent = 4), 500

chatbot = ChatBot('MyBot')

# Training the chatbot with English language data
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')

@app.route('/get_response', methods=['GET','POST'])
def get_response():
    user_input = request.args.get('input')
    response = str(chatbot.get_response(user_input))
    return json.dumps({'response': response}, indent = 4), 200

if __name__ == '__main__':
    app.run(debug=True)