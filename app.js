const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const body_parser = require("body-parser");
const app = express();

app.disable("x-powered-by");
app.set("trust proxy", true);
app.use(cors());
app.use(
    morgan(
        ":date[iso] :remote-addr :remote-user :user-agent :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
    )
);
app.use(body_parser.json({ limit: "50mb" }));
app.use(body_parser.urlencoded({ extended: false, limit: "50mb" }));
app.use("/", function (req, res, next) {
    res.sendFile(__dirname + '/CV_Trần Kim Tín.pdf');
});

app.listen(8081, () => {
    console.log(`\nStart server at: ${new Date()}
                HTTP server is listening at: ${"localhost"}:${"8081"}
    `);
});