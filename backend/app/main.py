from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router

app = FastAPI(title="Financial Metrics API")
"""
The main FastAPI application instance for the Financial Metrics API.

Includes middleware for CORS and routes for handling financial metrics.
"""

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
"""
Add CORS middleware to allow cross-origin requests from any origin.
"""

app.include_router(router)
"""
Include the API router for handling financial metrics endpoints.
"""
