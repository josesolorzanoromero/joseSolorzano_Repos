import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import validateResults from "../utils/handleValidator";

const validatorCreateItem = [
  check("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .notEmpty()
    .withMessage("El ID es obligatorio")
    .isNumeric()
    .withMessage("El ID es incorrecto, debe ser un número entero"),
  check("name")
    .exists()
    .withMessage("El NOMBRE es obligatorio")
    .notEmpty()
    .withMessage("El NOMBRE es obligatorio")
    .isLength({ max: 50 })
    .withMessage("El NOMBRE tiene máximo 50 caracteres"),
  check("status")
    .exists()
    .withMessage("El STATUS es obligatorio")
    .notEmpty()
    .withMessage("El STATUS es obligatorio")
    .isNumeric()
    .withMessage("El STATUS es incorrecto, debe ser un número entero"),
  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id")
    .exists()
    .withMessage("El parámetro ID es obligatorio")
    .notEmpty()
    .withMessage("El parámetro ID es obligatorio")
    .isNumeric()
    .withMessage("El parámetro ID es incorrecto, debe ser un número entero"),
  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next);
  },
];

export { validatorCreateItem, validatorGetItem };
