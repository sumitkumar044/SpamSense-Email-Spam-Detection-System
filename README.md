📧 Spam Detection Using ANN (MLPClassifier)

This project implements an Email/SMS Spam Detection system using an Artificial Neural Network (ANN) built with MLPClassifier from scikit-learn.
The model classifies messages as Spam or Ham (Not Spam) with an accuracy of approximately 98%.

🎯 Objective

Detect spam messages using machine learning

Apply text preprocessing & feature extraction

Train an ANN model (MLPClassifier)

Achieve high classification accuracy

🧠 Machine Learning Approach

Algorithm: Artificial Neural Network (ANN)

Model: MLPClassifier

Library: scikit-learn

Type: Supervised Learning (Binary Classification)

🛠️ Technologies Used

Python

scikit-learn

NumPy

Pandas

NLTK

Matplotlib / Seaborn

📂 Dataset

Type: SMS / Email text dataset

Classes:

Spam

Ham

Features: Message text

Target: Spam or Not Spam

⚙️ Workflow

Data Loading

Text Preprocessing

Lowercasing

Removing punctuation & stopwords

Tokenization

Feature Extraction

TF-IDF Vectorization

Model Training

MLPClassifier (ANN)

Model Evaluation

Accuracy

Confusion Matrix

Classification Report

🧪 Model Configuration
MLPClassifier(hidden_layer_sizes=(100,100),
                        max_iter=1000,
                        activation='tanh',
                        solver='sgd',
                        learning_rate_init=0.001,
                        learning_rate='constant',
                        random_state=42,)

📊 Results

Training Accuracy: ~99%

Testing Accuracy: ~98%

Low False Positive Rate

High Precision & Recall
confusion_matrix: [[962   3][ 21 129]]
classification_report:               precision    recall  f1-score   support

           0       0.98      1.00      0.99       965
           1       0.98      0.86      0.91       150

    accuracy                           0.98      1115
   macro avg       0.98      0.93      0.95      1115
weighted avg       0.98      0.98      0.98      1115

precision score: 0.9784533149974352
recall score: 0.97847533632287
f1_score: 0.9778878255695699

📈 Performance Metrics

Accuracy

Precision

Recall

F1-Score

▶️ How to Run the Project
pip install numpy pandas scikit-learn nltk matplotlib seaborn

python spam_detection.py

📌 Key Features

High accuracy spam classification

Efficient text preprocessing

ANN-based learning model

Scalable and production-ready

🔮 Future Improvements

Use Deep Learning (LSTM / BERT)

Deploy using Flask or FastAPI

Real-time spam detection API

Improve dataset size and diversity

👨‍💻 Author

Sumit Kumar
BCA Student | MERN Stack & ML Enthusiast
