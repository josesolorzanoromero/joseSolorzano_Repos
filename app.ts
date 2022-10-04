import express from "express";
import routes from "./routes";
const app = express();
app.use(express.json());

app.use("/api", routes);

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`App runing in port ${PORT}`);
});
