pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'git_key', url: 'https://github.com/Praj0496/CI-CD_with_ArgoCD.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = 'my-calculator-app'
                    //def dockerTag = "${env.BUILD_NUMBER}"
                    def dockerFile = 'Dockerfile'

                    dockerImage = docker.build(imageName, "-f ${dockerFile} .")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    def dockerHubRepo = 'praj0404/my-calculator-app'
                    def dockerTag = "${env.BUILD_NUMBER}"
                    sh "docker login -u praj0404 -p praj0505doc"
                    sh "docker tag ${imageName}:${dockerTag} ${dockerHubRepo}:${dockerTag}"
                    sh "docker push ${dockerHubRepo}:${dockerTag}"
                    }
                }
            }
        stage('Push to Git Repository') {
            steps {
                script {
                    def gitRepoUrl = 'https://github.com/Praj0496/CI-CD_with_ArgoCD.git'

                    sh "git config user.email 'jenkins@example.com'"
                    sh "git config user.name 'Jenkins'"
                    sh "git add ."
                    sh "git commit -m 'Add Docker image'"
                    sh "git push ${gitRepoUrl}"
                }
            }
        }
    }
}