import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { handleHttpError } from "../utils/handleErrors";
const prisma = new PrismaClient();
/**
 * Get Obtener métricas de repositorios por tribu
 * @param req
 * @param res
 */
const getItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const newDate = new Date();
    const year = newDate.getFullYear();
    const data = await prisma.repository.findMany({
      where: {
        id_tribe: id,
        create_time: { gte: new Date(`${year}-01-01`) },
        state: "E",
      },
      include: { Metrics: { where: { coverage: { gt: 75 } } } },
    });
    console.log("data");
    console.log(data);

    res.status(200).send({ data });
  } catch (error) {
    handleHttpError(res, "Error al obtener la tribu");
  }
};

export { getItem };
