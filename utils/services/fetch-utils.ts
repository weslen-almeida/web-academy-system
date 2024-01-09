export function buildApiUrl(uri: string) {
    const config = useRuntimeConfig();
    return `${config.public.apiBaseUrl}${uri}`;
}