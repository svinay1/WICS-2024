from pymongo import MongoClient
from dotenv import load_dotenv

# Import the os module
import os

# load environment variables
load_dotenv()

# Get the MongoDB URI
MONGODB_URI = os.environ.get("DATABASE_KEY")

# Create a MongoClient instance to connect to MongoDB server.
client = MongoClient()

# Get the MongoDB URI from the environment variables.
db_uri = "mongodb+srv://svinay:DBBmO7cLdzk5yKG3@cluster0.hrbvsgo.mongodb.net/?retryWrites=true&w=majority"

# Create a new MongoClient instance using the URI.
client = MongoClient(db_uri)

# Access the desired database and collection
db = client['financeData']
collection = db['stockData']

# Document to be inserted
new_document = {
    'name': 'John Doe',
    'age': 30,
    'email': 'john@example.com'
}

# Insert the document into the collection
result = collection.insert_one(new_document)

# Print the inserted document's ObjectId
print(f"Inserted document with ObjectId: {result.inserted_id}")

