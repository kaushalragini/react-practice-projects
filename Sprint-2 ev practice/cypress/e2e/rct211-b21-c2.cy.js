import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

const getAuth = (win) => win.store.getState().AuthReducer;
const getShoes = (win) => win.store.getState().AppReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-211-B21-E2", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check if Redux store is being used with the application`, () => {
      cy.window()
        .then(getShoes)
        .should("deep.equal", {
          shoes: [],
          isLoading: false,
          isError: false,
        })
        .then(() => {
          acc_score += 0.5;
        });
      cy.window()
        .then(getAuth)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 0.5;
        });
    });

    it(`Check if proper GET request and response is made`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/shoes").as("shoes");
      cy.wait("@shoes").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/shoes$/);
      });
      cy.get("@shoes").its("response.body").should("have.length", 15);
      cy.then(() => (acc_score += 1));
    });

    it(`Check if the number of cards displayed is 15`, () => {
      cy.intercept("GET", "**/shoes").as("shoes");
      cy.wait("@shoes");
      cy.get("[data-testid^=shoe-card-wrapper]").should("have.length", 15);
      cy.then(() => (acc_score += 1));
    });

    it(`Check if the Card component contains all the required information`, () => {
      cy.request("GET", `${server_url}/shoes`).then(({ body }) => {
        body.forEach((singleShoe) => {
          cy.get(`[data-testid='shoe-card-wrapper-${singleShoe.id}']`).within(
            () => {
              cy.get("[data-testid=shoe-name]").contains(singleShoe.name);
              cy.get("[data-testid=shoe-card-image]")
                .should("have.attr", "src")
                .should("include", singleShoe.image);
            }
          );
        });
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Check if the user is redirected to login page before visiting /shoes/1, without authentication`, () => {
      cy.window().then(getAuth).its("isAuth").should("equal", false);
      cy.window().then(getAuth).its("token").should("equal", "");

      cy.visit(`${url}shoes/1`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.intercept("POST", "**/api/login").as("login");

      cy.get("[data-testid=login-email]").clear().type("eve.holt@reqres.in");
      cy.get("[data-testid=login-password]").clear().type("cityslicka");
      cy.get("[data-testid=login-submit]").click();

      cy.wait(["@login"]);

      cy.url().should("eq", `${url}shoes/1`);

      cy.then(() => (acc_score += 2));
    });

    it(`Check if Filters are working with updating single data`, () => {
      cy.get('[type="checkbox"]')
        .check("Sneakers")
        .then(() => {
          cy.url().should("eq", `${url}?category=Sneakers`);
          cy.get("[data-testid^=shoe-card-wrapper]").should("have.length", 5);
        });

      cy.then(() => (acc_score += 1));
    });

    it(`Check if Filters are working with updating multiple data`, () => {
      cy.get('[type="checkbox"]')
        .check(["Sneakers", "Loafers", "Boots"])
        .then(() => {
          cy.url().should(
            "eq",
            `${url}?category=Sneakers&category=Loafers&category=Boots`
          );
          cy.get("[data-testid^=shoe-card-wrapper]").should("have.length", 11);

          cy.get('[type="checkbox"]')
            .uncheck(["Sneakers", "Boots"])
            .then(() => {
              cy.url().should("eq", `${url}?category=Loafers`);
              cy.get("[data-testid^=shoe-card-wrapper]").should(
                "have.length",
                3
              );
            });
        });
      cy.then(() => (acc_score += 1));
    });

    it(
      `Check if the Filter search params are working with initial checks in URL`,
      { retries: 1 },
      () => {
        cy.visit(`${url}?category=Sneakers&category=Boots`).then(() => {
          cy.get("[data-testid=filter-category]")
            .find("[value='Sneakers']")
            .should("be.checked");
          cy.get("[data-testid=filter-category]")
            .find("[value='Boots']")
            .should("be.checked");
          cy.get("[data-testid^=shoe-card-wrapper]").should("have.length", 8);
        });
        cy.then(() => {
          acc_score += 1;
        });
      }
    );

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
