# {{.Inputs.service_name}}

## Install

```sh
helm install {{.Inputs.service_name}} ./helm
```

## Upgrade

```sh
helm upgrade {{.Inputs.service_name}} ./helm --set "requiredEnvVariable=${REQUIRED_ENV_VARIABLE}"
```

## Uninstall

```sh
helm uninstall {{.Inputs.service_name}}
```