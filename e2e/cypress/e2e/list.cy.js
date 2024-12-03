import ListComponent from '../pages/ListComponent';

describe('Testes com cookies', () => {
    it('Should test empty list', () => {
        ListComponent.setCookie('authToken', 'ABpPFfalWUA9fWALS');
        ListComponent.navigate();

    });
});
