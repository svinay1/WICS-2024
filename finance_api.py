import yfinance as yf

def get_stock_price(symbol):
    try:
        stock = yf.Ticker(symbol)
        current_price = stock.history(period='1d')['Close'].iloc[-1]
        return current_price
    except Exception as e:
        print(f"Error: {e}")
        return None
    
print(get_stock_price("MSFT"))
