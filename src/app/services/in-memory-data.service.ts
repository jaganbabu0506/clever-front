import { Status } from 'src/app/models/enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Role } from 'src/app/models/enums/role';
import { Progress } from '../models/enums/progress';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        title: 'Lançamento do eCommerce',
        description:
          'Uma loja virtual da marca será lançada, focada no público feminino',
        dueDate: '2021-11-01',
        createdAt: Date.now,
        progress: Progress.TO_DO,
      },
      {
        id: 2,
        title: 'Refatoração do Sistema de Pagamento',
        description: 'Novo banco de dados e servidor',
        dueDate: '2021-10-05',
        createdAt: Date.now,
        progress: Progress.IN_PROGRESS,
      },
      {
        id: 3,
        title: 'Criação de Ferramenta de Email',
        description:
          'Nova ferramenta para ajudar no disparo de emails de marketing',
        dueDate: '2021-11-21',
        createdAt: Date.now,
        progress: Progress.DONE,
      },
      {
        id: 4,
        title: 'Nova funcionalidade de chatbot',
        description: 'Desenvolver chatbot para loja virtual',
        dueDate: '2021-12-31',
        createdAt: Date.now,
        progress: Progress.IN_PROGRESS,
      },
      {
        id: 5,
        title: 'Desenvolvimento de API de produtos',
        description: 'Com token de autenticação',
        dueDate: '2022-01-14',
        createdAt: Date.now,
        progress: Progress.TO_DO,
      },
    ];
    const sprints = [
      {
        id: 1,
        title: 'Criar novo Manual e Identidade de Marca',
        description: 'Incluir designs, tipografia, aplicações e logos',
        status: Status.TO_DO,
        project: {
          id: 1,
          title: 'Lançamento do eCommerce',
          description:
            'Uma loja virtual da marca será lançada, focada no público feminino',
          dueDate: '2021-11-01',
          createdAt: Date.now,
        },
        dueDate: '2021-10-10',
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Desenvolver integração com boleto',
        description: 'Deve conter rotas, documentação e possibilitar filtros',
        status: Status.IN_PROGRESS,
        project: {
          id: 2,
          title: 'Refatoração do Sistema de Pagamento',
          description: 'Novo banco de dados e servidor',
          dueDate: '2021-10-05',
          createdAt: Date.now,
        },
        dueDate: '2021-10-24',
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Atualizar dashboard com métricas de serviços',
        description: 'A nova área do dashboard deve conter dados atualizados',
        status: Status.DONE,
        project: {
          id: 3,
          title: 'Criação de Ferramenta de Email',
          description:
            'Nova ferramenta para ajudar no disparo de emails de marketing',
          dueDate: '2021-11-21',
          createdAt: Date.now,
        },
        dueDate: '2021-11-14',
        createdAt: Date.now,
      },
      {
        id: 4,
        title: 'Integração com API de CEPs',
        description: 'Fazer conexão e autocompletar busca por CEP',
        status: Status.IN_PROGRESS,
        project: {
          id: 1,
          title: 'Lançamento do eCommerce',
          description:
            'Uma loja virtual da marca será lançada, focada no público feminino',
          dueDate: '2021-11-01',
          createdAt: Date.now,
        },
        dueDate: '2021-10-25',
        createdAt: Date.now,
      },
      {
        id: 5,
        title: 'Preparar produtos para publicação',
        description:
          'Planilha de produtos, fotos profissionais e descrições detalhadas',
        status: Status.DONE,
        project: {
          id: 1,
          title: 'Lançamento do eCommerce',
          description:
            'Uma loja virtual da marca será lançada, focada no público feminino',
          dueDate: '2021-11-01',
          createdAt: Date.now,
        },
        dueDate: '2021-10-10',
        createdAt: Date.now,
      },
      {
        id: 6,
        title: 'Criar design responsivo pra IE11',
        description: 'Usar polyfills de Angular',
        status: Status.TO_DO,
        project: {
          id: 1,
          title: 'Lançamento do eCommerce',
          description:
            'Uma loja virtual da marca será lançada, focada no público feminino',
          dueDate: '2021-11-01',
          createdAt: Date.now,
        },
        dueDate: '2021-11-01',
        createdAt: Date.now,
      },
      {
        id: 7,
        title: 'Criar autenticação com login Google',
        description: 'Deve conter token gerenciável via localstorage',
        status: Status.DONE,
        project: {
          id: 2,
          title: 'Refatoração do Sistema de Pagamento',
          description: 'Novo banco de dados e servidor',
          dueDate: '2021-10-05',
          createdAt: Date.now,
        },
        dueDate: '2021-10-05',
        createdAt: Date.now,
      },
      {
        id: 8,
        title: 'Trocar banco de dados',
        description: 'Refatoração e substituição do database secundário',
        status: Status.TO_DO,
        project: {
          id: 2,
          title: 'Refatoração do Sistema de Pagamento',
          description: 'Novo banco de dados e servidor',
          dueDate: '2021-10-05',
          createdAt: Date.now,
        },
        dueDate: '2021-10-20',
        createdAt: Date.now,
      },
      {
        id: 9,
        title: 'Remoção de contatos desatualizados',
        description: 'Atualizar lista de contatos fazendo limpeza de dados',
        status: Status.IN_PROGRESS,
        project: {
          id: 3,
          title: 'Criação de Ferramenta de Email',
          description:
            'Nova ferramenta para ajudar no disparo de emails de marketing',
          dueDate: '2021-11-21',
          createdAt: Date.now,
        },
        dueDate: '2021-11-12',
        createdAt: Date.now,
      },
      {
        id: 10,
        title: 'Integrar API com WhatsApp',
        description: 'Desenvolvimento de bot para mobile usando número e app',
        status: Status.IN_PROGRESS,
        project: {
          id: 4,
          title: 'Nova funcionalidade de chatbot',
          description: 'Desenvolver chatbot para loja virtual',
          dueDate: '2021-12-31',
          createdAt: Date.now,
        },
        dueDate: '2021-12-01',
        createdAt: Date.now,
      },
      {
        id: 11,
        title: 'Criar respostas prontas e personalizadas',
        description: 'Redação baseada em dados e pesquisa com consumidor',
        status: Status.TO_DO,
        project: {
          id: 4,
          title: 'Nova funcionalidade de chatbot',
          description: 'Desenvolver chatbot para loja virtual',
          dueDate: '2021-12-31',
          createdAt: Date.now,
        },
        dueDate: '2021-12-07',
        createdAt: Date.now,
      },
      {
        id: 12,
        title: 'Desenvolver nova identidade visual',
        description: 'Basear-se nas pesquisas realizadas e acessibilidade',
        status: Status.TO_DO,
        project: {
          id: 4,
          title: 'Nova funcionalidade de chatbot',
          description: 'Desenvolver chatbot para loja virtual',
          dueDate: '2021-12-31',
          createdAt: Date.now,
        },
        dueDate: '2021-12-20',
        createdAt: Date.now,
      },
      {
        id: 13,
        title: 'Listagem e apuração de produtos por categorias',
        description: 'Usar os diversos bancos de dados disponíveis',
        status: Status.TO_DO,
        project: {
          id: 5,
          title: 'Desenvolvimento de API de produtos',
          description: 'Com token de autenticação',
          dueDate: '2022-01-14',
          createdAt: Date.now,
        },
        dueDate: '2021-12-04',
        createdAt: Date.now,
      },
      {
        id: 14,
        title: 'Desenvolver integração com Shopify',
        description:
          'Basea-se na documentação feita pela equipe de marketing e TI',
        status: Status.TO_DO,
        project: {
          id: 5,
          title: 'Desenvolvimento de API de produtos',
          description: 'Com token de autenticação',
          dueDate: '2022-01-14',
          createdAt: Date.now,
        },
        dueDate: '2021-12-12',
        createdAt: Date.now,
      },
      {
        id: 15,
        title: 'Limpeza e atualização dos dados de produtos',
        description:
          'Deverá ser criado um novo banco de dados a partir desta atualização',
        status: Status.DONE,
        project: {
          id: 5,
          title: 'Desenvolvimento de API de produtos',
          description: 'Com token de autenticação',
          dueDate: '2022-01-14',
          createdAt: Date.now,
        },
        dueDate: '2021-10-12',
        createdAt: Date.now,
      },
    ];
    const tasks = [
      {
        id: 1,
        description: 'Aprovar design da campanha principal',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 1,
          title: 'Criar novo Manual e Identidade de Marca',
          description: 'Incluir designs, tipografia, aplicações e logos',
          status: Status.TO_DO,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description:
              'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: '2021-11-01',
            createdAt: Date.now,
          },
          dueDate: '2021-10-10',
          createdAt: Date.now,
        },
        dueDate: '2021-10-12',
        createdAt: Date.now,
      },
      {
        id: 2,
        description: 'Refatorar rotas da API',
        isUrgent: false,
        isDone: false,
        sprint: {
          id: 2,
          title: 'Desenvolver integração com boleto',
          description: 'Deve conter rotas, documentação e possibilitar filtros',
          status: Status.IN_PROGRESS,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-11-04',
        createdAt: Date.now,
      },
      {
        id: 3,
        description: 'Criar autorização de login',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 3,
          title: 'Atualizar dashboard com métricas de serviços',
          description: 'A nova área do dashboard deve conter dados atualizados',
          status: Status.DONE,
          project: {
            id: 3,
            title: 'Criação de Ferramenta de Email',
            description:
              'Nova ferramenta para ajudar no disparo de emails de marketing',
            dueDate: '2021-11-21',
            createdAt: Date.now,
          },
          dueDate: '2021-11-14',
          createdAt: Date.now,
        },
        dueDate: '2021-12-19',
        createdAt: Date.now,
      },
      {
        id: 4,
        description: 'Revogar token para acessar database',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 9,
          title: 'Remoção de contatos desatualizados',
          description: 'Atualizar lista de contatos fazendo limpeza de dados',
          status: Status.IN_PROGRESS,
          project: {
            id: 3,
            title: 'Criação de Ferramenta de Email',
            description:
              'Nova ferramenta para ajudar no disparo de emails de marketing',
            dueDate: '2021-11-21',
            createdAt: Date.now,
          },
          dueDate: '2021-11-14',
          createdAt: Date.now,
        },
        dueDate: '2021-10-19',
        createdAt: Date.now,
      },
      {
        id: 5,
        description: 'Criar autenticação usando OAuth',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 2,
          title: 'Desenvolver integração com boleto',
          description: 'Deve conter rotas, documentação e possibilitar filtros',
          status: Status.IN_PROGRESS,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-10-20',
        createdAt: Date.now,
      },
      {
        id: 6,
        description: 'Apresentar resultados da pesquisa de UX',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 1,
          title: 'Criar novo Manual e Identidade de Marca',
          description: 'Incluir designs, tipografia, aplicações e logos',
          status: Status.TO_DO,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description:
              'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: '2021-11-01',
            createdAt: Date.now,
          },
          dueDate: '2021-10-10',
          createdAt: Date.now,
        },
        dueDate: '2021-10-05',
        createdAt: Date.now,
      },
      {
        id: 7,
        description: 'Reunião com equipe da ViaCEP',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 4,
          title: 'Integração com API de CEPs',
          description: 'Fazer conexão e autocompletar busca por CEP',
          status: Status.IN_PROGRESS,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description:
              'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: '2021-11-01',
            createdAt: Date.now,
          },
          dueDate: '2021-10-10',
          createdAt: Date.now,
        },
        dueDate: '2021-10-29',
        createdAt: Date.now,
      },
      {
        id: 8,
        description: 'Tirar fotos profissionais dos produtos',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 5,
          title: 'Preparar produtos para publicação',
          description:
            'Planilha de produtos, fotos profissionais e descrições detalhadas',
          status: Status.DONE,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description:
              'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: '2021-11-01',
            createdAt: Date.now,
          },
          dueDate: '2021-10-10',
          createdAt: Date.now,
        },
        dueDate: '2021-10-30',
        createdAt: Date.now,
      },
      {
        id: 9,
        description: 'Atualizar board do Figma para novo draft',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 6,
          title: 'Criar design responsivo pra IE11',
          description: 'Usar polyfills de Angular',
          status: Status.TO_DO,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description:
              'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: '2021-11-01',
            createdAt: Date.now,
          },
          dueDate: '2021-10-10',
          createdAt: Date.now,
        },
        dueDate: '2021-10-05',
        createdAt: Date.now,
      },
      {
        id: 10,
        description: 'Reunião com responsável pelo MongoDB',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 8,
          title: 'Trocar banco de dados',
          description: 'Refatoração e substituição do database secundário',
          status: Status.TO_DO,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-11-01',
        createdAt: Date.now,
      },
      {
        id: 11,
        description: 'Resolver desempenho do container reprovado',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 8,
          title: 'Trocar banco de dados',
          description: 'Refatoração e substituição do database secundário',
          status: Status.TO_DO,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-12-10',
        createdAt: Date.now,
      },
      {
        id: 12,
        description: 'Ligação com equipe responsável pelo Firebase',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 7,
          title: 'Criar autenticação com login Google',
          description: 'Deve conter token gerenciável via localstorage',
          status: Status.DONE,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-10-02',
        createdAt: Date.now,
      },
      {
        id: 13,
        description: 'Revogar credenciais para equipe de infra',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 7,
          title: 'Criar autenticação com login Google',
          description: 'Deve conter token gerenciável via localstorage',
          status: Status.DONE,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: '2021-10-05',
            createdAt: Date.now,
          },
          dueDate: '2021-10-24',
          createdAt: Date.now,
        },
        dueDate: '2021-10-03',
        createdAt: Date.now,
      },
      {
        id: 14,
        description: 'Rodar atualizações no PowerBI',
        isUrgent: false,
        isDone: false,
        sprint: {
          id: 9,
          title: 'Remoção de contatos desatualizados',
          description: 'Atualizar lista de contatos fazendo limpeza de dados',
          status: Status.IN_PROGRESS,
          project: {
            id: 3,
            title: 'Criação de Ferramenta de Email',
            description:
              'Nova ferramenta para ajudar no disparo de emails de marketing',
            dueDate: '2021-11-21',
            createdAt: Date.now,
          },
          dueDate: '2021-11-14',
          createdAt: Date.now,
        },
        dueDate: '2021-11-19',
        createdAt: Date.now,
      },
    ];
    const users = [
      {
        id: 1,
        name: 'Samanta Fluture',
        email: 'samanta@email.com',
        password: '1234567',
        jobTitle: 'Gerente de Projetos',
        photoUrl: 'https://github.com/samantafluture.png',
        role: Role.MANAGER,
      },
      {
        id: 2,
        name: 'João Rodrigues',
        email: 'joao@email.com',
        password: '1234567',
        jobTitle: 'Programador',
        photoUrl: 'https://github.com/peas.png',
        role: Role.MEMBER,
      },
      {
        id: 3,
        name: 'Mauro Cunha',
        email: 'mauro@email.com',
        password: '1234567',
        jobTitle: 'Designer',
        photoUrl: 'https://github.com/eemr3.png',
        role: Role.MEMBER,
      },
    ];
    return { projects, sprints, tasks, users };
  }
}
