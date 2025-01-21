describe('Shopping Cart', () => {
    it('add the most expensive TV and the cheapest accessory to the cart', () => {
      cy.visit('https://www.emag.ro/'); 
  
      //Căutăm categoria de televizoare
      cy.xpath("//input[@id='searchboxTrigger']").type('TV'); 
      cy.get('.searchbox-submit-button > .em').click();
      // Selectăm categoria de televizoare (de exemplu, LED)
      cy.get('[href="https://www.emag.ro/search/televizoare/filter/tehnologie-speciala-f9182,mini-led-v32000/TV/c?ref=lst_leftbar_9182_32000"]'); // Selectăm LED, dar poate fi și alte categorii
  
      //Filtrăm televizoarele după relevanta 
      cy.get(':nth-child(1) > .sort-control-btn-dropdown > .btn > .sort-control-btn-option').click({force: true}); // Filtrăm după evaluare de 3 stele sau mai mult
      cy.wait(3000)
      cy.get(':nth-child(4) > .js-sort-option').click({force: true});

    // Luăm primul TV in stoc din lista de rezultate descrescatoare
    cy.get('[data-product-id="73907013"] > .card-v2 > .card-v2-wrapper > .card-v2-info > .px-2 > .card-v2-rating > .star-rating-container > .star-rating-text > .average-rating')
      .should('have.text', '5'); //verificam sa aiba 5 stele

    // Adaugam produsul in cos
    cy.get('[data-product-id="73907013"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn').click();
    cy.get('[data-test="atc-modal-close"] > .em-close').click({force: true});
    cy.wait(2000)

    // Accesam lista cu toate produsele brandului
    cy.get('[data-product-id="73907013"] > .card-v2 > .card-v2-wrapper > .card-v2-info > .px-2 > .card-v2-rating > .star-rating-container > .star-rating-text > .average-rating').scrollIntoView({ duration: 1000 }).click({force: true});
    cy.get(':nth-child(2) > :nth-child(1) > .product-brand-link > img').click();
    cy.get(':nth-child(1) > .sort-control-btn-dropdown > .btn').click({force: true});
    cy.wait(3000)

    // Sortam dupa ordine creascatoare a preturilor
    cy.get(':nth-child(3) > .js-sort-option').click({force: true});

    // Selectăm accesoriul cel mai ieftin și îl adăugăm în coș 
    cy.get('[data-product-id="43516731"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn').scrollIntoView({ duration: 1000 }).click({force: true});
    cy.get('[data-test="atc-modal-close"] > .em-close').click({force: true});

    //Verificăm coșul de cumpărături pentru a confirma că produsele au fost adăugate
      cy.xpath("//a[@id='my_cart']").click(); // Deschidem coșul de cumpărături
  
    // Verificăm că ambele produse se află în coș
      cy.get('#my_cart > .jewel').contains('2');
      cy.get("[href='https://www.emag.ro/televizor-lg-oled-signature-97m49la-243-cm-smart-4k-ultra-hd-clasa-g-oled97m49la/pd/DDH5BVYBM/']").contains('Televizor LG OLED Signature 97M49LA, 243 cm, Smart, 4K Ultra HD, Clasa G');
      cy.get("[href='https://www.emag.ro/telecomanda-lcd-lg-akb73715601-dfsgrb3/pd/DJ1Z3JMBM/']").contains('Telecomanda LCD LG AKB73715601');
    });
  });
  