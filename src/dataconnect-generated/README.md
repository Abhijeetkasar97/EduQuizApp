# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPublicQuizzes*](#getpublicquizzes)
  - [*GetMyQuizAttempts*](#getmyquizattempts)
- [**Mutations**](#mutations)
  - [*CreateNewQuiz*](#createnewquiz)
  - [*StartQuizAttempt*](#startquizattempt)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPublicQuizzes
You can execute the `GetPublicQuizzes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPublicQuizzes(): QueryPromise<GetPublicQuizzesData, undefined>;

interface GetPublicQuizzesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicQuizzesData, undefined>;
}
export const getPublicQuizzesRef: GetPublicQuizzesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPublicQuizzes(dc: DataConnect): QueryPromise<GetPublicQuizzesData, undefined>;

interface GetPublicQuizzesRef {
  ...
  (dc: DataConnect): QueryRef<GetPublicQuizzesData, undefined>;
}
export const getPublicQuizzesRef: GetPublicQuizzesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPublicQuizzesRef:
```typescript
const name = getPublicQuizzesRef.operationName;
console.log(name);
```

### Variables
The `GetPublicQuizzes` query has no variables.
### Return Type
Recall that executing the `GetPublicQuizzes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPublicQuizzesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPublicQuizzesData {
  quizzes: ({
    id: UUIDString;
    title: string;
    subject: string;
    difficultyLevel: string;
    description?: string | null;
  } & Quiz_Key)[];
}
```
### Using `GetPublicQuizzes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPublicQuizzes } from '@dataconnect/generated';


// Call the `getPublicQuizzes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPublicQuizzes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPublicQuizzes(dataConnect);

console.log(data.quizzes);

// Or, you can use the `Promise` API.
getPublicQuizzes().then((response) => {
  const data = response.data;
  console.log(data.quizzes);
});
```

### Using `GetPublicQuizzes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPublicQuizzesRef } from '@dataconnect/generated';


// Call the `getPublicQuizzesRef()` function to get a reference to the query.
const ref = getPublicQuizzesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPublicQuizzesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.quizzes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.quizzes);
});
```

## GetMyQuizAttempts
You can execute the `GetMyQuizAttempts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyQuizAttempts(): QueryPromise<GetMyQuizAttemptsData, undefined>;

interface GetMyQuizAttemptsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyQuizAttemptsData, undefined>;
}
export const getMyQuizAttemptsRef: GetMyQuizAttemptsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyQuizAttempts(dc: DataConnect): QueryPromise<GetMyQuizAttemptsData, undefined>;

interface GetMyQuizAttemptsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyQuizAttemptsData, undefined>;
}
export const getMyQuizAttemptsRef: GetMyQuizAttemptsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyQuizAttemptsRef:
```typescript
const name = getMyQuizAttemptsRef.operationName;
console.log(name);
```

### Variables
The `GetMyQuizAttempts` query has no variables.
### Return Type
Recall that executing the `GetMyQuizAttempts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyQuizAttemptsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMyQuizAttempts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyQuizAttempts } from '@dataconnect/generated';


// Call the `getMyQuizAttempts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyQuizAttempts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyQuizAttempts(dataConnect);

console.log(data.quizAttempts);

// Or, you can use the `Promise` API.
getMyQuizAttempts().then((response) => {
  const data = response.data;
  console.log(data.quizAttempts);
});
```

### Using `GetMyQuizAttempts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyQuizAttemptsRef } from '@dataconnect/generated';


// Call the `getMyQuizAttemptsRef()` function to get a reference to the query.
const ref = getMyQuizAttemptsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyQuizAttemptsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.quizAttempts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.quizAttempts);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewQuiz
You can execute the `CreateNewQuiz` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewQuiz(vars: CreateNewQuizVariables): MutationPromise<CreateNewQuizData, CreateNewQuizVariables>;

interface CreateNewQuizRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewQuizVariables): MutationRef<CreateNewQuizData, CreateNewQuizVariables>;
}
export const createNewQuizRef: CreateNewQuizRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewQuiz(dc: DataConnect, vars: CreateNewQuizVariables): MutationPromise<CreateNewQuizData, CreateNewQuizVariables>;

interface CreateNewQuizRef {
  ...
  (dc: DataConnect, vars: CreateNewQuizVariables): MutationRef<CreateNewQuizData, CreateNewQuizVariables>;
}
export const createNewQuizRef: CreateNewQuizRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewQuizRef:
```typescript
const name = createNewQuizRef.operationName;
console.log(name);
```

