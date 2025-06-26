import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class WhatsappApiWaha implements ICredentialType {
  name = 'whatsappApiWaha';
  displayName = 'WhatsApp API Waha';
  documentationUrl = 'https://evolars.com.br/n8n/docs';
  properties: INodeProperties[] = [
    {
      displayName: 'API Base URL',
      name: 'baseUrl',
      type: 'string',
      default: '',
      placeholder: 'https://api.whatsapp.com',
      required: true,
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
    {
      displayName: 'Session Token',
      name: 'sessionToken',
      type: 'string',
      default: 'default',
      required: true,
    },
  ];
}
