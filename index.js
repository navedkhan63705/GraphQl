import express from 'express';
import { ApolloServer } from '@apollo/server';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server-express4';
import cors from 'cors';
import employeeRouter from './router/Employee.js';

const port = process.env.PORT || 3000;
const app = express();
 
app.use('/employee', employeeRouter);

async function startServer() {
    const server = new ApolloServer({
      typeDefs: `
        type Todo {
          id: ID!
          title: String!
          completed: Boolean!
        }
        type Query {
          getTodos: [Todo]
        }
      `,
      resolvers: {
        Query: {
          getTodos: () => [
            { id: 1, title: "First Todo", completed: false },
            { id: 2, title: "Second Todo", completed: true },
          ],
        },
      },
          // disables CSRF check

    });

  await server.start();
  app.use('/graphql', bodyParser.json(), expressMiddleware(server));
}

startServer()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server', err);
  });
