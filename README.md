# Simple Web Application with Jenkins Pipeline

## Overview
This repository contains a simple Node.js web application along with a Jenkins Pipeline configuration to demonstrate a complete CI/CD workflow. The application uses Express to serve a "Hello, World!" message and includes a test script. The included Jenkinsfile outlines stages for building, testing, and deploying the app to both staging and production environments.

## Features
- **Express-Based Web Application**: A minimal Node.js app serving a basic message.
- **Automated Build & Test Pipeline**: A Jenkinsfile that automates dependency installation, testing, and deployment.
- **Staging & Production Deployments**: Conditional pipeline stages that deploy based on the branch used.
- **Branching & PR Workflow**: Guidelines to create feature branches, open pull requests, and integrate changes.

## Prerequisites
- **Node.js**: Version 12 or later
- **npm**: Node Package Manager
- **Git**: For source control management
- **Jenkins**: Installed and configured. For details on setup, refer to the [Jenkins Documentation](https://www.jenkins.io/doc/).

## Getting Started

### 1. Clone the Repository
Clone this repository and navigate into the project directory:
```bash
git clone https://github.com/your-username/simple-webapp.git
cd simple-webapp
