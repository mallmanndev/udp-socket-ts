import dgram from 'dgram';
import { Buffer } from 'buffer';
import GetPCInfo from './src/GetPCInfo';
import Pooling from './src/Pooling';
import SendUdpMessage from './src/SendUdpMessage'

const pooling = new Pooling();
const getPCInfo = new GetPCInfo();
const udpMessage = new SendUdpMessage();

pooling.execute(() => {
    const memoryUsage = getPCInfo.getMemoryUsage()
    const cpuUsage = getPCInfo.getCPUUsage();
    const hdPercent = getPCInfo.getHDUsage();
    const ip = getPCInfo.getIp();


    const processes = getPCInfo.getProcess();

    udpMessage.execute(memoryUsage, cpuUsage, hdPercent, ip, processes)
})

