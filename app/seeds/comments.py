from app.models import db, User_Comment
from lorem_text import lorem
import random


def seed_comments():


    for i in range(1, 31):
        user_id = random.randrange(1, 13)
        topic_id = random.randrange(1, 5)
        comment = User_Comment(content=lorem.sentence(), user_id=user_id, topic_id=topic_id)
        db.session.add(comment)
        db.session.commit()



def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()