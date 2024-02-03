from flask import Flask, request
from finance_api import get_stock_price
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Route for seeing a data
@app.route('/data', methods=['GET'])
def get_time():
    print("test")
    # Returning an api for showing in  reactjs
    return json.dumps({
        'Name':"geek", 
        "Age":"22",
        "Date":"blah", 
        "programming":"python"
        }, indent = 4), 200

@app.route('/stock-history', methods=['GET'])
def stock_history():
    symbol = request.args.get('symbol', default=None, type=str)
    #start_date = request.args.get('start_date', default=None, type=str)
    #end_date = request.args.get('end_date', default=str(datetime.today().date()), type=str)

    if symbol is None:
        return json.dumps({'error': 'Invalid parameters. Please provide symbol and start_date.'}, indent = 4), 400

    historical_prices = get_stock_price(symbol)

    if historical_prices is not None:
        return json.dumps(historical_prices, indent = 4), 200
    else:
        return json.dumps({'error': f"Unable to retrieve historical stock prices for {symbol}"}, indent = 4), 500

if __name__ == '__main__':
    app.run(debug=True)