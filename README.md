# Delivery Serverless AWS
El objetivo de este proyecto es probar AWS Lambda. 

## Requisitos 

* Serverless Framework 

```
sudo npm install -g serverless
```

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

## Issues

Ver logs con serverless framework
```
serverless logs -f makeOrder -t
```
