export const calculateWorker = new ComlinkWorker<typeof import('./worker')>(new URL('./worker', import.meta.url));
