pipeline {
    agent {
        label '!master'
    }
    options {
        timeout(time: 8, unit: 'MINUTES')
    }
    environment {
        DOCKER_HUB_USERNAME = 'ditmar'
        DOCKER_HUB_REPO = 'magazine-spa'
        DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials'
        // Añadir una variable para la caché
        CACHE_IMAGE = "${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:cache"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Cache') {
            steps {
                script {
                    // Intentar hacer pull de la imagen de caché, si falla, no afecta el pipeline
                    sh "docker pull ${CACHE_IMAGE} || true"
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    // Construir usando la imagen de caché
                    sh "docker build --cache-from ${CACHE_IMAGE} -t ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ."
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
                        sh "docker tag ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ${CACHE_IMAGE}"
                        sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                        sh "docker push ${CACHE_IMAGE}"
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