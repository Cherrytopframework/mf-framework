
    export type RemoteKeys = 'aichat/App';
    type PackageType<T> = T extends 'aichat/App' ? typeof import('aichat/App') :any;