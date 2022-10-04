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

export { getItems };
