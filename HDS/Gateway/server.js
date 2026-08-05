const express = require("express");

const routes = require("./routes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/", express.static("/app/dashboard"));

app.use("/api/v1", routes);

app.listen(PORT, () => {

    console.log("=======================================");
    console.log(" SoNexus HDS Gateway Express");
    console.log("=======================================");
    console.log(` Dashboard : http://localhost:${PORT}`);
    console.log(` API       : http://localhost:${PORT}/api/v1`);
    console.log("=======================================");

});
