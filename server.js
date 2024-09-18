import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
const port = process.env.PORT || 8000;

console.log(port);
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/posts', posts);
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
})
app.use(errorHandler)

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile( path.join(__dirname, 'public', 'index.html'));
// })


// app.get('/about', (req, res) => {
//     res.sendFile( path.join(__dirname, 'public', 'about.html'));
// })


app.listen(port, () => console.log('server is running on port ' + port))