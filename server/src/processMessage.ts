import knex_config from "../knexfile";
import { v4 as uuidv4 } from 'uuid';

const knex = require('knex')(knex_config.development);

class ProcessMessage {
    public async execute(msg: string): Promise<void> {
        const data = JSON.parse(msg);

        console.log('Salvando dados no banco de dados...')

        try{
            await knex('pacotes').insert({
                id: uuidv4(),
                ip_origem: data.ip,
                ip_destino: '127.0.0.1',
                utilizacao_memoria: data.memory,
                uso_processador: data.cpu,
                uso_disco: data.hd,
                tempo: new Date()
            });
            console.log('Dados salvos com sucesso!');
        }catch{
            console.log('Não foi possível salvar os dados!');
        }
    }
}

export default ProcessMessage;