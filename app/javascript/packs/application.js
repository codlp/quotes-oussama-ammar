// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";

// Internal imports
import { plusSlides } from '../components/slideshow';
import { currentSlide } from '../components/slideshow';
import { showSlides } from '../components/slideshow';

var slideIndex = 1;

document.addEventListener('turbolinks:load', () => {
  showSlides(slideIndex);
});
