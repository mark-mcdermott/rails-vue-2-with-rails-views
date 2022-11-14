## To Run
- `git clone https://github.com/mark-mcdermott/rails-vue-2-with-rails-views.git`
- `cd rails-vue-2-with-rails-views`
- `bundle install`
- `rails db:migrate`
- `rails s`
- in a browser, go to `http://localhost:3000/pages/home`

## To Create
- `rails new <app name>`
- `cd <app name>`
- `bundle add slim-rails`
- `bundle install`
- `rails g controller pages home`
- open `config/importmap.rb` and add this line to the bottom:
```
pin "vue", to: "https://ga.jspm.io/npm:vue@2.7.14/dist/vue.esm.browser.min.js"
```
- make `app/javascript/application.js` look like this:
```
import "@hotwired/turbo-rails"
import "controllers"

import Vue from 'vue'
var app = new Vue({
  el: '#app',
  data: {
    message: 'This line is a Vue data variable string (from app/javascript/application.js) outputted in app/views/pages/home.html.slim'
  }
})
```
- make `app/views/welcomes/index.html.slim` look like this:
```
p Hi from app/views/pages/home.html.slim
#app
  p
    | {{ message }}
```
- `rails s`
- in a browser, go to `localhost:3000/pages/home`