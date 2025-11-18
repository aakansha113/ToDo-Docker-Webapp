# Below is a ready-to-use README.md you can drop into your app/ Simple Frontend App.It describes the project, explains each file, and gives clear, step-by-step instructions for running locally and with Docker

A tiny static frontend app (HTML, CSS, JS) with a Dockerfile so you can build and run it inside a container.

# Contents / File structure
app/
├─ app.js         # your JavaScript
├─ index.html     # main HTML page
├─ styles.css     # styling
├─ Dockerfile     # container build instructions
└─ README.md      # this fileolder. 

## Prerequisites

- Git (optional, if cloning)

- Docker (to build and run the container)Or a browser to open index.html for local testing

## Build & run with Docker — step by step

These commands assume your terminal's current directory is app/ (same folder as the Dockerfile).

# Build the image

$docker build -t simple-frontend-app:latest .

# Run the container (map port 8080 → container port 80)

$docker run --name simple-frontend -d -p 8080:80 simple-frontend-app:latest

# After running, open http://localhost:8080 in your browser.

# View container logs

$docker logs -f simple-frontend

# Stop the container

$docker stop simple-frontend

# Remove the container

$docker rm simple-frontend

# Remove the image (if needed)

$docker rmi simple-frontend-app:latest

## Troubleshooting — common issues

# 1-Container exits immediately

Check logs: docker logs <container-name>

Common causes:

1-Dockerfile CMD or ENTRYPOINT finishes immediately (no long-lived server). For static sites, ensure the image runs a server process (nginx, http-server, or similar).

2-Wrong working directory or missing files during build — verify Dockerfile copies all files.

3-Quick check: run container interactively to inspect:

$docker run --rm -it simple-frontend-app:latest sh

4-Then look at file contents inside container.

# 2-Page not loading on localhost:8080

1-Confirm container is running: docker ps

2-Confirm port mapping: docker ps shows 0.0.0.0:8080->80/tcp

3-If using a VM or WSL, ensure Docker Host network is reachable.

