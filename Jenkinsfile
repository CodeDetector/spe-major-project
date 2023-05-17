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
                nodejs('Node@16'){
                    dir('server'){
                        bat 'npm run-script build'
                    }
                    dir('party-owl'){
                        bat 'npm run-script build'
                }
                }
            }
        }
        
        stage('Test'){
            steps{
                dir('party-owl'){
                    bat 'npm test'
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