## What does this project do?

* Helps you to manage your CV as a web app (HTML + CSS + JS).
* Automatically generates and publishes HTML and PDF version on every push to `main`.
* Repository Mirroring with Webhooks and Github Jobs to keep GitLab and GitHub Repositorys consistent.

Real world example: [http://71rima.github.io/cv](http://71rima.github.io/cv).

## Motivation

Giving a potential employer a link to your CV stored on GitHub shows your intense desire for automation and stands you out.

## Installation

1. Create a new repo out of this template by clicking [this link](https://github.com/sneas/cv-template/generate).
1. Clone the newly created repo.
1. Install project dependencies with `npm install`.
1. Run `npm run deploy` to initialize `gh-pages`. This is a one time action. Further deployments will be initiated by GitHub Actions on every push to `main`.
1. Run "npm install gh-pages" if "npm run deploy" is having troubles. 

## Usage

1. Start local development server with `npm start`.
1. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
1. Commit and push your changes.
1. GitHub Actions will automatically build the latest version and deploy it to GitHub Pages.
1. Open `http://your-username.github.io/your-cv-repo`.

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML template is located in [src/templates/index.html](src/templates/index.html). Metadata for the template could be found in [src/metadata/metadata.js](src/metadata/metadata.js).

###

Used Template and Inspired by Demo: [http://sneas.github.io/cv-template](https://github.com/wycats/handlebars.js/).  
