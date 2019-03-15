<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/4658208/54449507-a5595280-4724-11e9-95ce-ce0817dc7503.png">
  <h3 align="center">bird-box</h3>
  <p align="center">Update a pinned gist to contain the latest tweets of a user</p>
</p>

---

## Setup

Create a GitHub Gist and create a token with the `gist` scope.

Register a Twitter app and create a `.env` file:

```
GIST_ID=
GITHUB_TOKEN=

TWITTER_USER=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
```

Adjust poll rate in `.circleci/config.yml`.
