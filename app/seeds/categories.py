from app.models import db, Category

def seed_categories():
    music_talk = Category(name="Music Talk")
    headphones = Category(name="Headphones")
    equipment_and_electronics = Category(name="Equipment & Electronics")
    speakers_and_subwoofers = Category(name="Speakers & Subwoofers")
    iem = Category(name="IEMs")
    vintage_or_vinyl = Category(name="Vintage or Vinyl")
    off_topic = Category(name="Off-Topic")

    db.session.add(music_talk)
    db.session.add(headphones)
    db.session.add(equipment_and_electronics)
    db.session.add(speakers_and_subwoofers)
    db.session.add(iem)
    db.session.add(vintage_or_vinyl)
    db.session.add(off_topic)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()