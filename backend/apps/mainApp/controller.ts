import express from "express";
import { createStripeSubscription } from "./core";

const getFoo = (_req: express.Request, res: express.Response) => {
  res.send({ data: "getFoo" });
};

const postFoo = async (
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const data: { productId: string; priceId: string } =
      await createStripeSubscription();
    res.send({ data });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getFoo,
  postFoo,
};
