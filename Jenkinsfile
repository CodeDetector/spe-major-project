pipeline { 
    agent any 

    stages{
        stage('Pull Git'){
            steps{
                git 'https://github.com/CodeDetector/spe-major-project.git'
            }
        }

        stage('Build'){
            steps{
                dir('server'){
                    bat 'C:\Program Files (x86)\Yarn\bin start'
                }
                dir('party-owl'){
                    bat 'C:\Program Files (x86)\Yarn\bin start'
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