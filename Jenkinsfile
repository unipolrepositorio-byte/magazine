pipeline {
    agent {
        label '!master'
    }
    options {
        timeout(time: 8, unit: 'MINUTES')
        // Agregar una opción para reutilizar la caché de Docker
        dockerOptions('--cache-from ditmar/magazine-spa:latest')
    }
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

        stage('Build Image') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    // Pull the latest image to use as a cache
                    sh "docker pull ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:latest || true"
                    sh "docker build --cache-from ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:latest -t ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ."
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
                        sh "docker tag ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:latest"
                        sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                        sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:latest"
                    }
                }
            }
            post {
                always {
                    sh "docker rmi ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                }
            }
        }
    }
}
