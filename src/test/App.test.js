import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const {expect} = require("chai");

//Sanity check
describe("mocha", function () {

    it("Should run with npm test", function() {
        expect(true).to.be.ok;
    })

})

describe("mocha", function () {
    const {getPhotoUrl} = require("../components/galeria/galeriaActions");
    const {requirePhotos} = require("../components/galeria/galeriaActions");

    it("Should return an array with the src of each photo", function() {
      expect(getPhotoUrl([{ src: "photo1"}, {src: "photo2"}])).to.deep.equal(["photo1", "photo2"]);
    })

    it("Should return an array requiring each url", function () {
      expect(requirePhotos(["../img/galeriaImgs/1suelo.jpg", "../img/galeriaImgs/barcos.jpg"])).to.deep.equal([require("../img/galeriaImgs/1suelo.jpg"), require("../img/galeriaImgs/barcos.jpg")])
    })

})