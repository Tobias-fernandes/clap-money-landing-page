// Legal documents published at /privacidade and /termos.
//
// This file is the only copy of the texts: the app (app.clapmoney.com.br)
// links to these pages instead of keeping its own. Keep them in sync with
// what the app does, including its cookie notice (Configurações ›
// Preferências › Lembrar preferências neste aparelho).
//
// TODO(legal): BEFORE PUBLISHING, have a lawyer review both documents and
// replace LEGAL_CONTACT_EMAIL with a real, monitored mailbox.

export interface LegalSection {
  /** Anchor of the section in the URL (#seus-direitos). */
  id: string;
  title: string;
  paragraphs: string[];
  /** Optional bullet list, shown after the paragraphs. */
  items?: string[];
}

export interface LegalDocumentContent {
  title: string;
  /** ISO date of the last change ("Última atualização"). */
  updatedAt: string;
  /** Short plain-language summary shown before the sections. */
  summary: string;
  sections: LegalSection[];
}

export const LEGAL_CONTACT_EMAIL = "privacidade@clapmoney.com.br"; // TODO(legal): real mailbox.

/** Date of the current version of both documents (ISO). */
export const LEGAL_UPDATED_AT = "2026-10-06";

export const PRIVACY_POLICY: LegalDocumentContent = {
  title: "Política de Privacidade",
  updatedAt: LEGAL_UPDATED_AT,
  summary:
    "Em resumo: usamos seus dados só para fazer a ClapMoney funcionar para você. Não vendemos seus dados, não mostramos anúncios e nunca pedimos acesso à sua conta bancária. Você pode exportar ou apagar tudo quando quiser.",
  sections: [
    {
      id: "quem-somos",
      title: "1. Sobre esta política",
      paragraphs: [
        "Esta política explica quais dados pessoais a ClapMoney coleta, por que coleta, com quem compartilha e quais são os seus direitos. Ela vale para o site e para o aplicativo web da ClapMoney.",
        "A ClapMoney é a controladora dos dados pessoais tratados no serviço, nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018).",
      ],
    },
    {
      id: "dados-coletados",
      title: "2. Dados que coletamos",
      paragraphs: [
        "Coletamos apenas os dados que você nos informa e os mínimos necessários para o serviço funcionar com segurança:",
      ],
      items: [
        "Dados da conta: nome, e-mail e senha.",
        "Foto de perfil, se você decidir enviar uma.",
        "Dados financeiros que você registra ou importa: entradas, saídas, parcelamentos, cobranças mensais, categorias, valores, datas, descrições e observações.",
        "Preferências: moeda, início do mês financeiro, meta de gastos, tela inicial e escolhas de notificação.",
        "Registros de acesso (endereço IP, data e hora), que a lei nos obriga a guardar.",
        "No site clapmoney.com.br, só se você permitir: dados de navegação coletados pelo Google Analytics, como páginas vistas, tempo de visita, tipo de aparelho e navegador e região aproximada. Esses dados não identificam você pelo nome.",
      ],
    },
    {
      id: "o-que-nao-coletamos",
      title: "3. O que não coletamos",
      paragraphs: [
        "Não pedimos acesso ao seu banco nem senhas bancárias e não coletamos dados de cartões de pagamento.",
        "Quando você importa um extrato em OFX, o arquivo é lido apenas para extrair as transações que você revisa e confirma. O arquivo em si não fica armazenado.",
        "Os lançamentos recorrentes (parcelamentos e cobranças mensais) são apenas anotações: a ClapMoney não faz pagamentos nem cobranças em seu nome.",
      ],
    },
    {
      id: "como-usamos",
      title: "4. Como e por que usamos seus dados",
      paragraphs: [
        "Usamos seus dados para as finalidades abaixo, cada uma com a base legal prevista na LGPD:",
      ],
      items: [
        "Prestar o serviço: guardar suas transações, calcular saldos, totais e gráficos e mostrar seus dados quando você entra (execução de contrato, art. 7º, V).",
        "Enviar os avisos que você ativou, como o resumo semanal, os lembretes e os alertas de meta (consentimento, art. 7º, I). Você pode desligá-los em Configurações › Notificações.",
        "Enviar mensagens necessárias sobre a conta, como a recuperação de senha e a confirmação de troca de e-mail (execução de contrato, art. 7º, V).",
        "Proteger sua conta e o serviço contra acessos indevidos e fraudes (legítimo interesse, art. 7º, IX).",
        "Cumprir obrigações legais, como a guarda dos registros de acesso (art. 7º, II).",
        "Medir quantas pessoas visitam o site clapmoney.com.br e como ele é usado, para melhorá-lo, com o Google Analytics (consentimento, art. 7º, I). Você pode retirar o consentimento em “Preferências de cookies”, no rodapé do site.",
      ],
    },
    {
      id: "compartilhamento",
      title: "5. Com quem compartilhamos",
      paragraphs: [
        "Não vendemos, alugamos nem compartilhamos seus dados para fins de publicidade.",
        "Seus dados só são acessados por empresas que nos ajudam a operar o serviço (como hospedagem e envio de e-mails), sob contrato e apenas para essa finalidade, ou por autoridades, quando houver ordem judicial ou obrigação legal.",
        "Se você permitir os cookies de estatísticas no site, os dados de navegação descritos acima são tratados pelo Google (Google Analytics) como operador, e podem ser processados em servidores fora do Brasil, com as garantias previstas na LGPD (art. 33). Desligamos o compartilhamento desses dados para anúncios e os sinais do Google.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies e armazenamento no navegador",
      paragraphs: [
        "No site clapmoney.com.br e no aplicativo, na primeira visita, mostramos um aviso para você escolher entre “Aceitar todos” e “Só essenciais”. Guardamos sua resposta num cookie por até 12 meses; se esta política mudar o que armazenamos, perguntamos de novo.",
        "Você pode mudar de ideia quando quiser: no site, em “Preferências de cookies”, no rodapé; no aplicativo, em Configurações › Preferências › Lembrar preferências neste aparelho. Se você retirar a permissão de estatísticas, apagamos os cookies do Google Analytics do seu navegador.",
        "Não usamos cookies de publicidade.",
      ],
      items: [
        "Essenciais (sempre ativos): o cookie de sessão, que mantém você conectado com segurança, e o cookie que guarda a sua escolha neste aviso. Sem eles o serviço não funciona, por isso não dependem de consentimento.",
        "Preferências (só no aplicativo e só com a sua permissão): o tema escolhido (claro, escuro ou do sistema), guardado no navegador para valer nas próximas visitas. Se você escolher “Só essenciais”, apagamos essa informação e o tema volta ao padrão quando você fecha o aplicativo.",
        "Estatísticas (só no site clapmoney.com.br e só com a sua permissão): os cookies _ga e _ga_<identificador> do Google Analytics, que contam visitas e páginas vistas. Eles duram até 13 meses. Sem a sua permissão, o Google Analytics nem é carregado.",
      ],
    },
    {
      id: "seguranca",
      title: "7. Segurança",
      paragraphs: [
        "Seus dados são transmitidos com criptografia (HTTPS) e ficam vinculados apenas à sua conta. Senhas são guardadas em formato protegido, nunca em texto puro.",
        "Nenhum sistema é totalmente imune a falhas. Se um incidente puder trazer risco relevante a você, avisaremos você e a Autoridade Nacional de Proteção de Dados (ANPD), como determina a LGPD.",
      ],
    },
    {
      id: "retencao",
      title: "8. Por quanto tempo guardamos",
      paragraphs: [
        "Guardamos seus dados enquanto sua conta existir. Quando você usa “Apagar todas as transações”, o histórico financeiro é removido; quando você exclui a conta, todos os seus dados são apagados.",
        "Os registros de acesso são mantidos por 6 meses, como exige o Marco Civil da Internet (art. 15 da Lei nº 12.965/2014), e depois são descartados.",
        "Os dados de navegação do Google Analytics são guardados pelo Google por, no máximo, 14 meses e depois apagados.",
      ],
    },
    {
      id: "seus-direitos",
      title: "9. Seus direitos",
      paragraphs: [
        "A LGPD (art. 18) garante a você, entre outros, os direitos de:",
      ],
      items: [
        "Confirmar se tratamos seus dados e acessá-los.",
        "Corrigir dados incompletos ou desatualizados: em Configurações › Perfil.",
        "Levar seus dados para outro serviço (portabilidade): em Configurações › Dados e conta, exporte suas transações em CSV ou PDF.",
        "Eliminar seus dados: em Configurações › Dados e conta, apague as transações ou exclua a conta.",
        "Saber com quem compartilhamos seus dados e revogar consentimentos dados antes.",
      ],
    },
    {
      id: "menores",
      title: "10. Menores de idade",
      paragraphs: [
        "A ClapMoney é destinada a pessoas com 18 anos ou mais. Se você souber que um menor criou uma conta sem autorização dos responsáveis, fale com a gente para que ela seja removida.",
      ],
    },
    {
      id: "alteracoes",
      title: "11. Alterações nesta política",
      paragraphs: [
        "Podemos atualizar esta política para refletir mudanças no serviço ou na lei. A data da última atualização fica no topo desta página e, se a mudança for relevante, avisaremos você por e-mail ou no aplicativo antes de ela valer.",
      ],
    },
    {
      id: "contato",
      title: "12. Contato e encarregado de dados",
      paragraphs: [
        `Para exercer seus direitos, tirar dúvidas ou falar com nosso encarregado pelo tratamento de dados pessoais, escreva para ${LEGAL_CONTACT_EMAIL}. Respondemos em até 15 dias.`,
        "Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocumentContent = {
  title: "Termos de Uso",
  updatedAt: LEGAL_UPDATED_AT,
  summary:
    "Em resumo: a ClapMoney é uma ferramenta para você anotar e acompanhar seu dinheiro. Você é dono dos seus dados, os números dependem do que você registra e o app não substitui um banco nem um consultor financeiro.",
  sections: [
    {
      id: "aceitacao",
      title: "1. Aceitação",
      paragraphs: [
        "Estes termos regulam o uso da ClapMoney. Ao criar uma conta ou usar o serviço, você concorda com eles e com a Política de Privacidade. Se não concordar, não use o serviço.",
      ],
    },
    {
      id: "o-servico",
      title: "2. O que é a ClapMoney",
      paragraphs: [
        "A ClapMoney é um aplicativo de finanças pessoais em que você registra suas entradas e saídas, à mão ou importando o extrato do seu banco em OFX, e acompanha saldo, gastos por categoria, metas e lançamentos recorrentes.",
        "A ClapMoney não é banco nem instituição de pagamento: não guarda dinheiro, não faz pagamentos ou transferências e não se conecta às suas contas bancárias. Parcelamentos e cobranças mensais registrados no app são apenas anotações.",
      ],
    },
    {
      id: "conta",
      title: "3. Sua conta",
      paragraphs: [
        "Para usar a ClapMoney, você precisa criar uma conta. Ao fazer isso, você se compromete a:",
      ],
      items: [
        "Ter 18 anos ou mais.",
        "Informar um nome e um e-mail verdadeiros e mantê-los atualizados.",
        "Manter sua senha em segredo e nos avisar se suspeitar de uso indevido da sua conta.",
        "Usar a conta apenas para você: cada pessoa deve ter a sua.",
      ],
    },
    {
      id: "uso-permitido",
      title: "4. Uso permitido",
      paragraphs: ["Você não pode usar a ClapMoney para:"],
      items: [
        "Praticar ou registrar atividades ilegais.",
        "Tentar acessar contas ou dados de outras pessoas, ou partes do sistema que não são públicas.",
        "Sobrecarregar o serviço, por exemplo com acessos automatizados em massa.",
        "Copiar, revender ou explorar comercialmente o serviço sem nossa autorização.",
      ],
    },
    {
      id: "seus-dados",
      title: "5. Seus dados são seus",
      paragraphs: [
        "Tudo o que você registra continua sendo seu. Você nos autoriza a guardar e processar esses dados apenas para prestar o serviço, como descrito na Política de Privacidade.",
        "Você pode exportar suas transações em CSV ou PDF e apagar seus dados ou sua conta a qualquer momento, em Configurações › Dados e conta.",
      ],
    },
    {
      id: "gratuidade",
      title: "6. Preço e anúncios",
      paragraphs: [
        "A ClapMoney oferece um plano gratuito e planos pagos, com preços e recursos informados na página de planos antes da contratação. Nada é cobrado sem a sua concordância expressa.",
        "A ClapMoney não exibe anúncios.",
      ],
    },
    {
      id: "sem-aconselhamento",
      title: "7. Não é aconselhamento financeiro",
      paragraphs: [
        "Saldos, totais, taxas de economia, gráficos e alertas são calculados a partir das informações que você registra. Se um lançamento estiver errado ou faltando, os números também estarão.",
        "A ClapMoney não oferece aconselhamento financeiro, contábil, fiscal ou de investimentos. As decisões sobre o seu dinheiro são suas.",
      ],
    },
    {
      id: "disponibilidade",
      title: "8. Disponibilidade e mudanças no serviço",
      paragraphs: [
        "Trabalhamos para manter a ClapMoney sempre no ar, mas ela pode ficar indisponível por manutenção ou por falhas fora do nosso controle. Também podemos mudar, adicionar ou retirar recursos para melhorar o serviço.",
        "Recomendamos exportar seus dados de tempos em tempos se quiser manter uma cópia própria.",
      ],
    },
    {
      id: "responsabilidade",
      title: "9. Limitação de responsabilidade",
      paragraphs: [
        "Na máxima extensão permitida pela lei, incluindo o Código de Defesa do Consumidor, a ClapMoney não responde por perdas causadas por informações registradas de forma incorreta, por decisões tomadas com base nos números do app ou pelo uso da sua conta por terceiros a quem você deu acesso à sua senha.",
      ],
    },
    {
      id: "encerramento",
      title: "10. Encerramento",
      paragraphs: [
        "Você pode excluir sua conta quando quiser, em Configurações › Dados e conta. Podemos suspender ou encerrar contas que violem estes termos; quando possível, avisaremos antes e daremos a chance de exportar seus dados.",
      ],
    },
    {
      id: "alteracoes",
      title: "11. Alterações nestes termos",
      paragraphs: [
        "Podemos atualizar estes termos. A data da última atualização fica no topo desta página e, se a mudança for relevante, avisaremos você por e-mail ou no aplicativo antes de ela valer. Continuar usando o serviço depois disso significa que você concorda com a nova versão.",
      ],
    },
    {
      id: "lei-e-foro",
      title: "12. Lei aplicável e foro",
      paragraphs: [
        "Estes termos seguem as leis da República Federativa do Brasil. Eventuais disputas serão resolvidas no foro do domicílio do usuário, como prevê o Código de Defesa do Consumidor.",
      ],
    },
    {
      id: "contato",
      title: "13. Contato",
      paragraphs: [
        `Dúvidas sobre estes termos? Escreva para ${LEGAL_CONTACT_EMAIL}.`,
      ],
    },
  ],
};
