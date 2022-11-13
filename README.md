## To Create From Scratch
- `rails new <app name>`
- `cd <app name>`
- open `Gemfile` and add `gem "slim"` to the bottom of the file
- `bundle install`
- `rails g scaffold welcome`
- `rails db:migrate`
- `./bin/importmap pin vue@2.7.14`
- make `app/javascript/application.js` look like this:
```
import "@hotwired/turbo-rails"
import "controllers"

import Vue from 'vue'
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
- `rails s`
- in a browser, go to `localhost:3000/welcomes`