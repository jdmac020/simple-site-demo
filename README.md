# sw-template
A template for sites for SWers

## Setup

Install nodejs `choco install nodejs.install` or other option

Run `npm install` from `/.sw-template`

## Run

Run `npm run dev` to run the site locally

## Create Azure Infrastructure

Make sure Terraform is installed `choco install terraform` or other option

Make sure Azure CLI Tools is installed `choco install azure-cli`

### Set Up with Azure Subscription

`az login` to get authenticated and pull available subscriptions

`az account set --subscription "<desired-subscription-id>"` to set the subscription for this project

`az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<SUBSCRIPTION_ID>"` to create
a service principal for Terraform to work with

Stash the service principal output info into environment variables:
```
$Env:ARM_CLIENT_ID = "<APPID_VALUE>"
$Env:ARM_CLIENT_SECRET = "<PASSWORD_VALUE>"
$Env:ARM_SUBSCRIPTION_ID = "<SUBSCRIPTION_ID>"
$Env:ARM_TENANT_ID = "<TENANT_VALUE>"
```

### Update Template Files

In `./terraform/main.tf` update the `client_project_name` variable in with the client name/code
and the `location` variable to the desired resource location.

In the terraform directory, run `terraform fmt` then `terraform validate`. Resolve any issues.

When all is validated, run `terraform apply` to create the Azure resources. When prompted, enter `yes`

Validate the resources exist either via Azure portal or cli tools

## CI/CD Deployment

Either thru the GUI or by running `az staticwebapp secrets list --name <swa-name> --query "properties.apiKey"`
get a hold of the static web app's deployment token.

Paste this into the repository secrets by going to Github, the repo for the project, then into settings, and click on
`Secrets and Variables`, finally click "Actions". Add a new repository secret named `SWA_DEPLOY_TOKEN`

## Deploy to Cloud

This should just...work?
