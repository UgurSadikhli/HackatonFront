# Backend API (Flask)

This folder contains a minimal Flask backend used for development and demo purposes.

Endpoints:
- GET /api/data  -> Returns dataset (list of records)
- GET /api/filter/<column>/<value> -> Returns filtered dataset

Setup (Windows PowerShell):
```powershell
cd backend
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Open http://localhost:5000/api/data in your browser to view sample JSON.
