pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1' // Update this to your AWS region
        ECR_REPO_NAME = 'devops-portfolio'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'coderell', url: 'https://github.com/CodeRell/devops-portfolio-app.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("postgres-image", "postgresql/")
                    docker.build("backend-image", "backend/")
                    docker.build("frontend-image", "frontend/")
                }
            }
        }
        stage('Push to AWS ECR') {
            steps {
                script {
                    sh '''
                    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com
                    docker tag postgres-image:latest <your-account-id>.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:postgres
                    docker push 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:postgres
                    docker tag backend-image:latest 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:backend
                    docker push 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:backend
                    docker tag frontend-image:latest 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:frontend
                    docker push 340752833412.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:frontend
                    '''
                }
            }
        }
    }
}

