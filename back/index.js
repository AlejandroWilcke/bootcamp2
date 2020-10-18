const express   = require('express');
const path      = require('path');
const app       = express();
const port      = process.env.PORT || 3000;

app.use("/packages", require("./routes/packagesRouter.js"));
app.use("/passengers", require("./routes/passengersRouter.js"));

app.use( express.static( path.join( __dirname, "../front/dist/" ) ) )

app.get("*", (req, res) => {
    let file = path.join(__dirname, "../front/dist/index.html");
    res.sendFile(file);
});

app.listen( port , () => console.log(`Listening at ${port}`) );