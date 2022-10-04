import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { handleHttpError } from "../utils/handleErrors";
const prisma = new PrismaClient();
/**
 * DELETE Item
 * @param req
 * @param res
 */
const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleteData = await prisma.tribe.delete({
      where: { id },
    });
    res.status(200).send({ data: deleteData });
  } catch (error) {
    handleHttpError(res, "Error al eliminar las tribus");
  }
};

export { deleteItem };
