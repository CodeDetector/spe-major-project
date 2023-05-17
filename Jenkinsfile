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
                    echo "Yarn installed"
                }
                dir('server'){
                    bat 'yarn run build'
                }
                dir('party-owl'){
                    bat 'yarn run build'
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