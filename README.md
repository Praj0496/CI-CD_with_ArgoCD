# CI-CD_with_ArgoCD
CI/CD pipeline with ARgo CD deploy to K8S



Grant Jenkins user and Ubuntu user permission to docker deamon.
sudo su - 
usermod -aG docker jenkins
usermod -aG docker ubuntu
systemctl restart docker