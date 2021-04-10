import express from "express";
import {
  paginaDetalleViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
} from "../controller/paginasController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

export default router;
