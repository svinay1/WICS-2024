from flask import Flask, request, jsonify
from finance_api import get_sponsor_stock_prices_current, get_sponsor_stock_prices_over_time
from chatbot import get_output
import json
from flask_cors import CORS

from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
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

my_bot = ChatBot(
name='Barbie', 
read_only=True,
logic_adapters=['chatterbot.logic.MathematicalEvaluation',
        'chatterbot.logic.BestMatch'])

small_talk = ['hey barbie',
        'hi!',
        'how are you, barbie?',
        'what\'s your name?',
        'thanks'
        'is there anything else I can assist you with, barbie?'
        'no'
        'congratulations! you are a girl math expert now! if you have more questions or need assistance in the future, feel free to reach out. wishing you a fantastic day ahead'
        'i\'m AI Barbie. ask me a girl math question, please.']

girl_talk_1 = ['short term',
        'Are you up for the financial chic adventure? Find it from Resources. We\'ve included links to relevant stories below to add that extra glam to your analysis and decision-making.']

girl_talk_2 = ['long term',
        'Ready to dive into the stock market runway? How about we explore the latest trends in investments together by clicking on the Stocks buttons?']

girl_talk_3 = ['finance',
        'Of course! We\'re here to sprinkle a bit of financial magic into your life! What exciting goals are you dreaming of? Are you thinking short-term thrills or long-term adventures?']

list_trainer = ListTrainer(my_bot)

for item in (small_talk, girl_talk_1, girl_talk_2, girl_talk_3):
    list_trainer.train(item)

corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')

@app.route('/get_response', methods=['GET','POST'])
def get_response():  
    try:
        user_input = request.args.get('input')
        response = str(my_bot.get_response(user_input))
        return json.dumps({'response': response}, indent=4), 200
    except (KeyboardInterrupt, EOFError, SystemExit):
        return jsonify({'error': 'Error processing request.'}), 500

if __name__ == '__main__':
    app.run(debug=True)