/// <reference types="cypress" />

describe("home page", ()=>{
  it("add music successfully", ()=>{
    const music = {
      name: "new music",
      youtubeLink: "https://www.youtube.com/watch?v=chwyjJbcs1Y"
    }

    cy.visit("http://localhost:3000")
    cy.get("#name").type(music.name)
    cy.get("#link").type(music.youtubeLink)

    cy.get("#enviar").click()
  })
})

describe("top page", ()=>{
  it("random music", ()=>{
    cy.get("#top").click()
    cy.url().should("equal", "http://localhost:3000/top")
  })
})

describe("random page", ()=>{
  it("random music", ()=>{
    cy.get("#random").click()
    cy.url().should("equal", "http://localhost:3000/random")
  })

  it("click like", ()=>{
    cy.get("#like").click()
    cy.get("#like").click()
  })

  it("click unlike", ()=>{
    cy.get("#unlike").click()
  })
})