from flask import Flask, request
from finance_api import get_stock_price, get_sponsor_stock_prices
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/stock-history', methods=['GET'])
def stock_history():
    #symbol = request.args.get('symbol', default=None, type=str)
    #start_date = request.args.get('start_date', default=None, type=str)
    #end_date = request.args.get('end_date', default=str(datetime.today().date()), type=str)

    #if symbol is None:
        #return json.dumps({'error': 'Invalid parameters. Please provide symbol and start_date.'}, indent = 4), 400

    #historical_prices = get_stock_price(symbol)

    current_prices = get_sponsor_stock_prices(['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'])

    if current_prices is not None:
        return json.dumps(current_prices, indent = 4), 200
    else:
        return json.dumps({'error': f"Unable to retrieve current stock prices"}, indent = 4), 500

if __name__ == '__main__':
    app.run(debug=True)