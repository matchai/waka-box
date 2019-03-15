<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/4658208/54449507-a5595280-4724-11e9-95ce-ce0817dc7503.png">
  <h3 align="center">bird-box</h3>
  <p align="center">Update a pinned gist to contain the latest tweets of a user</p>
</p>

---

## Setup

### Prep work

1. Create a new public GitHub Gist (https://gist.github.com/)
1. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
1. Create a new Twitter app (https://developer.twitter.com/en/apps/create)
1. On the App page for your newly created app, generate an "Access token & access token secret" and copy all keys and tokens.

### Project setup

1. Fork this repo
1. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
1. Click on "Add Projects" on the sidebar
1. Set up a project with the newly created fork
1. Go to Project Settings > Environment Variables
1. Add the following environment variables:

- **GIST_ID:** The ID portion from your gist url `https://gist.github.com/matchai/`**`6d5f84419863089a167387da62dd7081`**.
- **GITHUB_TOKEN:** The GitHub token generated above.
- **TWITTER_USER:** The user handle of the twitter account.
- **TWITTER_CONSUMER_KEY:** Your Twitter consumer API key.
- **TWITTER_CONSUMER_SECRET:** Your Twitter consumer secret.
- **TWITTER_ACCESS_TOKEN_KEY:** Your Twitter access token key.
- **TWITTER_ACCESS_TOKEN_SECRET:** Your Twitter access token secret.
