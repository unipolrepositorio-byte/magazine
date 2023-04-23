pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'ditmar'
        DOCKER_HUB_REPO = 'magazine-spa'
        DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    def app = docker.build("${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS_ID) {
                        def app = docker.image("${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}")
                        app.push()
                    }
                }
            }
        }
    }
}