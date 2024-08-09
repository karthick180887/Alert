from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form.get('data')
    return jsonify({"message": "Form submitted successfully", "data": data})

if __name__ == '__main__':
    app.run(debug=True)
