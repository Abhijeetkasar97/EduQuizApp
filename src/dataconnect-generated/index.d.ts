import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Badge_Key {
  id: UUIDString;
  __typename?: 'Badge_Key';
}

export interface CreateNewQuizData {
  quiz_insert: Quiz_Key;
}

export interface CreateNewQuizVariables {
  title: string;
  subject: string;
  difficultyLevel: string;
  description?: string | null;
  public?: boolean | null;
}

export interface GetMyQuizAttemptsData {
  quizAttempts: ({
    id: UUIDString;
    quiz?: {
      id: UUIDString;
      title: string;
    } & Quiz_Key;
      startTime: TimestampString;
      endTime: TimestampString;
      score: number;
      completed?: boolean | null;
  } & QuizAttempt_Key)[];
}

export interface GetPublicQuizzesData {
  quizzes: ({
    id: UUIDString;
    title: string;
    subject: string;
    difficultyLevel: string;
    description?: string | null;
  } & Quiz_Key)[];
}

export interface Question_Key {
  id: UUIDString;
  __typename?: 'Question_Key';
}

export interface QuizAttempt_Key {
  id: UUIDString;
  __typename?: 'QuizAttempt_Key';
}

export interface Quiz_Key {
  id: UUIDString;
  __typename?: 'Quiz_Key';
}

export interface StartQuizAttemptData {
  quizAttempt_insert: QuizAttempt_Key;
}

export interface StartQuizAttemptVariables {
  quizId: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewQuizRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewQuizVariables): MutationRef<CreateNewQuizData, CreateNewQuizVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewQuizVariables): MutationRef<CreateNewQuizData, CreateNewQuizVariables>;
  operationName: string;
}
export const createNewQuizRef: CreateNewQuizRef;

export function createNewQuiz(vars: CreateNewQuizVariables): MutationPromise<CreateNewQuizData, CreateNewQuizVariables>;
export function createNewQuiz(dc: DataConnect, vars: CreateNewQuizVariables): MutationPromise<CreateNewQuizData, CreateNewQuizVariables>;

interface GetPublicQuizzesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicQuizzesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPublicQuizzesData, undefined>;
  operationName: string;
}
export const getPublicQuizzesRef: GetPublicQuizzesRef;

export function getPublicQuizzes(): QueryPromise<GetPublicQuizzesData, undefined>;
export function getPublicQuizzes(dc: DataConnect): QueryPromise<GetPublicQuizzesData, undefined>;

interface StartQuizAttemptRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: StartQuizAttemptVariables): MutationRef<StartQuizAttemptData, StartQuizAttemptVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: StartQuizAttemptVariables): MutationRef<StartQuizAttemptData, StartQuizAttemptVariables>;
  operationName: string;
}
export const startQuizAttemptRef: StartQuizAttemptRef;

export function startQuizAttempt(vars: StartQuizAttemptVariables): MutationPromise<StartQuizAttemptData, StartQuizAttemptVariables>;
export function startQuizAttempt(dc: DataConnect, vars: StartQuizAttemptVariables): MutationPromise<StartQuizAttemptData, StartQuizAttemptVariables>;

interface GetMyQuizAttemptsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyQuizAttemptsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyQuizAttemptsData, undefined>;
  operationName: string;
}
export const getMyQuizAttemptsRef: GetMyQuizAttemptsRef;

export function getMyQuizAttempts(): QueryPromise<GetMyQuizAttemptsData, undefined>;
export function getMyQuizAttempts(dc: DataConnect): QueryPromise<GetMyQuizAttemptsData, undefined>;

