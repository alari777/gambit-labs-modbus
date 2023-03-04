export class Modbus {
  private static instance: Modbus;

  public data: number[] | undefined;

  private constructor() {}

  public static init(): Modbus {
    if (!Modbus.instance) {
      Modbus.instance = new Modbus();
    }
    return Modbus.instance;
  }
}