### Variables
The `CreateNewQuiz` mutation requires an argument of type `CreateNewQuizVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewQuizVariables {
  title: string;
  subject: string;
  difficultyLevel: string;
  description?: string | null;
  public?: boolean | null;
}
```
### Return Type
Recall that executing the `CreateNewQuiz` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewQuizData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewQuizData {
  quiz_insert: Quiz_Key;
}
```
### Using `CreateNewQuiz`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewQuiz, CreateNewQuizVariables } from '@dataconnect/generated';

// The `CreateNewQuiz` mutation requires an argument of type `CreateNewQuizVariables`:
const createNewQuizVars: CreateNewQuizVariables = {
  title: ..., 
  subject: ..., 
  difficultyLevel: ..., 
  description: ..., // optional
  public: ..., // optional
};

// Call the `createNewQuiz()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewQuiz(createNewQuizVars);
// Variables can be defined inline as well.
const { data } = await createNewQuiz({ title: ..., subject: ..., difficultyLevel: ..., description: ..., public: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewQuiz(dataConnect, createNewQuizVars);

console.log(data.quiz_insert);

// Or, you can use the `Promise` API.
createNewQuiz(createNewQuizVars).then((response) => {
  const data = response.data;
  console.log(data.quiz_insert);
});
```

### Using `CreateNewQuiz`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewQuizRef, CreateNewQuizVariables } from '@dataconnect/generated';

// The `CreateNewQuiz` mutation requires an argument of type `CreateNewQuizVariables`:
const createNewQuizVars: CreateNewQuizVariables = {
  title: ..., 
  subject: ..., 
  difficultyLevel: ..., 
  description: ..., // optional
  public: ..., // optional
};

// Call the `createNewQuizRef()` function to get a reference to the mutation.
const ref = createNewQuizRef(createNewQuizVars);
// Variables can be defined inline as well.
const ref = createNewQuizRef({ title: ..., subject: ..., difficultyLevel: ..., description: ..., public: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewQuizRef(dataConnect, createNewQuizVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.quiz_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.quiz_insert);
});
```

## StartQuizAttempt
You can execute the `StartQuizAttempt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
startQuizAttempt(vars: StartQuizAttemptVariables): MutationPromise<StartQuizAttemptData, StartQuizAttemptVariables>;

interface StartQuizAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: StartQuizAttemptVariables): MutationRef<StartQuizAttemptData, StartQuizAttemptVariables>;
}
export const startQuizAttemptRef: StartQuizAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
startQuizAttempt(dc: DataConnect, vars: StartQuizAttemptVariables): MutationPromise<StartQuizAttemptData, StartQuizAttemptVariables>;

interface StartQuizAttemptRef {
  ...
  (dc: DataConnect, vars: StartQuizAttemptVariables): MutationRef<StartQuizAttemptData, StartQuizAttemptVariables>;
}
export const startQuizAttemptRef: StartQuizAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the startQuizAttemptRef:
```typescript
const name = startQuizAttemptRef.operationName;
console.log(name);
```

### Variables
The `StartQuizAttempt` mutation requires an argument of type `StartQuizAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface StartQuizAttemptVariables {
  quizId: UUIDString;
}
```
### Return Type
Recall that executing the `StartQuizAttempt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `StartQuizAttemptData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface StartQuizAttemptData {
  quizAttempt_insert: QuizAttempt_Key;
}
```
### Using `StartQuizAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, startQuizAttempt, StartQuizAttemptVariables } from '@dataconnect/generated';

// The `StartQuizAttempt` mutation requires an argument of type `StartQuizAttemptVariables`:
const startQuizAttemptVars: StartQuizAttemptVariables = {
  quizId: ..., 
};

// Call the `startQuizAttempt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await startQuizAttempt(startQuizAttemptVars);
// Variables can be defined inline as well.
const { data } = await startQuizAttempt({ quizId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await startQuizAttempt(dataConnect, startQuizAttemptVars);

console.log(data.quizAttempt_insert);

// Or, you can use the `Promise` API.
startQuizAttempt(startQuizAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.quizAttempt_insert);
});
```

### Using `StartQuizAttempt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, startQuizAttemptRef, StartQuizAttemptVariables } from '@dataconnect/generated';

// The `StartQuizAttempt` mutation requires an argument of type `StartQuizAttemptVariables`:
const startQuizAttemptVars: StartQuizAttemptVariables = {
  quizId: ..., 
};

// Call the `startQuizAttemptRef()` function to get a reference to the mutation.
const ref = startQuizAttemptRef(startQuizAttemptVars);
// Variables can be defined inline as well.
const ref = startQuizAttemptRef({ quizId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = startQuizAttemptRef(dataConnect, startQuizAttemptVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.quizAttempt_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.quizAttempt_insert);
});
```

