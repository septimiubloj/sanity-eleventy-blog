export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '604a34081ea71e0bd142dbeb',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ipv58azo',
                  apiId: '7476ae89-85ba-474d-bcf1-3dc7b64d22a0'
                },
                {
                  buildHookId: '604a340838a4870731b62656',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-842ufndd',
                  apiId: '0038cc23-7abe-45ef-be86-3e8bbe23f1a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/septimiubloj/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-842ufndd.netlify.app', category: 'apps'}
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
