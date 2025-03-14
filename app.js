const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
require("dotenv").config();

const prisma = new PrismaClient();

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(
    expressSession({
        cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
        secret: 'a santa at nasa',
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(
        new PrismaClient(),
        {
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    )
    })
);

app.listen(3000, () => console.log("app listening on port 3000!"));