pipeline {
    agent any
  
    triggers {
        pollSCM('H/5 * * * *')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/2024tm93116-hariharan/sem2-devops.git'
                    ]]
                ])
                echo "Checked out branch: main"
            }
        }
        
        stage('Build') {
            steps {
                echo "Building the application..."
            }
        }
        
        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
        stage('Deploy') {
            steps {
                script {
                    if ("${env.BRANCH_NAME}" == "stg") {
                        echo "Deploying to Staging Environment..."
                        sh 'docker rm -f staging || true'
                        sh 'docker run -d --name staging -p 8081:80 myapp:staging'
                    } else if ("${env.BRANCH_NAME}" == "main") {
                        echo "Deploying to Production Environment..."
                        sh 'docker rm -f production || true'
                        sh 'docker run -d --name production -p 8082:80 myapp:prod'
                    } else {
                        echo "Non-deployment branch. Skipping deployment stage."
                    }
                }
            }
        }
    }
    post {
        success {
            echo "Pipeline executed successfully."
        }
        failure {
            echo "Pipeline failed. Please check the logs for errors."
        }
    }
}