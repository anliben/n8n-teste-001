import {
    IExecuteFunctions,
    NodeConnectionTypes,
} from 'n8n-workflow';

import {
    INodeType,
    INodeTypeDescription,
    INodeExecutionData,
} from 'n8n-workflow';

const WHATSAPP_CREDENTIALS_TYPE = 'whatsappApiWaha';

export class WhatsAppIntegration implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'WhatsApp Integration',
        name: 'whatsAppIntegration',
        icon: 'fa:whatsapp',
        group: ['output'],
        version: 1,
        description: 'Interage com a API do WhatsApp customizada',
        defaults: {
            name: 'WhatsApp Integration',
        },
        inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [
            {
                name: WHATSAPP_CREDENTIALS_TYPE,
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Mensagem',
                name: 'message',
                type: 'string',
                default: '',
                required: true,
                description: 'Mensagem que será enviada',
            },
            {
                displayName: 'Telefone',
                name: 'phone',
                type: 'string',
                default: '',
                required: true,
                description: 'Número de telefone com DDD e código do país',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();

        const credentials = await this.getCredentials(WHATSAPP_CREDENTIALS_TYPE);
        const url_site = credentials.baseUrl as string;
        const apiKey = credentials.apiKey as string;
        const session = credentials.sessionToken as string;

        const returnData: INodeExecutionData[] = [];

        for (let i = 0; i < items.length; i++) {
            const chatId = this.getNodeParameter('phone', i) as string;
            const text = this.getNodeParameter('message', i) as string;

            try {

                const response = await this.helpers.request({
                    method: 'POST',
                    url: `${url_site}/sendText`,
                    headers: {
                        'X-Api-Key': apiKey,
                    },
                    body: {
                        chatId,
                        reply_to: null,
                        text,
                        linkPreview: false,
                        linkPreviewHighQuality: false,
                        session,
                    },
                    json: true,
                });

                returnData.push({
                    json: {
                        success: true,
                        response,
                    },
                });

            } catch (error: any) {
                returnData.push({
                    json: error
                });
            }

        }

        return [returnData];
    }
}
