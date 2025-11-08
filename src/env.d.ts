interface ImportMetaEnv {
    readonly SUPABASE_URL: string;
    readonly SUPABASE_ANON_KEY: string;
    readonly SPOONACULAR: string;
    readonly FDC_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}