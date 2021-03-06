import { Base } from '../base';
import { WriteRequestType, WriteAnyRequestType } from './write-request';

/**
  The Clipboard class inherits from the base class which
  implements a interface
  @namespace
*/
export default class Clipboard extends Base {

    /**
      @params { object } writeObj
    */
    public writeText(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-text', writeObj).then(() => undefined);
    }

    /**
      @param { string } type
    */
    public readText(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-text', type)
            .then(({ payload }) => payload.data);
    }

    /**
      @param { object } writeObj
    */
    public writeHtml(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-html', writeObj).then(() => undefined);
    }

    public readHtml(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-html', type)
            .then(({ payload }) => payload.data);
    }

    public writeRtf(writeObj: WriteRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write-rtf', writeObj).then(() => undefined);
    }

    public readRtf(type?: string): Promise<string> {
        return this.wire.sendAction('clipboard-read-rtf', type)
            .then(({ payload }) => payload.data);
    }

    public write(writeObj: WriteAnyRequestType): Promise<void> {
        return this.wire.sendAction('clipboard-write', writeObj).then(() => undefined);
    }

    public getAvailableFormats(type?: string): Promise<Array<string>> {
        return this.wire.sendAction('clipboard-read-formats', type)
            .then(({ payload }) => payload.data);
    }
}
