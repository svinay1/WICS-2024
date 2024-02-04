from pymongo import MongoClient
from dotenv import load_dotenv

client = MongoClient()

# Note: password blurred out due to privacy concerns
db_uri = "mongodb+srv://svinay:<password>.hrbvsgo.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(db_uri)

db = client['financeData']
collection = db['stockData']

stock_prices = {
    "BP": 34.64,
    "CVX": 152.24,
    "DKNG": 41.59,
    "HD": 357.23,
    "LMT": 425.97,
    "GS": 387.86,
    "GOOG": 143.54,
    "META": 474.99,
    "RBLX": 40.67,
    "TEAM": 217.39
}

result = collection.insert_one(stock_prices)

