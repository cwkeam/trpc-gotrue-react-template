import { GoTrueAdminApi, GoTrueClient } from '@supabase/gotrue-js';
export declare const adminAuthClient: GoTrueAdminApi;
export declare const userAuthClient: GoTrueClient;
export declare const createUserAuthClient: (accessToken?: string) => GoTrueClient;
