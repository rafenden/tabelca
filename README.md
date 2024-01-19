# Tabelca

Compare products and services in tabular data.

## Run it locally

1. Install dependencies
```shell
brew install rbenv 
rbenv install 2.7.3
gem install bundler
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