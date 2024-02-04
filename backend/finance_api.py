import yfinance as yf

def get_stock_price(symbol, period):
    try:
        stock = yf.Ticker(symbol)
        current_price = stock.history(period=period)['Close'].iloc[-1]
        #historical_prices = stock.history(period='1m')
        return current_price
    except Exception as e:
        print(f"Error: {e}")
        return None
    
def get_stock_price_over_time(symbol):
    try:
        stock_data_unrounded = yf.download(symbol, start='2024-01-04', end='2024-02-04')['Close'].tolist()
        rounded_list = []
        idx = 0
        for data in stock_data_unrounded:
            rounded_list.append((idx, round(data, 2)))
            idx += 1
        return rounded_list
    
    except Exception as e:
        print(f"Error: {e}")
        return None
    
def get_sponsor_stock_prices_current(symbols, period):
    output = {}
    for symbol in symbols:
        output[symbol] = round(get_stock_price(symbol, period), 2)

    return output

def get_sponsor_stock_prices_over_time(symbols):
    output = {}
    for idx in range(len(symbols)):
        output[symbols[idx]] = get_stock_price_over_time(symbols[idx])

    return output

print(list(range(1, 31)))
