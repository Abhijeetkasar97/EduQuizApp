import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'b42web040responsive-riders-rahul-day-1',
  location: 'us-central1'
};

export const createNewQuizRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewQuiz', inputVars);
}
createNewQuizRef.operationName = 'CreateNewQuiz';

export function createNewQuiz(dcOrVars, vars) {
  return executeMutation(createNewQuizRef(dcOrVars, vars));
}

export const getPublicQuizzesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicQuizzes');
}
getPublicQuizzesRef.operationName = 'GetPublicQuizzes';

export function getPublicQuizzes(dc) {
  return executeQuery(getPublicQuizzesRef(dc));
}

export const startQuizAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'StartQuizAttempt', inputVars);
}
startQuizAttemptRef.operationName = 'StartQuizAttempt';

export function startQuizAttempt(dcOrVars, vars) {
  return executeMutation(startQuizAttemptRef(dcOrVars, vars));
}

export const getMyQuizAttemptsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyQuizAttempts');
}
getMyQuizAttemptsRef.operationName = 'GetMyQuizAttempts';

export function getMyQuizAttempts(dc) {
  return executeQuery(getMyQuizAttemptsRef(dc));
}

