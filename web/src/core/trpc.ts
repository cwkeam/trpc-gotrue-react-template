import type { AppRouter } from "@backend/app";
import { createTRPCReact } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

const trpc = createTRPCReact<AppRouter>();
export default trpc;
