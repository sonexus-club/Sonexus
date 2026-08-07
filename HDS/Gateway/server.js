const express = require("express");

const { getPublicConfigSummary, loadConfig } = require("./config");
const routes = require("./routes");

let config;

try {
    config = loadConfig();
} catch (error) {
    console.error(`[startup] ${error.name}: ${error.message}`);
    process.exit(1);
}

const app = express();

const PORT = 3000;

app.locals.config = config;

app.use(express.json());

app.use("/", express.static("/app/dashboard"));

app.use("/api/v1", routes);

app.listen(PORT, () => {

    console.log("=======================================");
    console.log(" SoNexus HDS Gateway Express");
    console.log("=======================================");
    console.log(` Dashboard : http://localhost:${PORT}`);
    console.log(` API       : http://localhost:${PORT}/api/v1`);
    console.log(" Config    :", getPublicConfigSummary(config));
    console.log("=======================================");

});
