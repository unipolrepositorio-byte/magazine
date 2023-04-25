pipeline {
    agent {
        label '!master'
    }

    environment {
        DOCKER_HUB_USERNAME = 'ditmar'
        DOCKER_HUB_REPO = 'magazine-spa'
        DOCKER_HUB_CREDENTIALS_ID = 'my-docker-hub-creds'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    sh "docker build -t ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ."
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS_ID, passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                        echo "Authenticating with Docker Hub using user: $DOCKER_HUB_USERNAME"
                        sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}"
                        echo "Authentication successful"
                        sh "docker tag ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                        sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                    }
                }
            }
        }
    }
}