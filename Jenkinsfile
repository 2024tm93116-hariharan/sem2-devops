pipeline {
    agent any  // Uses any available agent

    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                // For example, compile your code, or run a build tool such as Maven/Gradle:
                // bat 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
                // Run tests here. For example:
                // bat 'mvn test'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging Environment..."
                // Commands for deployment to a staging server (e.g., copying files, restarting services, or triggering Docker deployment)
                // bat 'deploy_staging.bat'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying to Production Environment..."
                // Commands for production deployment. This can include additional approvals:
                // input message: "Approve Production Deployment?", ok: "Deploy"
                // bat 'deploy_production.bat'
            }
        }
    }
    post {
        success {
            echo "Pipeline completed successfully."
        }
        failure {
            echo "Pipeline encountered an error. Investigate the issue."
            // Optionally: Add notifications (e.g., email, Slack)
        }
    }
}
