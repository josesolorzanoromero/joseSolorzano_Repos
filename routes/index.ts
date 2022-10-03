import express from "express";
import fs from "fs";
const router = express.Router();

const removeExtension = (fileName: String) => {
  return fileName.split(".").shift();
};

const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);

  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

export = router;
