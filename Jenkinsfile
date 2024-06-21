pipeline {
    
    agent any 
    
    environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        
        stage('Checkout'){
            steps {
                git branch: 'main', credentialsId: 'git_key', url: 'https://github.com/Praj0496/CI-CD_with_ArgoCD.git'
            }
        }

        stage('Build Docker'){
            steps{
                script{
                    sh '''
                    echo 'Buid Docker Image'
                    docker build -t praj0404/argo_cd:${BUILD_NUMBER} .
                    '''
                }
            }
        }

        stage('Push the artifacts'){
            steps{
                script{
                    sh '''
                    echo 'Push to Repo'
                    docker push praj0404/argo_cd:${BUILD_NUMBER}
                    '''
                }
            }
        }
        
        stage('Checkout K8S manifest Git'){
            steps {
                git branch: 'main', credentialsId: 'git_key', url: 'https://github.com/Praj0496/Argo_project_K8S_manifest.git'
            }
        }
        
        stage('Update K8S manifest & push to Repo'){
            steps {
                script{
                    withCredentials([usernamePassword(credentialsId: 'git_key', passwordVariable: 'git_keyPassword', usernameVariable: 'git_keyUsername')]) {
                        sh '''
                        cat Deployment.yaml
                        sed -i '' "s/1/${BUILD_NUMBER}/g" Deployment.yaml
                        cat Deployment.yaml
                        git add Deployment.yaml
                        git commit -m 'Updated the deployment yaml file | Jenkins Pipeline'
                        git remote -v
                        git push https://github.com/Praj0496/Argo_project_K8S_manifest.git HEAD:main
                        '''                        
                    }
                }
            }
        }
    }
}
