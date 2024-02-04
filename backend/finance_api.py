import yfinance as yf

def get_stock_price(symbol):
    try:
        stock = yf.Ticker(symbol)
        current_price = stock.history(period='1m')['Close'].iloc[-1]
        #historical_prices = stock.history(period='1m')
        return current_price
    except Exception as e:
        print(f"Error: {e}")
        return None
    
def get_sponsor_stock_prices(symbols):
    output = {}
    for symbol in symbols:
        output[symbol] = round(get_stock_price(symbol), 2)

    return output
