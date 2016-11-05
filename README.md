<h1 align="center">
  <br>
  <a href="#"><img src="https://github.com/RationalCoding/Microstache/raw/master/src/logo.png" alt="HyperHost" width="200"></a>
  <br>
  Microstache
  <br>
  <br>
</h1>
<h4 align="center">564 byte mustache templating.</h4>
<br>


Just include it in your project:
```html
<script src="microstache.min.js">
```

Then use `Microstache.template` to template a string with the data in an object.  
```javascript
var template = "<h1>{{someData}}</h1><h2>{{moreData}}</h2><h3>{{deepData.deep}}</h3>";  
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

<br>

*If you need more than just object templating, try [Mustache.js](https://github.com/janl/mustache.js)*
