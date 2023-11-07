import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';
import { GoTrueClient } from '@supabase/gotrue-js';
declare const createContext: (options: CreateFastifyContextOptions | CreateWSSContextFnOptions) => Promise<{
    datasource: import("typeorm").DataSource;
    userAuthClient: GoTrueClient;
    jwt: {
        accessToken: string;
        aud: string;
        exp: number;
        sub: string;
        email: string;
        phone: string;
        app_metadata: any;
        user_metadata: any;
        role: string;
        aal: string;
        amr: {
            method: string;
            timestamp: number;
        }[];
        session_id: string;
    };
} | {
    datasource: import("typeorm").DataSource;
    userAuthClient?: undefined;
    jwt?: undefined;
}>;
export type Context = inferAsyncReturnType<typeof createContext>;
export default createContext;
