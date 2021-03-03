export interface IApplication {
    readonly port?: number;
    readonly abbreviation: string;
    readonly title?: string;
    readonly description?: string;
    readonly environment: 'develop' | 'homolog' | 'production';
    readonly version: string;
    readonly uriPrefix: string;
}
