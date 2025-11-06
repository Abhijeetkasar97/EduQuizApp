const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'b42web040responsive-riders-rahul-day-1',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createNewQuizRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewQuiz', inputVars);
}
createNewQuizRef.operationName = 'CreateNewQuiz';
exports.createNewQuizRef = createNewQuizRef;

exports.createNewQuiz = function createNewQuiz(dcOrVars, vars) {
  return executeMutation(createNewQuizRef(dcOrVars, vars));
};

const getPublicQuizzesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicQuizzes');
}
getPublicQuizzesRef.operationName = 'GetPublicQuizzes';
exports.getPublicQuizzesRef = getPublicQuizzesRef;

exports.getPublicQuizzes = function getPublicQuizzes(dc) {
  return executeQuery(getPublicQuizzesRef(dc));
};

const startQuizAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'StartQuizAttempt', inputVars);
}
startQuizAttemptRef.operationName = 'StartQuizAttempt';
exports.startQuizAttemptRef = startQuizAttemptRef;

exports.startQuizAttempt = function startQuizAttempt(dcOrVars, vars) {
  return executeMutation(startQuizAttemptRef(dcOrVars, vars));
};

const getMyQuizAttemptsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyQuizAttempts');
}
getMyQuizAttemptsRef.operationName = 'GetMyQuizAttempts';
exports.getMyQuizAttemptsRef = getMyQuizAttemptsRef;

exports.getMyQuizAttempts = function getMyQuizAttempts(dc) {
  return executeQuery(getMyQuizAttemptsRef(dc));
};
