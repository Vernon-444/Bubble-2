from flask import Flask

app = Flask(__name__)

@app.route('/Bubble-2', strict_slashes=False)
def testingFlask():
    return render_template('bubbles.html');
    
if __name__ == "__main__":
    app.run('0.0.0.0', port=5000)