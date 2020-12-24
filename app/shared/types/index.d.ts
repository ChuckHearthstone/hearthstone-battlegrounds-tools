import CoreManager from '@main/windows/CoreManager';
import LogHandlerManager from '@main/windows/LogHandlerManager';
import SuspensionManager from '@main/windows/SuspensionManager';
import Store from '@shared/store/store';
import type { Hero } from './hero';
import type { MinionProps, Minion } from './minion';

declare module '*.jpg' {
  const value: any;
  export = value;
}
declare module '*.jpeg' {
  const value: any;
  export = value;
}
declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.gif' {
  const value: any;
  export = value;
}
declare module '*.webp' {
  const value: any;
  export = value;
}
declare module '*.ico' {
  const value: any;
  export = value;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      managers: {
        coreManager: CoreManager | null;
        logHandlerManager: LogHandlerManager | null;
        suspensionManager: SuspensionManager | null;
      };
      store: Store<any>;
    }
  }
}

export { Hero, MinionProps, Minion };

export interface LogData<S = string, R = any> {
  type: 'box' | 'state';
  date: string;
  state: S;
  original: string;
  result: R;
}
