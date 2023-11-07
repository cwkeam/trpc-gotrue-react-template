export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        datasource: import("typeorm").DataSource;
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, TProcRouterRecord>;
export declare const mergeRouters: typeof import("@trpc/server").mergeRouters;
export declare const middleware: <TNewParams extends import("@trpc/server").ProcedureParams<import("@trpc/server").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            datasource: import("typeorm").DataSource;
            userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {};
    _input_out: unknown;
    _input_in: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}, TNewParams>) => import("@trpc/server").MiddlewareBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            datasource: import("typeorm").DataSource;
            userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {};
    _input_out: unknown;
    _input_in: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}, TNewParams>;
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            datasource: import("typeorm").DataSource;
            userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        datasource: import("typeorm").DataSource;
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
}>;
export declare const userProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            datasource: import("typeorm").DataSource;
            userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _meta: object;
    _ctx_out: {
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
        datasource: import("typeorm").DataSource;
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
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
        datasource: import("typeorm").DataSource;
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
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export declare const lectureContentProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            datasource: import("typeorm").DataSource;
            userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
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
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _meta: object;
    _ctx_out: {
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
        datasource: import("typeorm").DataSource;
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
        userAuthClient: import("@supabase/gotrue-js").GoTrueClient;
        datasource: import("typeorm").DataSource;
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
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
