import { QueryFailedError } from "typeorm";

export class MessageHandler {
  static handleMessage(field: string, error: QueryFailedError): string {
    const sqlMessage = error.message.toLowerCase();
    if (sqlMessage.includes('column')) {
      const startIndex = sqlMessage.indexOf("column '") + "column '".length;
      const endIndex = sqlMessage.indexOf("'", startIndex);
      const fieldName = error.message.substring(startIndex, endIndex);
      return `Erro ao salvar ${field}. Verifique o campo '${fieldName}'.`;
    }
    return `Erro ao salvar ${field}. Detalhes do erro: ${error.message}`;
  }
}