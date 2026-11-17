import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "Sing Up" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "Sing In" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "Sing Out" });
});

export default authRouter;
