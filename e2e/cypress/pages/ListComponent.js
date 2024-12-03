class ListComponent{
    navigate(){
        cy.visit('https://pexinxa-database.firebaseapp.com/products');
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