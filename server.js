const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})