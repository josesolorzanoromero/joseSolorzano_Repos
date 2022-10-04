import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { handleHttpError } from "../utils/handleErrors";
import axios from "axios";
import { convertArrayToCSV } from "convert-array-to-csv";

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
    const dataRespository = await prisma.repository.findMany({
      where: {
        id_tribe: id,
        create_time: { gte: new Date(`${year}-01-01`) },
        state: "E",
      },
      include: {
        Metrics: { where: { coverage: { gt: 75 } } },
        Organization: true,
        tribe: { include: { organization: true } },
      },
    });

    if (dataRespository.length === 0) {
      res.status(200).send({
        data: {
          error:
            "La Tribu no se encuentra registrada o no tiene repositorios que cumplan con la cobertura necesaria",
        },
      });
      return;
    }
    const data = [];

    //Get the REPOSITORY
    for (let i = 0; i < dataRespository.length; i++) {
      const dataMetric: any = await prisma.metrics.findUnique({
        where: { id_repository: dataRespository[i].id },
      });

      const dataExternalAPI = await axios.get(
        `http://localhost:3001/api/mock/${dataRespository[i].id}`
      );
      const verificationState =
        dataExternalAPI.data.data.state === 604
          ? "Verificado"
          : dataExternalAPI.data.data.state === 605
          ? "En espera"
          : "Aprobado";

      const state =
        dataRespository[i].state === "E"
          ? "Habilitado - Enable"
          : dataRespository[i].state === "D"
          ? "Inhabilitada - Disable"
          : "Archivado - Archived";

      const objData = {
        id: dataRespository[i].id,
        name: dataRespository[i].name,
        tribe: dataRespository[i].tribe.name,
        organization: dataRespository[i].tribe.organization.name,
        coverage: dataMetric.coverage,
        codeSmells: dataMetric.code_smells,
        bugs: dataMetric.bugs,
        vulnerabilities: dataMetric.vulnerabilities,
        hotspot: dataMetric.hotspot,
        verificationState,
        state,
      };
      data.push(objData);
    }

    res.status(200).send({ data });
  } catch (error) {
    handleHttpError(res, "Error al obtener los repositorios de la tribu");
  }
};

/**
 * Crear csv de métricas de repositorios por tribu
 * @param req
 * @param res
 * @returns
 */
const createFile = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const newDate = new Date();
    const year = newDate.getFullYear();
    const dataRespository = await prisma.repository.findMany({
      where: {
        id_tribe: id,
        create_time: { gte: new Date(`${year}-01-01`) },
        state: "E",
      },
      include: {
        Metrics: { where: { coverage: { gt: 75 } } },
        Organization: true,
        tribe: { include: { organization: true } },
      },
    });

    if (dataRespository.length === 0) {
      res.status(200).send({
        data: {
          error:
            "La Tribu no se encuentra registrada o no tiene repositorios que cumplan con la cobertura necesaria",
        },
      });
      return;
    }
    const data = [];

    //Get the REPOSITORY
    for (let i = 0; i < dataRespository.length; i++) {
      const dataMetric: any = await prisma.metrics.findUnique({
        where: { id_repository: dataRespository[i].id },
      });

      const dataExternalAPI = await axios.get(
        `http://localhost:3001/api/mock/${dataRespository[i].id}`
      );
      const verificationState =
        dataExternalAPI.data.data.state === 604
          ? "Verificado"
          : dataExternalAPI.data.data.state === 605
          ? "En espera"
          : "Aprobado";

      const state =
        dataRespository[i].state === "E"
          ? "Habilitado - Enable"
          : dataRespository[i].state === "D"
          ? "Inhabilitada - Disable"
          : "Archivado - Archived";

      const objData = {
        id: dataRespository[i].id,
        name: dataRespository[i].name,
        tribe: dataRespository[i].tribe.name,
        organization: dataRespository[i].tribe.organization.name,
        coverage: dataMetric.coverage,
        codeSmells: dataMetric.code_smells,
        bugs: dataMetric.bugs,
        vulnerabilities: dataMetric.vulnerabilities,
        hotspot: dataMetric.hotspot,
        verificationState,
        state,
      };
      data.push(objData);
    }

    const csvFromArrayOfObjects = convertArrayToCSV(data, {
      separator: ";",
    });
    res.attachment("filename.csv");
    res.send(Buffer.from(csvFromArrayOfObjects));
  } catch (error) {
    handleHttpError(res, "Error al generar el FILE");
  }
};
export { getItem, createFile };
