from flask import Flask, render_template, request, jsonify
import pickle

app = Flask(__name__)

# Model aur Vectorizer Load karein
try:
    with open("spam_model.pkl", "rb") as f:
        model = pickle.load(f)
    with open("vectorizer.pkl", "rb") as f:
        vectorizer = pickle.load(f)
except FileNotFoundError:
    print("Error: Model files not found!")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    email_text = data.get("email_text", "")

    if not email_text:
        return jsonify({"error": "Empty text"}), 400

    # Prediction Logic
    email_vector = vectorizer.transform([email_text])
    prediction = model.predict(email_vector)
    
    result = "spam" if prediction[0] == "spam" else "safe"
    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(debug=True)