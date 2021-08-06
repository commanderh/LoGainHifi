from app.models import db, Topic
from lorem_text import lorem


def seed_topics():
    topic1 = Topic(title="Tidal or Apple Music Lossless", body=lorem.paragraph(), user_id=1, category_id=1)
    topic2 = Topic(title="Focal Clears", body=lorem.paragraph(), user_id=1, category_id=2)
    topic3 = Topic(title="What are some good headphones under $300", body=lorem.paragraph(), user_id=1, category_id=2)
    topic4 = Topic(title="thoughts on Schiit DAC/AMP", body=lorem.paragraph(), user_id=1, category_id=3)
    topic5 = Topic(title="planars or dynamic drivers", body=lorem.paragraph(), user_id=1, category_id=2)

    db.session.add(topic1)
    db.session.add(topic2)
    db.session.add(topic3)
    db.session.add(topic4)
    db.session.add(topic5)

    db.session.commit()


def undo_topics():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()