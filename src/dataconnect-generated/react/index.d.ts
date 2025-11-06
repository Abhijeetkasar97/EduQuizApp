import { CreateNewQuizData, CreateNewQuizVariables, GetPublicQuizzesData, StartQuizAttemptData, StartQuizAttemptVariables, GetMyQuizAttemptsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewQuiz(options?: useDataConnectMutationOptions<CreateNewQuizData, FirebaseError, CreateNewQuizVariables>): UseDataConnectMutationResult<CreateNewQuizData, CreateNewQuizVariables>;
export function useCreateNewQuiz(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewQuizData, FirebaseError, CreateNewQuizVariables>): UseDataConnectMutationResult<CreateNewQuizData, CreateNewQuizVariables>;

export function useGetPublicQuizzes(options?: useDataConnectQueryOptions<GetPublicQuizzesData>): UseDataConnectQueryResult<GetPublicQuizzesData, undefined>;
export function useGetPublicQuizzes(dc: DataConnect, options?: useDataConnectQueryOptions<GetPublicQuizzesData>): UseDataConnectQueryResult<GetPublicQuizzesData, undefined>;

export function useStartQuizAttempt(options?: useDataConnectMutationOptions<StartQuizAttemptData, FirebaseError, StartQuizAttemptVariables>): UseDataConnectMutationResult<StartQuizAttemptData, StartQuizAttemptVariables>;
export function useStartQuizAttempt(dc: DataConnect, options?: useDataConnectMutationOptions<StartQuizAttemptData, FirebaseError, StartQuizAttemptVariables>): UseDataConnectMutationResult<StartQuizAttemptData, StartQuizAttemptVariables>;

export function useGetMyQuizAttempts(options?: useDataConnectQueryOptions<GetMyQuizAttemptsData>): UseDataConnectQueryResult<GetMyQuizAttemptsData, undefined>;
export function useGetMyQuizAttempts(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyQuizAttemptsData>): UseDataConnectQueryResult<GetMyQuizAttemptsData, undefined>;
