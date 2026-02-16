# NestJS Microservice Blueprint

A template to create microservices with NestJS + Fastify and a Helm chart for Kubernetes deployments using `kli project`.

## Requirements

- Node.js 20+
- pnpm 10+
- Helm 3+
- Karibu CLI (`kli`)

## Create a project from this template

You can generate a new project with:

```sh
kli project https://github.com/KaribuLab/nestjs-microservice-blueprint -b main -w my-service
```

You can also use a local repository path:

```sh
kli project /path/to/nestjs-microservice-blueprint -w my-service
```

During project generation, `kli` will ask for these values:

- `description`
- `service_name`
- `image_name`
- `gateway_name`
- `service_account_name`
- `kubernetes_owner`
- `kubernetes_namespace`

## Main template structure

- `src/`: base NestJS application with a `GET /health` endpoint
- `helm/`: deployment chart (Deployment, Service, HPA, HTTPRoute, ConfigMap, HealthCheckPolicy)
- `.kliproject.json`: prompt definitions, template files, and posthooks
- `README-template.md`: README copied into the generated project

## Generation posthooks

After project creation, the posthooks defined in `.kliproject.json` are executed, including:

- Helm syntax validation (`helm template ./helm`)
- dependency installation (`pnpm install`)

## License

This project is distributed under the Apache-2.0 license. See the `LICENSE` file.
