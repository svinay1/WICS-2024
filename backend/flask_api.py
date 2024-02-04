from flask import Flask, request
from finance_api import get_sponsor_stock_prices_current, get_sponsor_stock_prices_over_time
import json
from flask_cors import CORS

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
    #symbol = request.args.get('symbol', default=None, type=str)
    #start_date = request.args.get('start_date', default=None, type=str)
    #end_date = request.args.get('end_date', default=str(datetime.today().date()), type=str)

    prices_over_time = get_sponsor_stock_prices_over_time(['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'])

    if prices_over_time is not None:
        return json.dumps(prices_over_time, indent = 4), 200
    else:
        return json.dumps({'error': f"Unable to retrieve current stock prices"}, indent = 4), 500

if __name__ == '__main__':
    app.run(debug=True)