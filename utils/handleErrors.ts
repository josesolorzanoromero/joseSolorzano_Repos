import { Response } from "express";
const handleHttpError = (
  res: Response,
  message: String = "Algo salió mal",
  code: number = 403
) => {
  res.status(code);
  res.send({ error: message });
};

export { handleHttpError };
