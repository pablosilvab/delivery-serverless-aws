# Delivery Serverless AWS
El objetivo de este proyecto es probar AWS Lambda. 

## Herramientas utilizadas 

* Serverless Framework 
* AWS Lambda
* API Gateway
* SQS
* Dynamo DB
* CloudFormation
* AWS SDK

## Deploy 
Esta función fue construida con Serverless Framework. 

1. Creación de la función 

```
serverless create --template aws-nodejs --name delivery-serverless-aws
```

2. Iniciar npm

```
npm init -y 
```

3. Asegurarse que las credenciales de AWS estén configuradas. 

```
serverless config credentials --provider aws --key <access-key> --secret <secres-access>
```

4. Desplegar función

```
serverless deploy
```

### Ejemplo 

Request: POST

```
{
	"name": "Walter Hartwell White",
	"address": "308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104",
	"pizzas": ["margarita", "napolitana"]
}
```

## Issues

Ver logs con serverless framework
```
serverless logs -f makeOrder -t
```

### Instalaciones 


```
sudo npm install -g serverless
```

## Otros

Proyecto relacionado con OpenFaaS, RabbitMQ y MySQL: [Kadev](https://gitlab.com/kadev-psb/send-order)
