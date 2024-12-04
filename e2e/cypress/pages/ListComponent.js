class ListComponent{
    navigate(){
        cy.visit('https://pexinxa-database.firebaseapp.com/products');
    }

    buttonList(){
        return cy.get('#root > div > main > div > nav > div > div.flex.items-center.space-x-4 > div.flex.items-center.px-4.py-2.rounded-full.text-sm.font-semibold.space-x-2.cursor-pointer.bg-sky-100.text-sky-500').click();
    }

    buttonListFull(){   
        return cy.get('#root > div > main > div > nav > div > div.flex.items-center.space-x-4 > div.flex.items-center.px-4.py-2.rounded-full.text-sm.font-semibold.space-x-2.cursor-pointer.bg-orange-500.text-white').click();
    }

    exportToPdf(){
        return cy.contains('button', 'Exportar para PDF').click();
    }

    list(){
        return cy.contains('Sua Lista está vazia');
    }

    buttonCard(){
        cy.contains('button', 'Adicionar').click();
    }
    toast(){
        cy.get('#root > div > main > div > div > div > div > div.go3958317564')
    }
    cardLogin(){
        cy.contains('Faça Login ou Cadastre-se!');
    }

    getCookie(cookieName) {
        return cy.getCookie(cookieName).then((cookie) => {
            if (cookie) {
                return cookie.value;
            }
            throw new Error(`Cookie ${cookieName} não encontrado`);
        });
    }

    setCookie(cookieName, cookieValue) {
        cy.setCookie(cookieName, cookieValue);
    }

    loginWithCookie(cookieName, cookieValue) {
        this.setCookie(cookieName, cookieValue); 
        this.navigate(); 
    }
}
export default new ListComponent();