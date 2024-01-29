import type { SyncTransformer } from '@jest/transform';
type IfdefConfig = {
    readonly 'ifdef-triple-slash': boolean;
    readonly 'ifdef-verbose': boolean;
    readonly 'ifdef-fill-with-blanks': boolean;
    readonly 'ifdef-uncomment-prefix': string;
} & Record<string, string>;
declare const IfdefTransformer: SyncTransformer<IfdefConfig>;
export default IfdefTransformer;
