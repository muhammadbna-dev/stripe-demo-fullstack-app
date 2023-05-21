import express from "express";

const getFoo = (_req: express.Request, res: express.Response) => {
  res.send({ data: "getFoo" });
};

const postFoo = (_req: express.Request, res: express.Response) => {
  res.send({ data: "postFoo" });
};

export default {
  getFoo,
  postFoo,
};
