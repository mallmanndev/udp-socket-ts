import dgram from 'dgram';
require("dotenv").config();

const { UDP_HOST, UDP_PORT } = process.env;

class SendUdpMessage {

    private generateBuffer(
        memory: number,
        cpu: number,
        hd: number,
        ip: string,
        processes: string
    ): Buffer {
        const jsonData = JSON.stringify({
            memory,
            cpu,
            hd,
            ip
        })

        return Buffer.from(jsonData);
    }

    public execute(
        memory: number,
        cpu: number,
        hd: number,
        ip: string,
        processes: string
    ): void {
        const client = dgram.createSocket('udp4');
        console.log('Enviando mensagens...')
        const message = this.generateBuffer(memory, cpu, hd, ip, processes);

        client.send(message, parseInt(UDP_PORT || '0'), UDP_HOST, (error) => {
            if(error){
                console.log(error);
                client.close(); 
            }else {
                console.log('Dados enviados com sucesso!!!')
            }
        })
    }
}

export default SendUdpMessage;
