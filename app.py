from flask import Flask, jsonify, request, render_template, url_for, redirect

app = Flask(__name__)


@app.route('/')
def change():
    return redirect(url_for('login'))


@app.route('/api/user', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Perform authentication and retrieve user data

    if username and password:
        # Perform authentication logic here
        # You can check if the provided username and password are valid
        # and retrieve the user data

        # Example response data
        user_data = {
            'username': username,
            'email': 'example@example.com',
            # Add other relevant user data
        }

        return redirect(url_for('index'))

    return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/api/user', methods=['GET'])
def login_form():
    return render_template('login.html')