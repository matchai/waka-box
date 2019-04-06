workflow "Update gist with WakaTime stats" {
  resolves = ["update-gist"]
  on = "schedule(*/10 * * * *)"
}

action "update-gist" {
  uses = "matchai/waka-box@master"
  env = {
    "GIST_ID" = "968220c97e8da1d047a9a480fa432e54"
  }
  secrets = [
    "GH_TOKEN",
    "WAKATIME_API_KEY",
  ]
}
