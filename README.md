# Mircostache
564 byte module for templating with mustache notation.  

Just include it in your project:
```html
<script src="microstache.min.js">
```

And call `Microstache.template` with a template string and a data object.
```javascript
var template = "<h1>{{someData}}</h1><h2>{{moreData}}</h2><h3>{{deepData.deeper.deeper}}</h3>";  
var data = {
  someData : "A String",
  moreData : "Another string.",
  deepData : {
    deep : {
      "deep"
      }
    }
  }
}
var templated = Microstache.template(template,data);  //"<h1>A String</h1><h2>Another String</h2><h3>deep</h3>"
```

Fast, powerful string templating, for less than a kB. Can it get simpler than that?
