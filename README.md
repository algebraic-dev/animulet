# Animulet

API for Anime lists and things like that. It's just a test to make a simple but maintainable architecture for future APIs.

## :alembic: Structure
The structure is mainly feature oriented so in the source file it will have the folder modules that will have each one of the features. A simple example would be:

```yaml
- src
  - modules
    - user
    - catalog
```

The structure of each module will be inspired in some type of clean architecture so it will be like
```yaml
- user
  - controllers
      - userController.ts
  - case
      - login
          - __tests__
          - registerCase.ts
          - registerError.ts
      - register
          - registerCase.ts
          - registerError.ts
  - models
      - userModel.ts
  - repositoties
      - userRepository.ts
```

## Some thoughts on this design

- First of all, this project does not use any classes, instead, we had a more functional approuch of it. There are two singletons in the project that act as big mutable global states so it is a concern (database, logger) but everything besides that is treated as just functions and data. 

- Should we use more of fp-ts (functional programming lib with a lot of useful types)? As i'm writing this thought, we are just using `Either` as a way to type our errors but using it with `Promise` is not the best thing. Promises can throw exceptions that we wont caught so with that, we will have a messy mix of Either and Execeptions. To fix this problem, i thought about using `Task` but making all of the promises into Tasks will introduce a lot of new types and we will treat things that probably are internal of some libraries (as customized and specific errors). 

- We dont need to use the adapter pattern, Prisma can handle the database changes for us and other things will not be easily swapable because they'll not change so fast.