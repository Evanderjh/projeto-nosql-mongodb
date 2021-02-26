import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const port = 3334;

app.listen(port, () => {
    console.log("http://localhost:" + port);
});

export default app;
