require("dotenv").config();

const { POOLING_TIME_IN_SECONDS } = process.env;

const time =  parseInt(POOLING_TIME_IN_SECONDS || '5') || 5;

class Pooling {
  public execute(func: () => void): void {
    func();
    setInterval(() => { this.execute(func) }, time * 1000);
  }
}

export default Pooling;
