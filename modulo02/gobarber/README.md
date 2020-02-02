# Projeto GOBARBER

## Dependencias

## Docker

`docker run --name database -e POSTGRES_PASSWORD=docker -p5432:5432 -d postgres`

## Squelize

`$ yarn sequelize migration:create --name=create-user` Create table user

`$ yarn sequelize db:migrate` add proprides of table
