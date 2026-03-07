from sqlalchemy.orm import Session
from app.models.content_model import Content
from app.schemas.content_schema import ContentCreate


def get_all_content(db: Session):
    return db.query(Content).all()


def create_content(db: Session, content: ContentCreate):
    new_content = Content(title=content.title, body=content.body)

    db.add(new_content)
    db.commit()
    db.refresh(new_content)

    return new_content


def update_content(db: Session, content_id: int, content: ContentCreate):

    db_content = db.query(Content).filter(Content.id == content_id).first()

    db_content.title = content.title
    db_content.body = content.body

    db.commit()
    db.refresh(db_content)

    return db_content


def delete_content(db: Session, content_id: int):

    db_content = db.query(Content).filter(Content.id == content_id).first()

    db.delete(db_content)
    db.commit()

    return {"message": "deleted"}