/*
*	@Auther: Greg
*	@Description: Created for communicating with the express API, 
*				  contains functions to fetch relevant data with callbacks in JSON format.
*/

//Connection to server
var localAPIKey = '1928DD301uusu73289GSCJ743lask32367DDSS6Fj5j45dspo534po5t4ruwm3cnbj483989843'

function getThreads(cb) {
  return fetch(`/api/threads`, {
    accept: 'application/json'
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function getThreadByID(threadID, cb) {
  return fetch(`/api/threads?threadID=${threadID}`, {
    accept: 'application/json'
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function createThread(data, cb) {
  return fetch(`/api/threads`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function postReply(data, cb) {
  return fetch(`/api/threads/posts`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function search(query, cb) {
  return fetch(`/api/films?q=${query}`, {
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function processLogout(cb) {
  return fetch(`/api/logout-session?api=${localAPIKey}`, {
	credentials: 'same-origin',
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function createAccount(data, cb) {
  return fetch(`/api/create-account`, {
    method: 'post',
    body: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchAccounts(username, pass, dateTime, cb) {
  return fetch(`/api/account?api=${localAPIKey}&un=${username}&p=${pass}&dt=${dateTime}`, {
	credentials: 'same-origin',
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}


function fetchAccountDetails(username, cb) {
  return fetch(`/api/account-details?api=${localAPIKey}&un=${username}`, {
	credentials: 'same-origin',
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function findSession(cb) {
  return fetch(`/api/locate-session?api=${localAPIKey}`, {
	credentials: 'same-origin',
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchSession(token, cb) {
  return fetch(`/api/session?api=${localAPIKey}&token=${token}`, {
	credentials: 'same-origin',
    accept: 'application/json'
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

const apiConnect = { search, fetchAccounts, fetchSession, findSession, createAccount, processLogout, getThreads, getThreadByID, createThread, postReply, fetchAccountDetails };
export default apiConnect;
