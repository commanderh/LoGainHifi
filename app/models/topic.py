from app.models import topic_images
from sqlalchemy.orm import backref, relation, relationship
from .db import db
from flask_login import UserMixin

class Topic (db.Model):
    __tablename__ = 'topics'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    title = db.Column(db.String(50), nullable=False)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())

    user = relationship("User", back_populates="topics")
    comments = relationship("User_Comment", back_populates="topic")
    category = relationship("Category", back_populates="topics")
    topic_images = relationship("Topic_Image", back_populates="topic")

    
    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_dict(),
            'title': self.title,
            'body': self.body,
            'category_id': self.category_id,
            'topic_images': {topic_image.id: topic_image.to_dict() for topic_image in self.topic_images}
        }