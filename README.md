# Delivery Serverless AWS
El objetivo de este proyecto es probar AWS Lambda. 

## Herramientas utilizadas 

* Serverless Framework 
* AWS Lambda
* API Gateway
* Simple Queue Service SQS
* Dynamo DB
* CloudFormation
* AWS SDK

## Requerimientos 

* Tener npm instalado.
* Tener serverless instalado.

```
sudo npm install -g serverless
```

## Deploy 
Esta función fue construida con Serverless Framework, que es utilizado para organizar funciones y recursos, ya que provee una estructura clara y adopta el paradigma de IaaS.

1. Creación de la función. Pueder usar la palabra `serverless` o simplemente `sls`. 

```
serverless create --template aws-nodejs --name delivery-serverless-aws
```

2. Iniciar npm

```
npm init -y 
```

3. Asegurarse que las credenciales de AWS estén configuradas. 

```
serverless config credentials --provider aws --key <access-key> --secret <secret-access>
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

### Eliminar proyecto 

Para limpiar cuenta de AWS se debe ejecutar: 

```
sls remove
```

## Issues

Ver logs con serverless framework
```
serverless logs -f makeOrder -t
```

* Es importante asegurarte que tu archivo yml tenga la misma región de localización que cuenta. 


## Otros

Desarrollo con el mismo funcionamiento, pero con otras herramientas: OpenFaaS, RabbitMQ y MySQL -> [Kadev](https://gitlab.com/kadev-psb/send-order) 🚚🚚🚚
