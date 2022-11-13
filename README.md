## To Create From Scratch
- `rails new <app name>`
- `cd <app name>`
- open `Gemfile` and add `gem "slim"` to the bottom
- `bundle install`
- `rails g scaffold welcome`
- `rails db:migrate`
- open `config/importmap.rb` and add this line to the bottom:
  - `pin "vue", to: "https://ga.jspm.io/npm:vue@2.7.14/dist/vue.esm.browser.min.js"`
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
- make `app/views/welcomes/index.html.erb` look like this:
```
<p style="color: green"><%= notice %></p>

<h1>Welcomes</h1>

<div id="app">
  <p>{{ message }}</p>
</div>

<div id="welcomes">
  <% @welcomes.each do |welcome| %>
    <%= render welcome %>
    <p>
      <%= link_to "Show this welcome", welcome %>
    </p>
  <% end %>
</div>

<%= link_to "New welcome", new_welcome_path %>
```
- `rails s`
- in a browser, go to `localhost:3000/welcomes`