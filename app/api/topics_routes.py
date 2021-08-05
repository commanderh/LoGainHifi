from flask import Blueprint, jsonify, session, request
from app.models import Topic, db
from app.forms import CreateTopic

topics_routes = Blueprint('topics', __name__)

@topics_routes.route('/', methods=['POST'])
def login():
    form = CreateTopic()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        data = request.get_json()
        topic = Topic(title=data['title'], body=data['body'], category_id=data['category_id'], user_id=data['user_id'])
        db.session.add(topic)
        db.session.commit()
        return {'topic': topic.to_dict()}
    return jsonify({'errors': form.errors})