import ListComponent from '../pages/ListComponent';

describe('Should Test List Component', () => {

    it('Should test empty list', () => {
        ListComponent.setCookie('authToken', 'ABpPFfalWUA9fWALS');
        ListComponent.navigate();
        cy.wait(3000);
        ListComponent.buttonList();
        ListComponent.list();
    });

    it('Should test add product on list', () => {
        ListComponent.setCookie('authToken', 'ABpPFfalWUA9fWALS');
        ListComponent.navigate();
        cy.wait(3000);
        ListComponent.buttonCard();
        ListComponent.toast();
    });

    it('Should test export PDF', () => {
        ListComponent.setCookie('authToken', 'ABpPFfalWUA9fWALS');
        ListComponent.navigate();
        cy.wait(3000);
        ListComponent.buttonCard();
        ListComponent.buttonListFull();
        ListComponent.exportToPdf();
    });

});
