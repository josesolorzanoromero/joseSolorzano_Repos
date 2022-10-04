import { Request, Response } from "express";
import { handleHttpError } from "../utils/handleErrors";
import data from "../utils/mockData";
/**
 * Get ALL Items
 * @param _req
 * @param res
 */
const getItems = async (_req: Request, res: Response) => {
  try {
    res.status(200).send({ data });
  } catch (error) {
    handleHttpError(res, "Error al obtener MOCK data");
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("id");
    console.log(id);
    const existData = data.repositories.find((item) => {
      return item.id == parseInt(id);
    });
    console.log("existData");
    console.log(existData);

    res.status(200).send({ data: existData });
  } catch (error) {
    handleHttpError(res, "Error al obtener MOCK data");
  }
};

export { getItems, getItem };
