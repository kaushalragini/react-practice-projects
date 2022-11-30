import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];
let cart = {
  id: 1,
  title: "Nivea Whitening Smooth Skin Roll On Deodorant for Women 50 ml",
  imgURL:
    "https://www.jiomart.com/images/product/150x150/490830561/nivea-whitening-smooth-skin-roll-on-deodorant-for-women-50-ml-product-images-o490830561-p490830561-0-202203151142.jpg",
  mrp: "₹ 199.00",
  sellingPrice: "₹ 132.00",
  discount: "33%",
};
C1Testcase();

function C1Testcase() {
  describe("C1", () => {
    let acc_score = 1;

    data.forEach(({ submission_link: url, id }) => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      it(`should have the heading as Groceries ${url}`, () => {
        cy.visit(url);
        cy.contains("h1", /Groceries/i).should("be.visible");
        cy.then(() => {
          acc_score += 1;
        });
      });
      it("should display all Products.", () => {
        cy.visit(url);
        cy.get('[data-cy="container"]').children().should("have.length", 10);
        cy.then(() => {
          acc_score += 2;
        });
      });
      it("Check all properties of the product are displayed", () => {
        cy.visit(url);
        cy.get('[data-cy="container"]').children().first().contains(cart.title);
        cy.get('[data-cy="container"]')
          .children()
          .first()
          .contains(cart.discount);
        cy.get('[data-cy="container"]').children().first().contains(cart.mrp);
        cy.get('[data-cy="container"]')
          .children()
          .first()
          .contains(cart.sellingPrice);

        cy.then(() => {
          acc_score += 2;
        });
      });
      it("add to Cart button should be visible by default", () => {
        cy.get('[data-cy="add_to_cart"]')
          .first()
          .contains("Add to Cart")
          .click();
        cy.get(".quantity").first().contains(1);
        cy.then(() => {
          acc_score += 1;
        });
      });
      it("onclicking Add to Cart button quantity should be incremented by 1 and CartButtons should be rendered(+ and - button)", () => {
        cy.visit(url);
        cy.get('[data-cy="container"]')
          .children()
          .find(".change_quantity_container")
          .should("have.length", 0);
        cy.get('[data-cy="add_to_cart"]')
          .first()
          .contains("Add to Cart")
          .click();
        cy.get(".quantity").first().contains(1);
        cy.get('[data-cy="container"]')
          .children()
          .find("[data-cy='add_to_cart']")
          .should("have.length", 9);
        cy.get('[data-cy="container"]')
          .children()
          .find(".change_quantity_container")
          .should("have.length", 1);
        cy.then(() => {
          acc_score += 3;
        });
      });
      it("increment and decrement quantity buttons should work", () => {
        cy.visit(url);
        cy.get('[data-cy="add_to_cart"]')
          .first()
          .contains("Add to Cart")
          .click();
        cy.get(".quantity").should("have.text", 1);

        cy.get('[data-cy="inc_btn"]').first().contains("+").click();
        cy.get(".quantity").should("have.text", 2);
        cy.get('[data-cy="dec_btn"]').first().contains("-").click();
        cy.get(".quantity").should("have.text", 1);
        cy.then(() => {
          acc_score += 2;
        });
      });
      it("if quantity goes below 1 Add to Cart button should be visible and decrement and increment buttons should not be visible", () => {
        cy.visit(url);
        cy.get('[data-cy="add_to_cart"]')
          .first()
          .contains("Add to Cart")
          .click();
        cy.get(".quantity").should("have.text", 1);

        cy.get('[data-cy="inc_btn"]').first().contains("+").click();
        cy.get(".quantity").should("have.text", 2);
        cy.get('[data-cy="dec_btn"]').first().contains("-").click();
        cy.get(".quantity").should("have.text", 1);
        cy.get('[data-cy="dec_btn"]').first().contains("-").click();
        cy.get('[data-cy="container"]')
          .children()
          .find("[data-cy='add_to_cart']")
          .should("have.length", 10);
        cy.then(() => {
          acc_score += 3;
        });
      });
      it(`generate score`, () => {
        console.log("final score:", acc_score);
        ////////////// this should not be chnages
        let result = {
          id,
          marks: Math.ceil(acc_score),
        };
        result = JSON.stringify(result);
        cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
          if (err) {
            console.error(err);
          }
        });
        //////////////////
      });
    });
  });
}
