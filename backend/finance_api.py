import yfinance as yf

def get_stock_price(symbol):
    try:
        stock = yf.Ticker(symbol)
        current_price = stock.history(period='1m')['Close'].iloc[-1]
        historical_prices = stock.history(period='1m')
        return list(historical_prices.to_dict(orient='index').values())[0]
    except Exception as e:
        print(f"Error: {e}")
        return None
