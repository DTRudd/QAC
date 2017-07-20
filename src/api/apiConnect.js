//Connection to server
var localAPIKey = "1928DD301uusu73289GSCJ743lask32367DDSS6Fj5j45dspo534po5t4ruwm3cnbj483989843"

function search(query, cb) {
  return fetch(`/api/films?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchAccounts(username, pass, dateTime, cb) {
  return fetch(`/api/account?api=${localAPIKey}&un=${username}&p=${pass}&dt=${dateTime}`, {
	credentials: 'same-origin',
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function findSession(cb) {
  return fetch(`/api/locate-session?api=${localAPIKey}`, {
	credentials: 'same-origin',
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchSession(token, cb) {
  return fetch(`/api/session?api=${localAPIKey}&token=${token}`, {
	credentials: 'same-origin',
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const apiConnect = { search, fetchAccounts, fetchSession, findSession };
export default apiConnect;