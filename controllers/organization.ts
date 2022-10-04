import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { PrismaClient } from "@prisma/client";
import { handleHttpError } from "../utils/handleErrors";
const prisma = new PrismaClient();
/**
 * Get ONE Item
 * @param req
 * @param res
 */
const getItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = await prisma.organization.findUnique({
      where: { id },
    });
    res.status(200).send({ data });
  } catch (error) {
    handleHttpError(res, "Error al obtener la organización");
  }
};

/**
 * Get ALL Items
 * @param _req
 * @param res
 */
const getItems = async (_req: Request, res: Response) => {
  try {
    const data = await prisma.organization.findMany();
    res.status(200).send({ data });
  } catch (error) {
    handleHttpError(res, "Error al obtener la organización");
  }
};

/**
 * CREATE Item
 * @param req
 * @param res
 */
const createItem = async (req: Request, res: Response) => {
  try {
    const cleanData = matchedData(req);
    const { id, name, status } = cleanData;
    const newData = await prisma.organization.create({
      data: {
        id,
        name,
        status,
      },
    });
    res.status(200).send({ data: newData });
  } catch (error) {
    handleHttpError(res, "Error al crear la organización");
  }
};

/**
 * UPDATE Item
 * @param req
 * @param res
 */
const updateItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const cleanData = matchedData(req);
    const { name, status } = cleanData;
    const updateData = await prisma.organization.update({
      where: { id },
      data: {
        name,
        status,
      },
    });
    res.status(200).send({ data: updateData });
  } catch (error) {
    handleHttpError(res, "Error al actualizar la organización");
  }
};

/**
 * DELETE Item
 * @param req
 * @param res
 */
const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleteData = await prisma.organization.delete({
      where: { id },
    });
    res.status(200).send({ data: deleteData });
  } catch (error) {
    handleHttpError(res, "Error al eliminar la organización");
  }
};

export { createItem, updateItem, getItem, getItems, deleteItem };
