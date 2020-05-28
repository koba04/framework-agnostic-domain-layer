# [WIP] Framework Agnostic Domain Layer

This is a reference implementation for a framework agnostic domain layer.

## How to run

```
% yarn 
% yarn start
```

## Project Structure

### app

`app` is an application layer, of which responsibility is to run an application using domains and components.

### components

`components` is a layer for views, of which responsibility is to display views and handle user interactions.

### domains

`domains` is a layer for domain logic, of which responsibility is to manage your domain logic. This should not be affected by changes in `app` and `components`.
