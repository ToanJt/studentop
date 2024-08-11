import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
print("hello")

# Cấu hình kết nối MongoDB
app.config["MONGO_URI"] = "mongodb+srv://darkun:127621176@cluster0.evyjvx5.mongodb.net/"
mongo = PyMongo(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = mongo.db.student.find()
    result = []
    for item in data:
        item['_id'] = str(item['_id'])  # Chuyển đổi ObjectId thành chuỗi
        result.append(item)
    return jsonify(result)

@app.route('/api/data', methods=['POST'])
def add_data():
    data = request.json
    mongo.db.student.insert_one(data)
    return jsonify(message="Data added successfully"), 201

if __name__ == '__main__':
    port = os.environ.get("PORT", "5000")  # Chuyển đổi giá trị thành chuỗi
    print(f"Running on port {port}")  # In giá trị cổng ra để kiểm tra
    app.run(host='0.0.0.0', port=int(port), debug=True)
