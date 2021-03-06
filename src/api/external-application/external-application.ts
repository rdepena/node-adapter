import { Base, Reply } from '../base';
import { Identity } from '../../identity';

/**
  @classdes Inherits from the base class which implements a interface
  @class
*/
class ExternalApplication extends Base {
    public identity: Identity;
    public wrap(uuid: string): ExternalApplication {
        const wrapped = new ExternalApplication(this.wire);
        wrapped.identity = { uuid };
        return wrapped;
    }
}

interface ExternalApplication {
    addEventListener(type: 'connected', listener: (data: Reply<'externalapplication', 'connected'>) => Promise<void>): this;
    addEventListener(type: 'disconnected', listener: (data: Reply<'externalapplication', 'disconnected'>) => Promise<void>): this;
}

export default ExternalApplication;
