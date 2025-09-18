/* 
is not working because now we used github actions
*/
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
        CACHE_IMAGE = "${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:cache"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Login') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS_ID, passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                        echo "Authenticating with Docker Hub"
                        sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}"
                    }
                }
            }
        }

        stage('Prepare Cache') {
            steps {
                script {
                    sh "docker pull ${CACHE_IMAGE} || true"
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    sh "docker build --cache-from ${CACHE_IMAGE} -t ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ."
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    sh "docker tag ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH} ${CACHE_IMAGE}"
                    sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_HUB_REPO}:${env.GIT_COMMIT_HASH}"
                    sh "docker push ${CACHE_IMAGE}"
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