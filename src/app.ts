import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

//? Enable response json
app.use(express.json());

//? Initial cors
app.use(cors());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`⚡ Working by the port ${PORT}`));
