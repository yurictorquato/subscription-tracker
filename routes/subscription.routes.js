import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "READ all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "READ subscription by ID" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "READ all user subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "READ upcoming renewals" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription by ID" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscription by ID" });
});

export default subscriptionRouter;
