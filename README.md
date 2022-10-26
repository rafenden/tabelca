# Tabelca

Compare products and services in tabular data.

## Run it locally

1. Install dependencies
```shell
bundle install --path vendor/bundle
```
2. Start the server
```shell
bundle exec jekyll serve --livereload
```

## Testing

**Run Cypress tests**
```shell
docker run -it -v $PWD:/e2e -w /e2e cypress/included:6.8.0
```