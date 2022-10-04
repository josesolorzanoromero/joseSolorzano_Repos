import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { handleHttpError } from "../utils/handleErrors";
import {
  organizationsData,
  tribesData,
  repositoryData,
  metricsData,
} from "../utils/handleExampleData";
const prisma = new PrismaClient();

/**
 * CREATE Item
 * @param req
 * @param res
 */
const createItem = async (_req: Request, res: Response) => {
  try {
    //CREA ORGANIZACIONES
    for (let i = 0; i < organizationsData.length; i++) {
      const data = await prisma.organization.create({
        data: {
          id: parseInt((i + 100).toString()),
          name: organizationsData[i].name,
          status: organizationsData[i].status,
        },
      });
      console.log("Organización");
      console.log(data);
    }

    //CREA TRIBUS
    for (let i = 0; i < tribesData.length; i++) {
      const data = await prisma.tribe.create({
        data: {
          id: parseInt((i + 100).toString()),
          id_organization: tribesData[i].id_organization,
          name: tribesData[i].name,
          status: tribesData[i].status,
        },
      });
      console.log("tribus");
      console.log(data);
    }

    //CREA REPOSITORIOS
    for (let i = 0; i < repositoryData.length; i++) {
      const data = await prisma.repository.create({
        data: {
          id: parseInt((i + 100).toString()),
          id_tribe: repositoryData[i].id_tribe,
          name: repositoryData[i].name,
          state: repositoryData[i].state,
          create_time: repositoryData[i].create_time,
          status: repositoryData[i].status,
        },
      });
      console.log("Repositorios");
      console.log(data);
    }

    //CREA METRICAS
    for (let i = 0; i < metricsData.length; i++) {
      const data = await prisma.metrics.create({
        data: {
          id_repository: parseInt((i + 100).toString()),
          bugs: metricsData[i].bugs,
          vulnerabilities: metricsData[i].vulnerabilities,
          hotspot: metricsData[i].hotspot,
          code_smells: metricsData[i].code_smells,
        },
      });
      console.log("Metricas");
      console.log(data);
    }
    res.status(200).send({ data: "Datos de prueba creados" });
  } catch (error) {
    console.log("error");
    console.log(error);
    handleHttpError(res, "Error al crear la organización");
  }
};

export { createItem };
