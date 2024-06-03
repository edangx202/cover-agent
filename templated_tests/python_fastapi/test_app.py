import pytest
from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_root():
    """
    Test the root endpoint to ensure it returns the correct welcome message.
    """
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the FastAPI application!"}

