pipeline {
    agent any
    
    // Optionally, set triggers if you want Jenkins to poll or respond to push events
    // For best results, set up a GitHub webhook pointing to your Jenkins URL:
    //    https://b7a0-49-207-48-106.ngrok-free.app/github-webhook/
    // triggers {
    //     pollSCM('H/5 * * * *')
    // }

    stages {
        stage('Checkout') {
            steps {
                // If you created a "Pipeline from SCM" job, Jenkins will auto-checkout. 
                // Otherwise, explicitly checkout:
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/' + env.BRANCH_NAME]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/2024tm93116-hariharan/sem2-devops.git'
                        // If private, add credentialsId here
                    ]]
                ])
                
                echo "Checked out branch: ${env.BRANCH_NAME}"
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // Simulate a build process
                    echo "Building the application (placeholder)..."
                    // For real projects, you might compile or build artifacts here.
                    // Or you can build your Docker images here if they are not pre-built:
                    // sh "docker build -t myapp:${env.BRANCH_NAME} ."
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    echo "Running tests (placeholder)..."
                    // e.g.: sh "npm test" or "mvn test"
                    // If using Docker for testing:
                    // sh "docker run --rm myapp:${env.BRANCH_NAME} npm test"
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'stg'
            }
            steps {
                script {
                    echo "Deploying to Staging Environment..."
                    // Remove any existing container for staging
                    sh "docker rm -f staging || true"
                    
                    // Run your existing staging image
                    // Ensure 'myapp:staging' is already built/pulled on this machine
                    sh """
                        docker run -d --name staging -p 8081:80 myapp:staging
                    """
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Deploying to Production Environment..."
                    // Remove any existing container for production
                    sh "docker rm -f production || true"
                    
                    // Run your existing prod image
                    // Ensure 'myapp:prod' is already built/pulled on this machine
                    sh """
                        docker run -d --name production -p 8082:80 myapp:prod
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo "Pipeline completed successfully for branch: ${env.BRANCH_NAME}"
        }
        failure {
            echo "Pipeline failed. Please check Jenkins logs."
        }
    }
}
