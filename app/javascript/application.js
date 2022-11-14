// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import Vue from 'vue'
var app = new Vue({
  el: '#app',
  data: {
    message: 'This line is a Vue data variable string (from app/javascript/application.js) outputted in app/views/pages/home.html.slim'
  }
})