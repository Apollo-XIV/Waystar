# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-north-1"
}

variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}