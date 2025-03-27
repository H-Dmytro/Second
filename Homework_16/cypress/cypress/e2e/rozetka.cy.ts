describe('template spec', () => {
    let selectedTvUrl = '';

    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
    });

    it('Opens the chosen tv', () => {
        cy.get('.category-link[href*="telefony-tv-i-ehlektronika/"]').click();
        console.log('waiting completed');
        cy.window().then(win => {
            cy.wrap(win).its('open').should('be.a', 'function');
        });
        cy.get('a.tile-cats__heading.tile-cats__heading_type_center[title="Телевізори"]').should('contain.text', 'Телевізори').click();
        cy.get('[name="search"]').type('LG').should('have.value', 'LG');
        cy.contains('button', ' Знайти ').click();
        cy.get(':nth-child(2) > rz-catalog-tile').should('be.visible').click();
        cy.url().then(url => {
            selectedTvUrl = url;
        });
    });

    it('Adds the chosen tv to the cart', () => {
        cy.visit(selectedTvUrl);
        cy.get('[aria-label="Купити"]').click();
    });
});
