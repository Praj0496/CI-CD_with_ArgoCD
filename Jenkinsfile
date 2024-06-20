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
                    def imageName = 'my-calculator-app:latest'
                    def dockerFile = 'Dockerfile' 

                    dockerImage = docker.build(imageName, "-f ${dockerFile} .")
                }
            }
        }

        stage('Push to Repository') {
            steps {
                script {
                    def registryUrl = 'https://registry.hub.docker.com'
                    def credentialsId = 'Docker_hub_credentials'  // Replace with actual credentials ID

                    docker.withRegistry(registryUrl, credentialsId) {
                        def customImage = docker.image(imageName)
                customImage.push()
                    }
                }
            }
        }
    }
  
}
