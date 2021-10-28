from . import db

class Beer(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50))
    rating = db.Column(db.Integer)