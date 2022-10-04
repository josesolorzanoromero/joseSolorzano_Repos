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
    //ELIMINA TODOS LOS DDATOS
    // const allDataMetrics = prisma.findMany()
    await await prisma.metrics.deleteMany();
    await await prisma.repository.deleteMany();
    await await prisma.tribe.deleteMany();
    await await prisma.organization.deleteMany();

    // for(let i=0;i<allDataMetrics.length;i++){

    // }
    //CREA ORGANIZACIONES
    for (let i = 0; i < organizationsData.length; i++) {
      const data = await prisma.organization.create({
        data: {
          id: parseInt((i + 1).toString()),
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
          id: parseInt((i + 1).toString()),
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
          id: parseInt((i + 1).toString()),
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
    var date = new Date("25 Dec 2021");
    const dataLastYear = await prisma.repository.create({
      data: {
        id: 7,
        id_tribe: 1,
        name: "Repository Last Year",
        state: "E",
        create_time: date,
        status: "A",
      },
    });
    console.log("Repositorios Last Year");
    console.log(dataLastYear);

    //CREA METRICAS
    for (let i = 0; i < metricsData.length; i++) {
      const data = await prisma.metrics.create({
        data: {
          id_repository: parseInt((i + 1).toString()),
          coverage: metricsData[i].coverage,
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
