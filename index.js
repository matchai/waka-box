require("dotenv").config();
const { WakaTimeClient, RANGE } = require("wakatime-client");
const Octokit = require("@octokit/rest");
const wordwrap = require("wordwrap");

const {
  GIST_ID: gistId,
  GITHUB_TOKEN: githubToken,
  WAKATIME_API_KEY: wakatimeApiKey
} = process.env;

const wakatime = new WakaTimeClient(wakatimeApiKey);

const octokit = new Octokit({
  auth: `token ${githubToken}`
});

async function main() {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_7_DAYS });
  console.log(stats.data.languages);
  // await updateGist(tweet);
}

async function updateGist(tweet) {
  const wrap = wordwrap(46);

  let gist;
  try {
    gist = await octokit.gists.get({ gist_id: gistId });
  } catch (error) {
    console.error(`Unable to get gist\n${error}`);
  }
  // Get original filename to update that same file
  const filename = Object.keys(gist.data.files)[0];
  const parsedDate = new Date(tweet.created_at);
  const timeAgo = formatDistanceStrict(parsedDate, new Date());

  try {
    await octokit.gists.update({
      gist_id: gistId,
      files: {
        [filename]: {
          filename: `@${twitterHandle} - ${timeAgo} ago | ❤ ${
            tweet.favorite_count
          } | 🔁 ${tweet.retweet_count}`,
          content: wrap(tweet.text)
        }
      }
    });
  } catch (error) {
    console.error(`Unable to update gist\n${error}`);
  }
}

(async () => {
  await main();
})();
