pipeline { 
    agent any 

    stages{
        stage('Pull Git'){
            steps{
                git 'https://github.com/CodeDetector/spe-major-project.git'
            }
        }

        stage('Build frontend'){
            steps{
                (nodejs('Node@16')){
                    echo("Yan installed")
                }
                dir('server'){
                    bat 'yarn start'
                }
                dir('party-owl'){
                    bat 'yarn start'
                }
            }
        }
        stage('Build frontend'){
            steps{
                (){
                    bat "npm install -g yarn"
                    bat 'yarn start'
                }
            }
        }
        stage('Test'){
            steps{
                dir('party-owl'){
                    bat 'yarn test'
                }
            }
        }
        stage('Docker Build') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Docker Deploy') {
            steps{
                bat 'docker-compose up'
            }
        }
    }
}