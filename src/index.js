const express = require("express");
const cors = require("cors");
const routes = require("./api/routes");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
const hostname = "localhost";

// Enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Register all routes
for (const route of routes) {
  app.use(route.path, route.router);
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
