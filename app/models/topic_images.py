from sqlalchemy.orm import backref, relation, relationship
from .db import db
from flask_login import UserMixin

class Topic_Image(db.Model):
    __tablename__ = "topic_images"

    id = db.Column(db.Integer, primary_key=True)
    topic_id = db.Column(db.Integer, db.ForeignKey("topics.id"))
    image_url = db.Column(db.String(20000))

    topic = relationship("Topic", back_populates="topic_images")