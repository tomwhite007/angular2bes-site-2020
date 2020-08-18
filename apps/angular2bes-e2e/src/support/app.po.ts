export function mockMarkdownDocsRequests() {
  const rootDocumentFolderUrl =
    '**/tomwhite007/angular2bes-site-2020/master/apps/angular2bes/src/assets/markdown';

  cy.server();
  cy.route('GET', `${rootDocumentFolderUrl}/menu.md`, 'fx:menu/menu1.md');
  cy.route(
    'GET',
    `${rootDocumentFolderUrl}/meetups/ngrx-entities-and-view-model.md?cb=**`,
    'fx:pages/ngrx-entities-and-view-model.md'
  );
  cy.route(
    'GET',
    `${rootDocumentFolderUrl}/meetups/sharing-code.md?cb=**`,
    'fx:pages/sharing-code.md'
  );
}
