export interface wsSoapDTO {
  codcoligada: string;
  consulta: string;
  parametros: any;
}
export interface wsDataServerDTO {
  DataServerName: string;
  PrimaryKey?: string;
  XML?: string;
  Contexto: string;
}

export interface wsProcessDTO {
  ProcessServerName: string;
  strXmlParams: string;
}
