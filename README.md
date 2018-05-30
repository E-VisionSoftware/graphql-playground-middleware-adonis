# graphql-playground-middleware-adonis

Middleware to enable AdonisJS to launch graphql-playground

```sh
npm install apollo-server-adonis
```

## Usage

```js
const GraphQLPlayground = use('graphql-playground-middleware-adonis');

Route.get(
  '/playground',
  GraphQLPlayground({
    endpoint: '/graphql', // a POST endpoint that playground will make the actual requests to
  })
);
```
