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
      - listUsersController.ts
      - auth
        - loginController.ts
        - registerController.ts
  - case
      - login
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
