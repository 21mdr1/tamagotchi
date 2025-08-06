export interface IEnv {
  isProd: () => Promise<boolean>,
}

declare global {
  interface Window {
    env: IEnv
  }
}