export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97af285f4479013642ce4e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1turekgp',
                  apiId: '56f06284-da7a-4dc4-a2ce-3bb53761cd6f'
                },
                {
                  buildHookId: '5f97af2811f47685d98fef60',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-revjqgxu',
                  apiId: '908da10b-829d-45a1-8789-036554972893'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorge-castellon-jr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-revjqgxu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
