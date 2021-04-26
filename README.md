# neil-clark-blog
A blog website for Neil Clark

## Setup
Create virtual environment
`$ python3 -m venv venv`

Enter virtual environment
`$ source venv/vin/activate`

Install from requirements
`$ python3 install -r requirements.txt`

Install nodejs modules
`$ npm install`

Make sure that the correct environment variable is set for the flask app:
`$ export FLASK_APP=server.py`

If you want to autoreload the app during development set this environment variable:
`$ export FLASK_ENV=development`
