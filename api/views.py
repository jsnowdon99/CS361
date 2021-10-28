from flask import Blueprint, jsonify, request
from flask.helpers import flash
from . import db
from .models import Beer

main = Blueprint('main', __name__)

@main.route('/', methods = ["GET"])
def home():
    return jsonify({"Hello":"World"})


@main.route('/mybeers', methods = ["GET", "POST"])
def beer_ratings():
    if request.method == "GET":
        beer_list = Beer.query.all()
        beers = []
        for beer in beer_list:
            beers.append({'name' : beer.name, 'rating' : beer.rating})
        return jsonify({"beers": beers})
    else:
        beer_ratings = request.get_json()
        new_beer = Beer(name=beer_ratings['name'], rating=beer_ratings['rating'])
        db.session.add(new_beer)
        db.session.commit()

        return "Done", 201