let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat = require("./data/virat.json");


let player_list = [sachin, sehwag, yuvraj, dravid, ganguly, virat];

const getFours = (player) => {
  let totalFours = 0;
  for (let type in player.data.batting) {
    totalFours += Number(player.data.batting[type]["4s"]);
  }
  return totalFours;
};
const getSixs = (player) => {
  let totalFours = 0;
  for (let type in player.data.batting) {
    totalFours += Number(player.data.batting[type]["6s"]);
  }
  return totalFours;
};
const getRuns = (player) => {
  let totalFours = 0;
  for (let type in player.data.batting) {
    totalFours += Number(player.data.batting[type]["Runs"]);
  }
  return totalFours;
};
const getWickets = (player) => {
  let totalFours = 0;
  for (let type in player.data.bowling) {
    totalFours += Number(player.data.bowling[type]["Wkts"]);
  }
  return totalFours;
};

const topper = (fn) => {
  let top_name = "";
  let top_score = 0;
  for (player of player_list) {
    let player_score = fn(player);
    if (player_score > top_score) {
      top_score = player_score;
      top_name = player.fullName;
    }
  }
  return [top_name, top_score];
};

let [top_name, top_score] = topper(getFours);
console.log(`Top scorer with Fours: ${top_name} with ${top_score} fours.`);

[top_name, top_score] = topper(getSixs);
console.log(`Top scorer with Sixs: ${top_name} with ${top_score} sixs.`);

[top_name, top_score] = topper(getRuns);
console.log(`Top scorer with Runs: ${top_name} with ${top_score} runs.`);

[top_name, top_score] = topper(getWickets);
console.log(`Top scorer with Wickets: ${top_name} with ${top_score} wickets.`);

