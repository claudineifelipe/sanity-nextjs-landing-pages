export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '602eeeab0658c701485c70c4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tbozhb83',
                  apiId: '20237a02-a514-4aea-8bf9-391f326f7d1a'
                },
                {
                  buildHookId: '602eeeab74d66601234458d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u7zydo94',
                  apiId: '67e16ce3-a8ca-4c82-a5cf-5d14b443fb67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/claudineifelipe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u7zydo94.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
