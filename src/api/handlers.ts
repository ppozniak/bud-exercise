import { rest } from "msw";
import { accounts } from "./data/accounts";
import { transactions } from "./data/transactions";

const isTest = process.env.NODE_ENV === "test";
const getDelay = (delay?: number) => isTest ? 0 : delay; 

const statusCode = 200;

export const handlers = [
  rest.get("/api/accounts", (req, res, ctx) =>
    // instant api
    res(ctx.delay(getDelay()), ctx.status(statusCode), ctx.json(accounts))
  ),
  rest.get("/api/transactions", (req, res, ctx) =>
    // delayed api
    res(ctx.delay(getDelay(2000)), ctx.status(statusCode), ctx.json(transactions))
  ),
];
