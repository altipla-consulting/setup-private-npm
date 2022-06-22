
# setup-private-npm

Setup private NPM configuration in CI environments.

## Usage

Add a new script to the install process:

```json
{
  "scripts": {
    "preinstall": "npx -y @altipla/setup-private-npm"
  }
}
```

Any of these environment variables will be configured in the `.npmrc` file if present:

| Variable |
|----------|
| `FONTAWESOME_TOKEN` |
| `GITHUB_TOKEN` |
| `NPM_TOKEN` |
