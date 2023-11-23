import express from 'express';
import { Application } from 'express';
import router from './src/routes';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(`/`, router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});