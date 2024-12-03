import ListComponent from '../pages/ListComponent';

describe('Testes com cookies', () => {
    it('Deve carregar a página já autenticado usando cookie', () => {
        ListComponent.setCookie('authToken', 'ABpPFfalWUA9fWALS');
        ListComponent.navigate();
        cy.contains('.mx-auto flex w-100 h-100 mb-2 mt-20').should('exist');
    });
});
