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

    it("Should get information about gallery photos from data/gallery.json", function() {
      expect(getPhotoUrl()).to.equal(3);
    })

})