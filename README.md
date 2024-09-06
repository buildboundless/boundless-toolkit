# Boundless Toolkit

This repo contains a set of tools and docs for rapid development of web and mobile applications.

Many of these tools are related, so it's recommended to use the same version for all tools. If you want to upgrade versions, 
be sure to check the release notes to ensure compatibility.

Each service directory contains a README with setup and usage instructions. There is also 
[additional documentation](https://buildboundless.github.io/boundless-toolkit/) for other
common tasks.

## Services
[SendGrid](./src/sendgrid/README.md) - Tools for sending emails with SendGrid.

[Stripe](https://buildboundless.github.io/boundless-toolkit/#/stripe/usage) - Tools for working with Stripe.

## Docs

Additional documentation can be found [here](https://buildboundless.github.io/boundless-toolkit/).

Docs are generated using [docsify](https://docsify.js.org/#/).

You can find all docs in the `/docs` directory.

To add a new docs entry, create a folder under `/docs` and update `/docs/_sidebar.md` with the new entries for each markdown file.

## Developing

### Setup

Run `npm install`

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.