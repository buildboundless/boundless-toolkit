# Boundless Toolkit

This repo contains a set of tools and docs for rapid development of web and mobile applications.

Many of these tools are related, so it's recommended to use the same version for all tools. If you want to upgrade versions, 
be sure to check the release notes to ensure compatibility.

Each service directory contains a README with setup and usage instructions. There is also 
[additional documentation](https://buildboundless.github.io/boundless-toolkit/) for other
common tasks.

## Services
[SendGrid](https://buildboundless.github.io/boundless-toolkit/#/sendgrid/setup-usage) - Tools for sending emails with SendGrid.

## Contributing

### Docs

To add a new docs entry, create a folder under `/docs` and update `/docs/_sidebar.md` with the new entries for each markdown file.

Additional documentation can be found [here](https://buildboundless.github.io/boundless-toolkit/).

Docs are generated using [docsify](https://docsify.js.org/#/).

You can find all docs in the `/docs` directory.

### Source Code

To add source code, create a new folder under `/src` and update `/src/index.ts` with the new exports. Source code should also be documented in `/docs`.

## Developing

### Setup

Run `npm install`

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Deployment

Docs are deployed from the `main` branch to GitHub Pages.

Source code is distributed via npm (coming soon).