<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/4658208/54496333-6e21a780-48c4-11e9-8443-7e50a81a1bce.png">
  <h3 align="center">waka-box</h3>
  <p align="center">Update a pinned gist to contain your weekly WakaTime stats</p>
</p>

---

## Setup

### Prep work

1. Create a new public GitHub Gist (https://gist.github.com/)
1. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
1. Create a WakaTime account (https://wakatime.com/signup)
1. In your account settings, copy the existing WakaTime API Key (https://wakatime.com/settings/account)

### Project setup

1. Fork this repo
1. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
1. Click on "Add Projects" on the sidebar
1. Set up a project with the newly created fork
1. Go to Project Settings > Environment Variables
1. Add the following environment variables:

- **GIST_ID:** The ID portion from your gist url `https://gist.github.com/matchai/`**`6d5f84419863089a167387da62dd7081`**.
- **GITHUB_TOKEN:** The GitHub token generated above.
- **WAKATIME_API_KEY:** The API key for your WakaTime account.
