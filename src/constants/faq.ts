// Questions of "Perguntas frequentes". Also published as FAQPage JSON-LD, so
// every answer must describe what the app really does.

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "Preciso informar a senha do meu banco?",
    answer:
      "Não. O ClapMoney não se conecta ao seu banco. Você exporta o extrato em OFX no app ou no internet banking e envia o arquivo. Se preferir, também dá para lançar tudo à mão.",
  },
  {
    question: "Quais bancos funcionam?",
    answer:
      "Qualquer banco que exporte o extrato no formato OFX, o que quase todos fazem. Procure em Extrato, escolha o período e toque em Exportar ou Compartilhar.",
  },
  {
    question: "O arquivo do extrato fica guardado?",
    answer:
      "Não. O arquivo é lido apenas para extrair as transações e não fica armazenado. Antes de confirmar, você revisa cada linha, troca categorias e vê o que já existia.",
  },
  {
    question: "Como funcionam as parcelas e as mensalidades?",
    answer:
      "No parcelado, você informa o valor total e o número de parcelas (até 72); os centavos que sobram da divisão vão na primeira. Na mensal, o mesmo valor se repete todo mês até você encerrar. As duas já aparecem nos meses seguintes e entram no saldo previsto.",
  },
  {
    question: "Tem aplicativo para celular?",
    answer:
      "O ClapMoney funciona no navegador do celular, do tablet e do computador, em tema claro ou escuro. Não precisa instalar nada.",
  },
  {
    question: "Posso levar meus dados embora?",
    answer:
      "Sim. Exporte suas transações em CSV, pronto para planilhas em português, ou em PDF. E você pode apagar todas as transações ou excluir a conta quando quiser.",
  },
  {
    question: "Funciona com outras moedas?",
    answer: "Sim. Você escolhe entre real, dólar e euro nas preferências.",
  },
];
