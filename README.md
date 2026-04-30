# To-Do Docker Webapp
### Dockerized To-Do Web Application with CI/CD & Kubernetes

A simple To-Do web application built with HTML, CSS, and JavaScript, containerized using Docker, automated with GitHub Actions CI/CD, and deployed on Kubernetes.

---
## Project Overview

This project demonstrates an end-to-end DevOps workflow:

- Build a frontend To-Do application
- Containerize with Docker
- Automate Docker image build and push using GitHub Actions
- Deploy on Kubernetes
- Practice scaling, self-healing, and rolling updates
---

## Tech Stack

- HTML
- CSS
- JavaScript
- Docker
- GitHub Actions
- Kubernetes
- Minikube

---
## Project Architecture

User
 ↓
Kubernetes Service
 ↓
Deployment
 ↓
Pods (Replicas)
 ↓
Docker Container
 ↓
To-Do App

##  📁 File structure
```
app/
├─ app.js         # your JavaScript
├─ index.html     # main HTML page
├─ styles.css     # styling
├─ Dockerfile     # container build instructions
├─ deployment.yml
├─ service.yml
└─ README.md      # this filefolder.
└── .github/
    └── workflows/
        └── docker.yml

```
## Prerequisites

- Git (optional, if cloning)

- Docker (to build and run the container)Or a browser to open index.html for local testing

### 📥 Clone This Repository
To clone this portfolio on your local system, run:
```
git clone https://github.com/aakansha113/ToDo-Docker-Webappo.git
```
---

## ⚙️ CI/CD Pipeline (GitHub Actions)

This project uses GitHub Actions to automate Docker workflows.

### 🔄 Workflow Steps:

1. Code is pushed to the `main` branch  
2. GitHub Actions workflow is triggered  
3. Docker image is built  
4. Image is pushed to Docker Hub  

### 📄 Workflow File
.github/workflows/docker.yml

### 🔐 Required Secrets

Add in **GitHub → Settings → Secrets → Actions**:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

---

## 📦 Docker Image
aakansha113/todo-app:v1

Available on Docker Hub.

---

## 🐳 Run Using Docker

### Pull image
docker pull aakansha113/todo-app:latest

### Run container
docker run --name simple-frontend -d -p 8080:80 aakansha113/todo-app:latest


### Open in browser
http://localhost:8080

## Kubernetes Deployment

### Apply deployment
```bash
kubectl apply -f deployment.yaml
```

### Apply service
```bash
kubectl apply -f service.yaml
```

### Access application
```bash
minikube service todo-service
```

---

## Kubernetes Concepts Practiced

### Scaling replicas
```bash
kubectl scale deployment todo-app --replicas=3
```

### Self-healing
```bash
kubectl delete pod <pod-name>
```
### Rolling updates
```bash
kubectl rollout restart deployment todo-app
```

### Check rollout status
```bash
kubectl rollout status deployment todo-app
```

---
## Application UI
## Webpage-
<p align="center">
  <img src="src/TODOlist webpage.png" width="700"/>
</p>

## Webpage with ToDo List-

<p align="center">
  <img src="src/list of the todolist.png" width="700"/>
</p>

## Webpage of Docker Hub push by using Github Actions-

<p align="center">
  <img src="src/dockerhub.png" width="700"/>
</p>

## Webpage deployed using K8S-

<p align="center">
  <img src="src/website-live.png" width="700"/>
</p>

## Live logs of the App Webpage-
<p align="center">
  <img src="src/.png" width="700"/>
</p>

### View container logs
```
docker logs -f simple-frontend
```
### Stop the container
```
docker stop simple-frontend
```
### Remove the container
```
docker rm simple-frontend
```
### Remove the image (if needed)
```
docker rmi simple-frontend-app:latest
```
# Troubleshooting — common issues

### 1-Container exits immediately

Check logs: 
```
docker logs <container-name>
```
Common causes:

1-Dockerfile CMD or ENTRYPOINT finishes immediately (no long-lived server). For static sites, ensure the image runs a server process (nginx, http-server, or similar).

2-Wrong working directory or missing files during build — verify Dockerfile copies all files.

3-Quick check: run container interactively to inspect:
```
docker run --rm -it simple-frontend-app:latest sh
```
4-Then look at file contents inside container.

### 2-Page not loading on localhost:8080

1-Confirm container is running: 
```
docker ps
```
2-Confirm port mapping: 
```
docker ps shows 0.0.0.0:8080->80/tcp
```
3-If using a VM or WSL, ensure Docker Host network is reachable.

### ⭐ Show Your Support
#### If you like this portfolio, feel free to ⭐ star the repo!



















