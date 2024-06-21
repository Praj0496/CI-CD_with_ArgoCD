# CI-CD_with_ArgoCD
CI/CD pipeline with ARgo CD deploy to K8S



Grant Jenkins user and Ubuntu user permission to docker deamon.
sudo su - 
usermod -aG docker jenkins
usermod -aG docker ubuntu
systemctl restart docker


K8S Manifest file repo: https://github.com/Praj0496/Argo_project_K8S_manifest.git
