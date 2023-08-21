terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 4.16"

        }
    }
    required_version = ">= 1.2.0"
}

provider "aws" {
    region = "eu-north-1"
    access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

resource "aws_instance" "app_server" {
    ami = "ami-0989fb15ce71ba39e"
    instance_type = "t3.micro"

    tags = {
        Name = "Test"
    }
}