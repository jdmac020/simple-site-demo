variable "client_project_name" {
  default = "template"
}
variable "location" {
  default = "eastus2"
}


# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.2"
    }
  }

  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "${var.client_project_name}-resource-group"
  location = var.location
}

resource "azurerm_static_site" "swa" {
  name                = "${var.client_project_name}-swa"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

resource "azurerm_storage_account" "storage" {
  name                     = "${var.client_project_name}sitestorage"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
}
