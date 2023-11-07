declare const keyPhraseRoute: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
}>, {
    sampleRoute: import("@trpc/server").BuildProcedure<"query", {
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
        _input_in: {
            sample: string;
        };
        _input_out: {
            sample: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
}>;
export default keyPhraseRoute;
