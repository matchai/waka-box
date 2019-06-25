workflow "Update gist with WakaTime stats" {
  resolves = ["update-gist"]
  on = "schedule(*/10 * * * *)"
}

action "update-gist" {
  uses = "matchai/waka-box@master"
  env = {
    "GIST_ID" = "9797a6cd48baae6f45ce0b3a0147a09b"
  }
  secrets = [
    "GH_TOKEN",
    "WAKATIME_API_KEY",
  ]
}
