<div align="center">

<img src="./docs/assets/bennett_logo.png" alt="Bennett University" width="360" />

# NETRA
## Vehicle Number Plate ANPR Detection and Multi-Camera Trajectory Tracking

[![Course](https://img.shields.io/badge/Course-Statistical%20Machine%20Learning%20(CSET211)-0B2545.svg)](./docs/REPORT.md)
[![Session](https://img.shields.io/badge/Session-2026--27-1D5FA8.svg)](./docs/REPORT.md)
[![Institution](https://img.shields.io/badge/Institution-Bennett%20University-C0392B.svg)](./docs/REPORT.md)
[![Specifications](https://img.shields.io/badge/Specs-PRD.md-28B8D8.svg)](./docs/PRD.md)
[![Report](https://img.shields.io/badge/Academic%20Report-REPORT.md-green.svg)](./docs/REPORT.md)

</div>

---

### 🏛️ Academic Project Information

- **Institution:** School of Computer Science Engineering and Technology, Bennett University (Times of India Group)
- **Course:** Statistical Machine Learning (`CSET211`), Session 2026-27
- **Project Supervisor:** **Mrs. Shivanshi Shrivastava**
- **Project Team:**
  - **Kaustubh Chowdhury** (Enrollment ID: `S25CSEU0210`)
  - **Shivaji Bhushan** (Enrollment ID: `S25CSEU0195`)
  - **Atiksh Sharma** (Enrollment ID: `S25CSEU0192`)
- **Submission Date:** 10 October 2026
- **Full Project Report:** [`docs/REPORT.md`](./docs/REPORT.md) | **PRD:** [`docs/PRD.md`](./docs/PRD.md)

---

## 🚀 System Architecture & Pipeline

```
┌─────────────────────────────────┐      ┌───────────────────────────────┐      ┌─────────────────────────────┐
│ 1. Frame Extraction & Prep      │ ───► │ 2. Vehicle Detection & Track  │ ───► │ 3. Plate Localisation       │
│    OpenCV Contrast & Resize     │      │    YOLOv8 + ByteTrack         │      │    YOLOv8 Plate Model       │
└─────────────────────────────────┘      └───────────────────────────────┘      └─────────────────────────────┘
                                                                                               │
┌─────────────────────────────────┐      ┌───────────────────────────────┐                     ▼
│ 6. Trajectory, Analytics, Alerts│ ◄─── │ 5. Cross-Camera Association   │ ◄─── ┌─────────────────────────────┐
│    FastAPI + React WebSockets   │      │    Plate, Visual & Space Cues │      │ 4. Dual OCR & Fusion        │
└─────────────────────────────────┘      └───────────────────────────────┘      │    EasyOCR + Tesseract      │
                                                                                └─────────────────────────────┘
```

1. **Frame Extraction & Preprocessing (OpenCV):** Video streams are extracted at fixed intervals, resized, contrast-normalized via CLAHE, and filtered.
2. **Vehicle Detection & Tracking (YOLOv8 + ByteTrack):** Fast single-stage YOLOv8 detector localizes all vehicles and maintains persistent track IDs across frames.
3. **Plate Localisation (YOLOv8):** Sub-pixel bounding box localization detects Indian license plate regions.
4. **Dual OCR & Fusion (EasyOCR + Tesseract):** 
   - Multi-angle, adaptive-contrast **EasyOCR ensemble** handles blur, tilt, and night scenes.
   - **Tesseract OCR** evaluates clean alphanumeric crops.
   - Outputs are fused through Bayesian **IndianSyntaxRectifier** (handles `O↔0`, `8↔B`, `I↔1`, `Z↔2`, `S↔5` ambiguities).
5. **Cross-Camera Trajectory Matching:** Spatial-temporal graph matching links sightings across discrete camera nodes without continuous GPS surveillance.
6. **Tactical Operations Dashboard:** FastAPI REST + WebSockets server with React 19 + TypeScript GIS Leaflet console.

---

## 📊 Performance Benchmarks (Test Set)

| Metric | Result | Remark |
| :--- | :--- | :--- |
| **Vehicle Detection Accuracy** | **~92%** | Measured on combined test set |
| **OCR Accuracy** | **~88%** | Multi-pass ensemble & syntax rectification |
| **Processing Time** | **~150 ms** | 6–7 frames per second per stream |
| **Dataset Scale** | **80,000+ images / 60,000+ plates** | Kaggle & Roboflow Universe combined |

---

## 🏛️ Repository Structure

```
├── backend/                  # FastAPI Python backend service
│   ├── app/
│   │   ├── api/v1/          # Endpoints: auth, cameras, detections, search, alerts, analytics, health, audit, export
│   │   ├── core/            # Security (JWT, RBAC), Config, Database session
│   │   ├── models/          # SQLAlchemy ORM models (Detections, OCRCorrections, Alerts, Watchlist, etc.)
│   │   ├── schemas/         # Pydantic v2 validation models
│   │   └── services/        # Dual OCR Fusion, Normalization, Alert engine, AI pipeline, Audit logging
│   ├── tests/               # Pytest automated test suite
│   ├── static/              # Synthetic and captured evidence frames and crops
│   ├── requirements.txt     # Python dependencies
│   └── seed_data.py         # Database seeder with realistic civic observations
├── frontend/                 # React 19 + TypeScript + Vite + Tailwind CSS SPA
│   ├── src/
│   │   ├── components/      # UI Layout, About Project Modal, Cameras, GIS Leaflet map, Detections, Alerts, Analytics
│   │   ├── pages/           # Operations, Cameras, Vehicle History, Alerts, Analytics, Audit/Health
│   │   ├── services/        # Typed API client
│   │   └── types/           # TypeScript domain definitions
│   └── package.json         # Frontend dependencies and scripts
├── ai_pipeline/              # Standalone multi-pass ANPR, super-resolution & trajectory engines
└── docs/                     # Authoritative Academic & Product Specifications
    ├── REPORT.md            # Complete Academic Project Report (Bennett University)
    ├── PRD.md               # Product Requirements Document
    ├── TRACEABILITY.md      # Requirements traceability matrix
    ├── DECISIONS.md         # Architectural Decision Records (ADRs)
    └── assets/              # Bennett University logo & pipeline architecture diagrams
```

---

## 🚀 Quick Start Guide

### 1. Backend Setup
```bash
cd backend
python -m venv --system-site-packages venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python seed_data.py
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```
- API & Interactive Docs: `http://127.0.0.1:8000/docs`

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
- Web Application: `http://localhost:5173`

### 3. Run Automated Tests
```bash
cd backend
python -m pytest -v tests/test_backend.py
```

---

## 🛡️ Core Guarantees & Privacy Restraints

- **Dual-Storage Plate OCR**: Machine-generated `raw_plate_text` is preserved immutably alongside `normalized_plate_text`.
- **Dual OCR Engine**: Combines EasyOCR and Tesseract with Bayesian syntax repair.
- **Immutable Human Revision History**: Human edits require a mandatory reason enum (`MISREAD_CHARACTER`, `PARTIAL_OBSCURATION`, etc.) and log reviewer details.
- **Epistemic Restraint on GIS**: Trajectory maps strictly render discrete camera observation stops with timestamps (*"Discrete camera observation sequence. Does not represent continuous GPS tracking."*).
- **Mandatory Alert Dismissal Logging**: Watchlist alert dismissals mandate structured operational justifications (`FALSE_POSITIVE_OCR`, `UNMATCHED_CHARACTER`, etc.).
- **Strict Privacy Scope**: No facial recognition, driver identification, DMV owner lookups, or predictive crime scoring.
