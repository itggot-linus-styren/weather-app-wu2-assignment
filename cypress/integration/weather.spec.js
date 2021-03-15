describe('Assignment tests', () => {

  describe('Can display weather in Köttkulla', () => {
    before(() => {
      cy.fixture('köttkulla.json').then((json) => {
        cy.visit('http://localhost:8080', {
          onBeforeLoad (win) {
            cy.stub(win, 'fetch').withArgs(Cypress.sinon.match(/.*weather\?q=Köttkulla.*/))
            .resolves({
              ok: true,
              json: () => json,
            })
          },
        })
      })
    })

    it('calls OpenWeatherMap API with "Köttkulla"', () => {
      cy.get('[data-cy=city]').type("Köttkulla")
      cy.get('[data-cy=search]').click()
    })

    it('displays Köttkulla location', () => {
      cy.contains('Köttkulla')
    })

    it('displays summary', () => {
      cy.contains("3.")
    })

    it('displays weather', () => {
      cy.contains("Rain")
      cy.contains("light rain")
    })

    it('displays details', () => {
      cy.contains("0.")
      cy.contains("100")
      cy.contains("998")
      cy.contains("1.")
      cy.contains("4.")
    })
  })

  describe('Can display weather in Hell', () => {
    before(() => {
      cy.fixture('hell.json').then((json) => {
        cy.visit('http://localhost:8080', {
          onBeforeLoad (win) {
            cy.stub(win, 'fetch').withArgs(Cypress.sinon.match(/.*weather\?q=Hell.*/))
            .resolves({
              ok: true,
              json: () => json,
            })
          },
        })
      })
    })

    it('calls OpenWeatherMap API with "Hell"', () => {
      cy.get('[data-cy=city]').type("Hell, NO")
      cy.get('[data-cy=search]').click()
    })

    it('displays Hell location', () => {
      cy.contains('Hell')
    })

    it('displays summary', () => {
      cy.contains("4.")
    })

    it('displays weather', () => {
      cy.contains("Clouds")
      cy.contains("broken clouds")
    })

    it('displays details', () => {
      cy.contains("-2.")
      cy.contains("87")
      cy.contains("1006")
      cy.contains("2.")
      cy.contains("6.")
    })
  })

  describe('Show error if API returns non 2xx response', () => {
    before(() => {
      cy.visit('http://localhost:8080', {
        onBeforeLoad (win) {
          cy.stub(win, 'fetch').withArgs(Cypress.sinon.match.any)
          .resolves({
            ok: false,
            json: () => [],
          })
        },
      })
    })

    it('shows alert when no matching location', () => {
      var alerted = false;
      cy.on('window:alert', msg => alerted = msg)

      cy.get('[data-cy=city]').type("Melonia")
      cy.get('[data-cy=search]').click().then(() => expect(alerted).not.to.equal(false))
    })
  })

})