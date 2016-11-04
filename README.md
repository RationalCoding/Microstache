# Mircostache
408 byte module for templating with mustache notation.  

```html
<script src="microstache.min.js">
```

```javascript
var template = "<h1>{{someData}}</h1><h2>{{moreData}}</h2>";  
var data = {
  someData : "A String",
  moreData : "Another string."
}
var templated = Microstache.template(template,data);  //"<h1>A String</h1><h2>Another String</h2>"
```

That's it. But that's all you really need.


