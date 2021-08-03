from sqlalchemy.orm import backref, relation, relationship
from .db import db
from flask_login import UserMixin

class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    # EAGER LOADING
    topics = relationship("Topic", back_populates="category")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'topics': {topic.id: topic.to_dict() for topic in self.topics}
        }