# {{service_name}}

## Install

```sh
helm install {{service_name}} .
```

## Upgrade

```sh
helm upgrade {{service_name}} . --set "requiredEnvVariable=${REQUIRED_ENV_VARIABLE}"
```

## Uninstall

```sh
helm uninstall {{service_name}}
```