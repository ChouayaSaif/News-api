const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const articles = [
  {
    title: "Breakthrough Proton Therapy Wipes Out Rare Cancer With No Side Effects",
    source: "SciTechDaily",
    url: "https://scitechdaily.com/breakthrough-proton-therapy-wipes-out-rare-cancer-with-no-side-effects/"
  },
  {
    title: "Here are the sneaky ways that indicate your partner has remote access to your phone to spy on you, according to expert",
    source: "New York Post",
    url: "https://nypost.com/2025/05/18/lifestyle/partner-is-spying-on-your-phone-tell-tale-signs/"
  },
  {
    title: "Star Citizen players slam CIG's 'non-apology' after space-sim introduces 'pay to win' items",
    source: "Eurogamer.net",
    url: "https://www.eurogamer.net/star-citizen-players-slam-cigs-non-apology-after-space-sim-introduces-pay-to-win-items-that-cannot-be-earned-in-game"
  },
  {
    title: "I used two GPS hiking apps for backpacking and I’ll do it again",
    source: "The Verge",
    url: "https://www.theverge.com/hands-on/668845/all-trails-gaia-gps-cal-topo-backpacking-review"
  },
  {
    title: "This Week in Pokémon GO (May 19–25): Events, Bonuses, and Raids You Shouldn’t Miss",
    source: "Pokemon GO Hub",
    url: "https://pokemongohub.net/post/news/this-week-in-pokemon-go-may-19-25-events-bonuses-and-raids-you-shouldnt-miss/"
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to the News API!');
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
