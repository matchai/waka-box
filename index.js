require('dotenv').config();
const Twitter = require('twitter');
const Octokit = require('@octokit/rest');
const wordwrap = require('wordwrap');
const { formatDistanceStrict } = require('date-fns');

const {
  TWITTER_USER: twitterHandle,
  GIST_ID: gistId,
  TWITTER_CONSUMER_KEY: consumerKey,
  TWITTER_CONSUMER_SECRET: consumerSecret,
  TWITTER_ACCESS_TOKEN_KEY: accessTokenKey,
  TWITTER_ACCESS_TOKEN_SECRET: accessTokenSecret,
  GITHUB_TOKEN: githubToken,
} = process.env;

const twitter = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret,
});

const octokit = new Octokit({
  auth: `token ${githubToken}`,
});

async function main() {
  const timeline = await twitter.get('statuses/user_timeline', {
    screen_name: twitterHandle, 
    count: 1,
    trim_user: 1,
    exclude_replies: true,
   });

  const tweet = timeline[0];
  await updateGist(tweet);
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
          filename: `@${twitterHandle} - ${timeAgo} ago | ❤ ${tweet.favorite_count} | 🔁 ${tweet.retweet_count}`,
          content: wrap(tweet.text),
        },
      },
    });
  } catch (error) {
    console.error(`Unable to update gist\n${error}`);
  }
};

(async () => {
  await main();
})();
