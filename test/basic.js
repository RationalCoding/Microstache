var test = require('tape')
var microstache = require('./../src/microstache')

test('flat object', function (t) {
  t.plan(3)

  var template = '<h1>{{someData}}</h1>'
  var data = { someData: 'A String' }
  var templated = microstache.template(template, data)
  t.equals(templated, '<h1>A String</h1>', 'no spacing')

  template = '<h1>{{  someData  }}</h1>'
  templated = microstache.template(template, data)
  t.equals(templated, '<h1>A String</h1>', 'spacing')

  template = '<h1> {{someData}} </h1>'
  templated = microstache.template(template, data)
  t.equals(templated, '<h1> A String </h1>', 'external spacing')
})

test('deep object', function (t) {
  t.plan(4)

  var template = '<h1>{{someData.moreData.lotsData}}</h1>'
  var data = {
    someData: {
      moreData: {
        lotsData: 'A String'
      }
    }
  }

  var templated = microstache.template(template, data)
  t.equals(templated, '<h1>A String</h1>', 'no spacing')

  template = '<h1>{{  someData.moreData.lotsData  }}</h1>'
  templated = microstache.template(template, data)
  t.equals(templated, '<h1>A String</h1>', 'spacing')

  template = '<h1> {{someData.moreData.lotsData}} </h1>'
  templated = microstache.template(template, data)
  t.equals(templated, '<h1> A String </h1>', 'external spacing')

  template = '<h1>{{someData.moreData}}</h1>'
  templated = microstache.template(template, data)
  t.equals(templated, '<h1></h1>', 'non string object')
})

