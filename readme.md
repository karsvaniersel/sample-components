# sample-components

## Getting Started
Use the following command to start up a dev environment for both Storybook + Stencil.js with live reloading.

```bash
npm run dev
```

For Stencil.js only, simply run:

```bash
npm run start
```

To run the unit and E2E tests for the components, run:

```bash
npm test
```

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.

Since this repository is called `sample-components`, the prefix used here will be `sc-` short for sample-components.
