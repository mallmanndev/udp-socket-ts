import os from "os";
import diskusage from 'diskusage';
import {execSync} from 'child_process'

class GetPCInfo {
  public getMemoryUsage() {
    // check free memory
    const freeMemory = os.freemem();
    // check the total memory
    const totalMemory = os.totalmem();

    const usagePercent = parseFloat(((1 - freeMemory / totalMemory) * 100).toFixed(2));

    return parseFloat((usagePercent).toFixed(2));
  }

  public getCPUUsage(): number {
    const cpus = os.cpus();
    const cpu = cpus[cpus.length - 1];

    const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);

    const usage = Object.entries(cpu.times)
        .filter(([key]) => key !== 'idle')
        .reduce((acc, tv) => acc + tv[1], 0);

    const perc = (usage / total) * 100;

    return parseFloat((perc).toFixed(2))
  }

  public getHDUsage(): number {
    const {free, total} = diskusage.checkSync('/')
    const usagePercent = (1 - free / total) * 100;

    return parseFloat((usagePercent).toFixed(2))
  }

  public getIp(): string {
    const networkInterfaces = os.networkInterfaces();

    for (var devName in networkInterfaces) {
        var iface = networkInterfaces[devName];
    
        if (!iface) return '0.0.0.0';

        for (var i = 0; i < iface.length; i++) {
          var alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
            return alias.address;
        }
      }
      return '0.0.0.0';
  }

  public getProcess(): string {
    const processes = execSync('ps aux');

    return processes.toString();
  }
}

export default GetPCInfo;
