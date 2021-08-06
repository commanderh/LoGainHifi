from flask import Blueprint, json, jsonify
from app.models import Category

categories_routes = Blueprint('categories', __name__)

@categories_routes.route('/')
def get_categories():
    categories = Category.query.all()
    # print(f'THESE ARE YOUR CATEGORIES: {categories}')
    # return {'categories': [category.to_dict() for category in categories]}
    return {category.id: category.to_dict() for category in categories}
    # return jsonify([category.to_dict() for category in categories])
