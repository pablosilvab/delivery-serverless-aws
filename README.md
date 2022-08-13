[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

# Delivery Serverless AWS

This project is an API for delivery built with Serverless framework in AWS infrastructure.

## Tools

[![Node][node.js]][node-url]
![aws]
![amazon-db]

* Serverless Framework
* AWS Lambda
* API Gateway
* Simple Queue Service SQS
* CloudFormation
* AWS SDK

## Requirements

* Node.js
* npm
* Serverless framework

```
sudo npm install -g serverless
```

## Deployment


1. Make sure the credentials is set. 

```
serverless config credentials --provider aws --key <access-key> --secret <secret-access>
```

2. Deploy function

```
serverless deploy
```

### Example

Request: POST

```
{
	"name": "Walter Hartwell White",
	"address": "308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104",
	"pizzas": ["margarita", "napolitana"]
}
```

### Remove project

For clean AWS account you should run:

```
sls remove
```

## Issues

Watch logs in serverless framework

```
serverless logs -f makeOrder -t
```

- It's important to make sure the yml file has the same localization region as your account.

## Other

* Same application with open source tools: (OpenFaaS, RabbitMQ y MySQL -> [Kadev](https://gitlab.com/kadev-psb/send-order)) 🚚🚚🚚


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/pablosilvab/delivery-serverless-aws.svg?style=for-the-badge
[contributors-url]: https://github.com/pablosilvab/delivery-serverless-aws/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pablosilvab/delivery-serverless-aws.svg?style=for-the-badge
[forks-url]: https://github.com/pablosilvab/delivery-serverless-aws/network/members
[stars-shield]: https://img.shields.io/github/stars/pablosilvab/delivery-serverless-aws.svg?style=for-the-badge
[stars-url]: https://github.com/pablosilvab/delivery-serverless-aws/stargazers
[issues-shield]: https://img.shields.io/github/issues/pablosilvab/delivery-serverless-aws.svg?style=for-the-badge
[issues-url]: https://github.com/pablosilvab/delivery-serverless-aws/issues
[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/es/

[aws]: https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white
[amazon-db]: https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white


