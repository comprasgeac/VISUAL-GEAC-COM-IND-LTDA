export enum AppState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface GeneratedImageResponse {
  imageUrl: string | null;
  error?: string;
}

export const DEFAULT_PROMPT = `Crie uma cena de escritório de alta tecnologia e moderna, bem iluminada, com grandes janelas que oferecem uma vista panorâmica de uma paisagem urbana futurista. Dentro do escritório, baseado nos funcionários de escritório da foto que estão sentados em mesas de trabalho, concentrados em seus monitores. No entanto, a cena é interrompida pela presença de três ou quatro alienígenas humanoides cinzentos (Grey aliens), altos, com ternos de negócios elegantes e futuristas. Os alienígenas estão ativamente interagindo com os funcionários, entregando-lhes objetos holográficos brilhantes, esferas de energia complexas e cubos luminosos azuis de tecnologia avançada, que representam "projetos" ou "briefings". Os funcionários parecem uma mistura de confusão, fascínio e determinação profissional, aceitando os pedidos de outro mundo. Pelo lado de fora das grandes janelas, um enorme objeto voador não identificado (OVNI) em forma de disco está pairando sobre a cidade, reforçando o cenário de "outro mundo". A iluminação é dramática, com um foco nas luzes de néon azuladas da tecnologia alienígena contrastando com a luz suave do escritório. Estilo: Fotorrealista, 8k, cinematográfico, iluminação volumétrica, alto detalhe.`;
