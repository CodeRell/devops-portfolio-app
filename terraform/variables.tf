variable "region" {
  default = "us-east-1" # Change to your preferred AWS region
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  description = "Name of the EC2 Key Pair to use"
  default     = "ec2-key" # Replace this with your key pair name (without .pem)
}


variable "allowed_ip" {
  description = "The IP allowed to connect to Jenkins"
  default     = "0.0.0.0/0" # Replace with your IP for better security
}
