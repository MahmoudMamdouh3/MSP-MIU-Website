## Introduction

This repository is part of the work we’re doing at the **MSP Tech Club at Misr International University** to build useful systems that actually serve the needs of the club. The goal is simple: solve real problems we face — faster communication, better organization, less manual work — using clean, maintainable code.

Everything here is built with **Django**, so the backend and frontend are unified under one stack. That makes it easier for contributors to get involved, whether you’re writing APIs, building UI, or automating tasks.

If you're contributing to this repo, you're not just writing code — you're helping the club run more efficiently, and building tools that will be used by real people across events, sessions, recruitment, and more.

This project is also meant to be a learning experience. Whether you're familiar with Python or just getting started, the systems are designed to be easy to follow, practical, and extendable.

At this point, the project is intentionally **monolithic** — everything lives in one codebase. This simplifies development and makes it easier for contributors to understand the full system without jumping across multiple services or repositories.

---

## Core Systems to Be Built

This repository will eventually include several internal tools, all integrated into the same Django-based system:

- **Email Automation**  
  Send customized emails to members and applicants using templates and CSV input.

- **WhatsApp Group Automation**  
  Add users to WhatsApp groups automatically based on Excel/CSV data using automation tools.

- **Discord Automation**  
  Handle roles, messages, and channels in our Discord server via bot integrations.

- **Attendance System**  
  A system to take and verify attendance at events, designed to scale beyond 200+ attendees.

- **Certificate Generator**  
  Automatically generate digital certificates from member lists or event participation data.

- **Smart Media Tools**  
  Tools for generating name tags or content from text (e.g., prompts for social media designs).

- **Sessions & Events Scheduler**  
  A centralized place to plan and view upcoming technical and non-technical sessions.

- **Backend System (Django)**  
  REST APIs, admin logic, and automation scripts powering all features. Clean, secure, and built for maintainability.

- **Frontend (Django Templates + Tailwind CSS)**  
  Web interface for all users (public, members, board), integrated directly into the Django backend for faster iteration.

- **Database Layer**  
  Structured models using Django ORM, with support for migrations, data seeding, and flexible integrations.

- **Club Website Platform**  
  The central platform that ties all tools together — public site, member portal, event system, and internal dashboards — all under one unified system.
