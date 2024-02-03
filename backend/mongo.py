import pymongo

myclient = pymongo.MongoClient('mongodb://localhost:27017/')
mydb = myclient["stockData"]
another = mydb["financeData"]

test = { "name": "John", "address": "Highway 37" }

x = another.insert_one(test)