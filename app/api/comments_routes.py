from app.models.user_comment import User_Comment
from app.forms.edit_comment import EditComment
from app.forms.create_comment import CreateComment
from flask import Blueprint, jsonify, session, request, redirect
from app.models import Topic, db
from flask_login import login_required, current_user

comments_routes = Blueprint('comments', __name__)
@comments_routes.route('/<int:topic_id>')
def get_comments(topic_id):
    comments = User_Comment.query.filter(User_Comment.topic_id == topic_id).all()
    # print(f'THESE ARE YOUR CATEGORIES: {categories}')
    # return {'categories': [category.to_dict() for category in categories]}
    return {comment.id: comment.to_dict() for comment in comments}
    # return jsonify([category.to_dict() for category in categories])

@comments_routes.route('/', methods=['POST'])
@login_required
def create_comment():
    form = CreateComment()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        data = request.get_json();
        comment = User_Comment(user_id=data['user_id'], content=data['content'], topic_id=data['topic_id'])
        db.session.add(comment)
        db.session.commit()
        # return {'topic': topic.to_dict()}
        return comment.to_dict()
    return jsonify({'errors': form.errors})

@comments_routes.route('/<int:comment_id>', methods=["PUT"])
@login_required
def edit_comment(comment_id):
    comment = User_Comment.query.get(comment_id)
    if comment.user_id != current_user.id:
        return comment.to_dict()
    form = EditComment()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment.content = form.content.data

        db.session.commit()
        return comment.to_dict()
    return jsonify({'errors': form.errors})


@comments_routes.route('/<int:comment_id>', methods=["DELETE"])
@login_required
def delete_comment(comment_id):
    comment = User_Comment.query.get(comment_id)
    db.session.delete(comment) 
    db.session.commit()
    return comment.to_dict()
