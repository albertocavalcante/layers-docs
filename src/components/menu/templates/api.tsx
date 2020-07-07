import { h } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import menuData from '../data/apis.json'

const Template = {
  menu: {
    "general": {
      'Grupo': {
        'article 1': '/docs/api/general/article-1',
        'article 2': '/docs/api/general/article-2',
      }
    },
    ...menuData, 
  },

  template(props: RouteRenderProps) {
    const navItems = Template.menu[props.match.params.service] ?? Template.menu['general']
    return <docs-nav items={navItems} />
  },

  categories: [
    {
      icon: '/docs/assets/icons/General.svg',
      url: '/docs/api/intro',
      title: 'Guias Gerais',
    },
    {
      icon: '/docs/assets/icons/OAuth.svg',
      url: '/docs/api/auth',
      title: 'Autenticação OAuth',
    },
    {
      icon: '/docs/assets/icons/Data.svg',
      url: '/docs/api/data',
      title: 'Dados'
    },
    {
      icon: '/docs/assets/icons/Hub.svg',
      url: '/docs/api/apihub',
      title: 'Hub de API\'s'
    },
    {
      icon: '/docs/assets/icons/Notifications.svg',
      url: '/docs/api/notifications',
      title: 'Notificações'
    },
    {
      icon: '/docs/assets/icons/Payments.svg',
      url: '/docs/api/payments',
      title: 'Pagamentos'
    },
    {
      icon: '/docs/assets/icons/Payments.svg',
      url: '/docs/api/communication',
      title: 'Comunicação'
    },
    {
      icon: '/docs/assets/icons/Payments.svg',
      url: '/docs/api/tickets',
      title: 'Atendimentos'
    },
    {
      icon: '/docs/assets/icons/Payments.svg',
      url: '/docs/api/tickets',
      title: 'Atendimentos'
    },
  ],
}

export default Template