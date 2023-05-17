pipeline { 
    agent any 
    tools {nodejs "Node@16"}
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
                        bat 'yarn install'
                        bat 'yarn build'
                    }
                    dir('party-owl'){
                        bat 'npm install'
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