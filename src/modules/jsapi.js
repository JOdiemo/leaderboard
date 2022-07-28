UserName = document.querySelector(#name);
UserScores = document.querySelector(#scores)

const gamesURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bMAF4Ahf3Dxg9UYNYG6V/scores/"
const saveUsers = () => {
  const responseStart= await fetch(gamesURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: UserName.value,
      score: UserScores.value,
    }),
  })
  const userData = await responseStart.json();
  return userData;
};

const getUsers = async () => {
  const response = await fetch(gamesURL);
  const userData = await responseStart.json();
  return userData
};

export { saveUsers , getUsers}