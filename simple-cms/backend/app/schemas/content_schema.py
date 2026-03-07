from pydantic import BaseModel

class ContentBase(BaseModel):
    title: str
    body: str


class ContentCreate(ContentBase):
    pass


class Content(ContentBase):
    id: int

    class Config:
        orm_mode = True