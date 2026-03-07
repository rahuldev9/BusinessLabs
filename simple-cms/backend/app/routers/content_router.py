from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.crud.content_crud import (
    get_all_content,
    create_content,
    update_content,
    delete_content
)

from app.schemas.content_schema import ContentCreate

router = APIRouter(prefix="/content", tags=["Content"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_content(db: Session = Depends(get_db)):
    return get_all_content(db)


@router.post("/")
def create_new_content(content: ContentCreate, db: Session = Depends(get_db)):
    return create_content(db, content)


@router.put("/{content_id}")
def update_existing_content(
    content_id: int,
    content: ContentCreate,
    db: Session = Depends(get_db)
):
    return update_content(db, content_id, content)


@router.delete("/{content_id}")
def delete_existing_content(
    content_id: int,
    db: Session = Depends(get_db)
):
    return delete_content(db, content_id)