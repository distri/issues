window["distri/issues:master"]({
  "source": {
    "README.md": {
      "path": "README.md",
      "content": "issues\n======\n\nGithub's got issues\n\nGoal\n----\n\nCurrently just provides a dropdown list for choosing an issue from.\n\nMay later expand to forms to create/show/comment on issues for a project.\n",
      "mode": "100644",
      "type": "blob"
    },
    "issue.coffee.md": {
      "path": "issue.coffee.md",
      "content": "Issue\n=====\n\n    Composition = require \"composition\"\n\nA tempest model that wraps issues from github.\n\n    module.exports = (I={}) ->\n      self = Composition(I)\n\n      self.extend\n\nThis is what appears in the dropdown menu.\n\n        toString: ->\n          I.title\n\n        fullDescription: ->\n          \"\"\"\n            #{self.optionText()}\n            #{I.html_url}\n            #{I.body}\n          \"\"\"\n\nA helper method to get a standard branch name for an issue. Pull requests have\ntheir own branches, but an issue branch is generated based on issue number.\n\n        branchName: ->\n          I.head?.ref or \"issue-#{I.number}\"\n\n      return self\n",
      "mode": "100644",
      "type": "blob"
    },
    "issues.coffee.md": {
      "path": "issues.coffee.md",
      "content": "Issues\n======\n\n    Composition = require \"composition\"\n    {defaults} = require \"util\"\n\n    Issue = require \"./issue\"\n\nA collection of issues including a `currentIssue` to represent the actively\nselected issue.\n\nWe may want to formalize this collection pattern later, but for now lets just\nsee how it goes.\n\n    Issues = (I={}) ->\n      defaults I,\n        issues: []\n\n      self = Composition(I)\n\nOur `issues` method is a list of `Issue` models.\n\n      self.attrModels \"issues\", Issue\n\nWe want to expose the currently selected issue as an observable as well.\n\n      self.attrObservable \"currentIssue\"\n\n      self.extend\n\nThe reset method accepts an array of raw issue data, converts it into an array\nof issue objects, replaces the previous issues with the new ones and clears the\nselected issue.\n\n        reset: (issueData) ->\n          self.currentIssue(undefined)\n          self.issues issueData.map(Issue)\n\n      return self\n\n    module.exports = Issues\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "Our main entry point which exports all of our Issue models and templates.\n\n    module.exports =\n      models:\n        Issue: require(\"./issue\")\n        Issues: require(\"./issues\")\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "version: \"0.2.3-pre.0\"\nentryPoint: \"main\"\ndependencies:\n  composition: \"distri/model:v0.1.3\"\n  util: \"distri/util:v0.1.0\"\n",
      "mode": "100644",
      "type": "blob"
    },
    "test/issues.coffee": {
      "path": "test/issues.coffee",
      "content": "Issues = require \"../issues\"\n\ndescribe \"issues\", ->\n  it \"should be chill\", ->\n    assert Issues()\n\ndescribe \"main\", ->\n  it \"should have stuff\", ->\n    {models:{Issue, Issues}} = require \"../main\"\n\n    assert Issue\n    assert Issues\n",
      "mode": "100644",
      "type": "blob"
    }
  },
  "distribution": {
    "issue": {
      "path": "issue",
      "content": "(function() {\n  var Composition;\n\n  Composition = require(\"composition\");\n\n  module.exports = function(I) {\n    var self;\n    if (I == null) {\n      I = {};\n    }\n    self = Composition(I);\n    self.extend({\n      toString: function() {\n        return I.title;\n      },\n      fullDescription: function() {\n        return \"\" + (self.optionText()) + \"\\n\" + I.html_url + \"\\n\" + I.body;\n      },\n      branchName: function() {\n        var _ref;\n        return ((_ref = I.head) != null ? _ref.ref : void 0) || (\"issue-\" + I.number);\n      }\n    });\n    return self;\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "issues": {
      "path": "issues",
      "content": "(function() {\n  var Composition, Issue, Issues, defaults;\n\n  Composition = require(\"composition\");\n\n  defaults = require(\"util\").defaults;\n\n  Issue = require(\"./issue\");\n\n  Issues = function(I) {\n    var self;\n    if (I == null) {\n      I = {};\n    }\n    defaults(I, {\n      issues: []\n    });\n    self = Composition(I);\n    self.attrModels(\"issues\", Issue);\n    self.attrObservable(\"currentIssue\");\n    self.extend({\n      reset: function(issueData) {\n        self.currentIssue(void 0);\n        return self.issues(issueData.map(Issue));\n      }\n    });\n    return self;\n  };\n\n  module.exports = Issues;\n\n}).call(this);\n",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = {\n    models: {\n      Issue: require(\"./issue\"),\n      Issues: require(\"./issues\")\n    }\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.3-pre.0\",\"entryPoint\":\"main\",\"dependencies\":{\"composition\":\"distri/model:v0.1.3\",\"util\":\"distri/util:v0.1.0\"}};",
      "type": "blob"
    },
    "test/issues": {
      "path": "test/issues",
      "content": "(function() {\n  var Issues;\n\n  Issues = require(\"../issues\");\n\n  describe(\"issues\", function() {\n    return it(\"should be chill\", function() {\n      return assert(Issues());\n    });\n  });\n\n  describe(\"main\", function() {\n    return it(\"should have stuff\", function() {\n      var Issue, _ref;\n      _ref = require(\"../main\").models, Issue = _ref.Issue, Issues = _ref.Issues;\n      assert(Issue);\n      return assert(Issues);\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.2.3-pre.0",
  "entryPoint": "main",
  "repository": {
    "branch": "master",
    "default_branch": "master",
    "full_name": "distri/issues",
    "homepage": null,
    "description": "Github's got issues",
    "html_url": "https://github.com/distri/issues",
    "url": "https://api.github.com/repos/distri/issues",
    "publishBranch": "gh-pages"
  },
  "dependencies": {
    "composition": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2014 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "mode": "100644",
          "type": "blob"
        },
        "main.coffee.md": {
          "path": "main.coffee.md",
          "content": "Model\n=====\n\nThe `Model` module provides helper methods to compose nested data models.\n\nModels uses [Observable](/observable/docs) to keep the internal data in sync.\n\n    Core = require \"core\"\n    Observable = require \"observable\"\n\n    module.exports = (I={}, self=Core(I)) ->\n\n      self.extend\n\nObserve any number of attributes as simple observables. For each attribute name passed in we expose a public getter/setter method and listen to changes when the value is set.\n\n        attrObservable: (names...) ->\n          names.forEach (name) ->\n            self[name] = Observable(I[name])\n\n            self[name].observe (newValue) ->\n              I[name] = newValue\n\n          return self\n\nObserve an attribute as a model. Treats the attribute given as an Observable\nmodel instance exposting a getter/setter method of the same name. The Model\nconstructor must be passed in explicitly.\n\n        attrModel: (name, Model) ->\n          model = Model(I[name])\n\n          self[name] = Observable(model)\n\n          self[name].observe (newValue) ->\n            I[name] = newValue.I\n\n          return self\n\nObserve an attribute as a list of sub-models. This is the same as `attrModel`\nexcept the attribute is expected to be an array of models rather than a single one.\n\n        attrModels: (name, Model) ->\n          models = (I[name] or []).map (x) ->\n            Model(x)\n\n          self[name] = Observable(models)\n\n          self[name].observe (newValue) ->\n            I[name] = newValue.map (instance) ->\n              instance.I\n\n          return self\n\nThe JSON representation is kept up to date via the observable properites and resides in `I`.\n\n        toJSON: ->\n          I\n\nReturn our public object.\n\n      return self\n",
          "mode": "100644",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "content": "version: \"0.1.3\"\ndependencies:\n  core: \"distri/core:v0.6.0\"\n  observable: \"distri/observable:v0.3.1\"\n",
          "mode": "100644",
          "type": "blob"
        },
        "test/model.coffee": {
          "path": "test/model.coffee",
          "content": "Model = require \"../main\"\n\ndescribe 'Model', ->\n  # Association Testing model\n  Person = (I) ->\n    person = Model(I)\n\n    person.attrAccessor(\n      'firstName'\n      'lastName'\n      'suffix'\n    )\n\n    person.fullName = ->\n      \"#{@firstName()} #{@lastName()} #{@suffix()}\"\n\n    return person\n\n  describe \"#attrObservable\", ->\n    it 'should allow for observing of attributes', ->\n      model = Model\n        name: \"Duder\"\n\n      model.attrObservable \"name\"\n\n      model.name(\"Dudeman\")\n\n      assert.equal model.name(), \"Dudeman\"\n\n    it 'should bind properties to observable attributes', ->\n      model = Model\n        name: \"Duder\"\n\n      model.attrObservable \"name\"\n\n      model.name(\"Dudeman\")\n\n      assert.equal model.name(), \"Dudeman\"\n      assert.equal model.name(), model.I.name\n\n  describe \"#attrModel\", ->\n    it \"should be a model instance\", ->\n      model = Model\n        person:\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n\n      model.attrModel(\"person\", Person)\n\n      assert.equal model.person().fullName(), \"Duder Mannington Jr.\"\n\n    it \"should allow setting the associated model\", ->\n      model = Model\n        person:\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n\n      model.attrModel(\"person\", Person)\n\n      otherPerson = Person\n        firstName: \"Mr.\"\n        lastName: \"Man\"\n\n      model.person(otherPerson)\n\n      assert.equal model.person().firstName(), \"Mr.\"\n\n    it \"shouldn't update the instance properties after it's been replaced\", ->\n      model = Model\n        person:\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n\n      model.attrModel(\"person\", Person)\n\n      duder = model.person()\n\n      otherPerson = Person\n        firstName: \"Mr.\"\n        lastName: \"Man\"\n\n      model.person(otherPerson)\n\n      duder.firstName(\"Joe\")\n\n      assert.equal duder.I.firstName, \"Joe\"\n      assert.equal model.I.person.firstName, \"Mr.\"\n\n  describe \"#attrModels\", ->\n    it \"should have an array of model instances\", ->\n      model = Model\n        people: [{\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n        }, {\n          firstName: \"Mr.\"\n          lastName: \"Mannington\"\n          suffix: \"Sr.\"\n        }]\n\n      model.attrModels(\"people\", Person)\n\n      assert.equal model.people()[0].fullName(), \"Duder Mannington Jr.\"\n\n    it \"should track pushes\", ->\n      model = Model\n        people: [{\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n        }, {\n          firstName: \"Mr.\"\n          lastName: \"Mannington\"\n          suffix: \"Sr.\"\n        }]\n\n      model.attrModels(\"people\", Person)\n\n      model.people.push Person\n        firstName: \"JoJo\"\n        lastName: \"Loco\"\n\n      assert.equal model.people().length, 3\n      assert.equal model.I.people.length, 3\n\n    it \"should track pops\", ->\n      model = Model\n        people: [{\n          firstName: \"Duder\"\n          lastName: \"Mannington\"\n          suffix: \"Jr.\"\n        }, {\n          firstName: \"Mr.\"\n          lastName: \"Mannington\"\n          suffix: \"Sr.\"\n        }]\n\n      model.attrModels(\"people\", Person)\n\n      model.people.pop()\n\n      assert.equal model.people().length, 1\n      assert.equal model.I.people.length, 1\n\n  describe \"#toJSON\", ->\n    it \"should return an object appropriate for JSON serialization\", ->\n      model = Model\n        test: true\n\n      assert model.toJSON().test\n\n  describe \"#observeAll\", ->\n    it \"should observe all attributes of a simple model\"\n    ->  # TODO\n      model = Model\n        test: true\n        yolo: \"4life\"\n\n      model.observeAll()\n\n      assert model.test()\n      assert.equal model.yolo(), \"4life\"\n\n    it \"should camel case underscored names\"\n",
          "mode": "100644",
          "type": "blob"
        }
      },
      "distribution": {
        "main": {
          "path": "main",
          "content": "(function() {\n  var Core, Observable,\n    __slice = [].slice;\n\n  Core = require(\"core\");\n\n  Observable = require(\"observable\");\n\n  module.exports = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = Core(I);\n    }\n    self.extend({\n      attrObservable: function() {\n        var names;\n        names = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        names.forEach(function(name) {\n          self[name] = Observable(I[name]);\n          return self[name].observe(function(newValue) {\n            return I[name] = newValue;\n          });\n        });\n        return self;\n      },\n      attrModel: function(name, Model) {\n        var model;\n        model = Model(I[name]);\n        self[name] = Observable(model);\n        self[name].observe(function(newValue) {\n          return I[name] = newValue.I;\n        });\n        return self;\n      },\n      attrModels: function(name, Model) {\n        var models;\n        models = (I[name] || []).map(function(x) {\n          return Model(x);\n        });\n        self[name] = Observable(models);\n        self[name].observe(function(newValue) {\n          return I[name] = newValue.map(function(instance) {\n            return instance.I;\n          });\n        });\n        return self;\n      },\n      toJSON: function() {\n        return I;\n      }\n    });\n    return self;\n  };\n\n}).call(this);\n",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.1.3\",\"dependencies\":{\"core\":\"distri/core:v0.6.0\",\"observable\":\"distri/observable:v0.3.1\"}};",
          "type": "blob"
        },
        "test/model": {
          "path": "test/model",
          "content": "(function() {\n  var Model;\n\n  Model = require(\"../main\");\n\n  describe('Model', function() {\n    var Person;\n    Person = function(I) {\n      var person;\n      person = Model(I);\n      person.attrAccessor('firstName', 'lastName', 'suffix');\n      person.fullName = function() {\n        return \"\" + (this.firstName()) + \" \" + (this.lastName()) + \" \" + (this.suffix());\n      };\n      return person;\n    };\n    describe(\"#attrObservable\", function() {\n      it('should allow for observing of attributes', function() {\n        var model;\n        model = Model({\n          name: \"Duder\"\n        });\n        model.attrObservable(\"name\");\n        model.name(\"Dudeman\");\n        return assert.equal(model.name(), \"Dudeman\");\n      });\n      return it('should bind properties to observable attributes', function() {\n        var model;\n        model = Model({\n          name: \"Duder\"\n        });\n        model.attrObservable(\"name\");\n        model.name(\"Dudeman\");\n        assert.equal(model.name(), \"Dudeman\");\n        return assert.equal(model.name(), model.I.name);\n      });\n    });\n    describe(\"#attrModel\", function() {\n      it(\"should be a model instance\", function() {\n        var model;\n        model = Model({\n          person: {\n            firstName: \"Duder\",\n            lastName: \"Mannington\",\n            suffix: \"Jr.\"\n          }\n        });\n        model.attrModel(\"person\", Person);\n        return assert.equal(model.person().fullName(), \"Duder Mannington Jr.\");\n      });\n      it(\"should allow setting the associated model\", function() {\n        var model, otherPerson;\n        model = Model({\n          person: {\n            firstName: \"Duder\",\n            lastName: \"Mannington\",\n            suffix: \"Jr.\"\n          }\n        });\n        model.attrModel(\"person\", Person);\n        otherPerson = Person({\n          firstName: \"Mr.\",\n          lastName: \"Man\"\n        });\n        model.person(otherPerson);\n        return assert.equal(model.person().firstName(), \"Mr.\");\n      });\n      return it(\"shouldn't update the instance properties after it's been replaced\", function() {\n        var duder, model, otherPerson;\n        model = Model({\n          person: {\n            firstName: \"Duder\",\n            lastName: \"Mannington\",\n            suffix: \"Jr.\"\n          }\n        });\n        model.attrModel(\"person\", Person);\n        duder = model.person();\n        otherPerson = Person({\n          firstName: \"Mr.\",\n          lastName: \"Man\"\n        });\n        model.person(otherPerson);\n        duder.firstName(\"Joe\");\n        assert.equal(duder.I.firstName, \"Joe\");\n        return assert.equal(model.I.person.firstName, \"Mr.\");\n      });\n    });\n    describe(\"#attrModels\", function() {\n      it(\"should have an array of model instances\", function() {\n        var model;\n        model = Model({\n          people: [\n            {\n              firstName: \"Duder\",\n              lastName: \"Mannington\",\n              suffix: \"Jr.\"\n            }, {\n              firstName: \"Mr.\",\n              lastName: \"Mannington\",\n              suffix: \"Sr.\"\n            }\n          ]\n        });\n        model.attrModels(\"people\", Person);\n        return assert.equal(model.people()[0].fullName(), \"Duder Mannington Jr.\");\n      });\n      it(\"should track pushes\", function() {\n        var model;\n        model = Model({\n          people: [\n            {\n              firstName: \"Duder\",\n              lastName: \"Mannington\",\n              suffix: \"Jr.\"\n            }, {\n              firstName: \"Mr.\",\n              lastName: \"Mannington\",\n              suffix: \"Sr.\"\n            }\n          ]\n        });\n        model.attrModels(\"people\", Person);\n        model.people.push(Person({\n          firstName: \"JoJo\",\n          lastName: \"Loco\"\n        }));\n        assert.equal(model.people().length, 3);\n        return assert.equal(model.I.people.length, 3);\n      });\n      return it(\"should track pops\", function() {\n        var model;\n        model = Model({\n          people: [\n            {\n              firstName: \"Duder\",\n              lastName: \"Mannington\",\n              suffix: \"Jr.\"\n            }, {\n              firstName: \"Mr.\",\n              lastName: \"Mannington\",\n              suffix: \"Sr.\"\n            }\n          ]\n        });\n        model.attrModels(\"people\", Person);\n        model.people.pop();\n        assert.equal(model.people().length, 1);\n        return assert.equal(model.I.people.length, 1);\n      });\n    });\n    describe(\"#toJSON\", function() {\n      return it(\"should return an object appropriate for JSON serialization\", function() {\n        var model;\n        model = Model({\n          test: true\n        });\n        return assert(model.toJSON().test);\n      });\n    });\n    return describe(\"#observeAll\", function() {\n      it(\"should observe all attributes of a simple model\");\n      (function() {\n        var model;\n        model = Model({\n          test: true,\n          yolo: \"4life\"\n        });\n        model.observeAll();\n        assert(model.test());\n        return assert.equal(model.yolo(), \"4life\");\n      });\n      return it(\"should camel case underscored names\");\n    });\n  });\n\n}).call(this);\n",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://www.danielx.net/editor/"
      },
      "version": "0.1.3",
      "entryPoint": "main",
      "repository": {
        "branch": "v0.1.3",
        "default_branch": "master",
        "full_name": "distri/model",
        "homepage": null,
        "description": "",
        "html_url": "https://github.com/distri/model",
        "url": "https://api.github.com/repos/distri/model",
        "publishBranch": "gh-pages"
      },
      "dependencies": {
        "core": {
          "source": {
            "LICENSE": {
              "path": "LICENSE",
              "mode": "100644",
              "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
              "type": "blob"
            },
            "README.md": {
              "path": "README.md",
              "mode": "100644",
              "content": "core\n====\n\nAn object extension system.\n",
              "type": "blob"
            },
            "core.coffee.md": {
              "path": "core.coffee.md",
              "mode": "100644",
              "content": "Core\n====\n\nThe Core module is used to add extended functionality to objects without\nextending `Object.prototype` directly.\n\n    Core = (I={}, self={}) ->\n      extend self,\n\nExternal access to instance variables. Use of this property should be avoided\nin general, but can come in handy from time to time.\n\n>     #! example\n>     I =\n>       r: 255\n>       g: 0\n>       b: 100\n>\n>     myObject = Core(I)\n>\n>     [myObject.I.r, myObject.I.g, myObject.I.b]\n\n        I: I\n\nGenerates a public jQuery style getter / setter method for each `String` argument.\n\n>     #! example\n>     myObject = Core\n>       r: 255\n>       g: 0\n>       b: 100\n>\n>     myObject.attrAccessor \"r\", \"g\", \"b\"\n>\n>     myObject.r(254)\n\n        attrAccessor: (attrNames...) ->\n          attrNames.forEach (attrName) ->\n            self[attrName] = (newValue) ->\n              if arguments.length > 0\n                I[attrName] = newValue\n\n                return self\n              else\n                I[attrName]\n\n          return self\n\nGenerates a public jQuery style getter method for each String argument.\n\n>     #! example\n>     myObject = Core\n>       r: 255\n>       g: 0\n>       b: 100\n>\n>     myObject.attrReader \"r\", \"g\", \"b\"\n>\n>     [myObject.r(), myObject.g(), myObject.b()]\n\n        attrReader: (attrNames...) ->\n          attrNames.forEach (attrName) ->\n            self[attrName] = ->\n              I[attrName]\n\n          return self\n\nExtends this object with methods from the passed in object. A shortcut for Object.extend(self, methods)\n\n>     I =\n>       x: 30\n>       y: 40\n>       maxSpeed: 5\n>\n>     # we are using extend to give player\n>     # additional methods that Core doesn't have\n>     player = Core(I).extend\n>       increaseSpeed: ->\n>         I.maxSpeed += 1\n>\n>     player.increaseSpeed()\n\n        extend: (objects...) ->\n          extend self, objects...\n\nIncludes a module in this object. A module is a constructor that takes two parameters, `I` and `self`\n\n>     myObject = Core()\n>     myObject.include(Bindable)\n\n>     # now you can bind handlers to functions\n>     myObject.bind \"someEvent\", ->\n>       alert(\"wow. that was easy.\")\n\n        include: (modules...) ->\n          for Module in modules\n            Module(I, self)\n\n          return self\n\n      return self\n\nHelpers\n-------\n\nExtend an object with the properties of other objects.\n\n    extend = (target, sources...) ->\n      for source in sources\n        for name of source\n          target[name] = source[name]\n\n      return target\n\nExport\n\n    module.exports = Core\n",
              "type": "blob"
            },
            "pixie.cson": {
              "path": "pixie.cson",
              "mode": "100644",
              "content": "entryPoint: \"core\"\nversion: \"0.6.0\"\n",
              "type": "blob"
            },
            "test/core.coffee": {
              "path": "test/core.coffee",
              "mode": "100644",
              "content": "Core = require \"../core\"\n\nok = assert\nequals = assert.equal\ntest = it\n\ndescribe \"Core\", ->\n\n  test \"#extend\", ->\n    o = Core()\n  \n    o.extend\n      test: \"jawsome\"\n  \n    equals o.test, \"jawsome\"\n  \n  test \"#attrAccessor\", ->\n    o = Core\n      test: \"my_val\"\n  \n    o.attrAccessor(\"test\")\n  \n    equals o.test(), \"my_val\"\n    equals o.test(\"new_val\"), o\n    equals o.test(), \"new_val\"\n  \n  test \"#attrReader\", ->\n    o = Core\n      test: \"my_val\"\n  \n    o.attrReader(\"test\")\n  \n    equals o.test(), \"my_val\"\n    equals o.test(\"new_val\"), \"my_val\"\n    equals o.test(), \"my_val\"\n  \n  test \"#include\", ->\n    o = Core\n      test: \"my_val\"\n  \n    M = (I, self) ->\n      self.attrReader \"test\"\n  \n      self.extend\n        test2: \"cool\"\n  \n    ret = o.include M\n  \n    equals ret, o, \"Should return self\"\n  \n    equals o.test(), \"my_val\"\n    equals o.test2, \"cool\"\n  \n  test \"#include multiple\", ->\n    o = Core\n      test: \"my_val\"\n  \n    M = (I, self) ->\n      self.attrReader \"test\"\n  \n      self.extend\n        test2: \"cool\"\n  \n    M2 = (I, self) ->\n      self.extend\n        test2: \"coolio\"\n  \n    o.include M, M2\n  \n    equals o.test2, \"coolio\"\n",
              "type": "blob"
            }
          },
          "distribution": {
            "core": {
              "path": "core",
              "content": "(function() {\n  var Core, extend,\n    __slice = [].slice;\n\n  Core = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = {};\n    }\n    extend(self, {\n      I: I,\n      attrAccessor: function() {\n        var attrNames;\n        attrNames = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        attrNames.forEach(function(attrName) {\n          return self[attrName] = function(newValue) {\n            if (arguments.length > 0) {\n              I[attrName] = newValue;\n              return self;\n            } else {\n              return I[attrName];\n            }\n          };\n        });\n        return self;\n      },\n      attrReader: function() {\n        var attrNames;\n        attrNames = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        attrNames.forEach(function(attrName) {\n          return self[attrName] = function() {\n            return I[attrName];\n          };\n        });\n        return self;\n      },\n      extend: function() {\n        var objects;\n        objects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        return extend.apply(null, [self].concat(__slice.call(objects)));\n      },\n      include: function() {\n        var Module, modules, _i, _len;\n        modules = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        for (_i = 0, _len = modules.length; _i < _len; _i++) {\n          Module = modules[_i];\n          Module(I, self);\n        }\n        return self;\n      }\n    });\n    return self;\n  };\n\n  extend = function() {\n    var name, source, sources, target, _i, _len;\n    target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    for (_i = 0, _len = sources.length; _i < _len; _i++) {\n      source = sources[_i];\n      for (name in source) {\n        target[name] = source[name];\n      }\n    }\n    return target;\n  };\n\n  module.exports = Core;\n\n}).call(this);\n\n//# sourceURL=core.coffee",
              "type": "blob"
            },
            "pixie": {
              "path": "pixie",
              "content": "module.exports = {\"entryPoint\":\"core\",\"version\":\"0.6.0\"};",
              "type": "blob"
            },
            "test/core": {
              "path": "test/core",
              "content": "(function() {\n  var Core, equals, ok, test;\n\n  Core = require(\"../core\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  test = it;\n\n  describe(\"Core\", function() {\n    test(\"#extend\", function() {\n      var o;\n      o = Core();\n      o.extend({\n        test: \"jawsome\"\n      });\n      return equals(o.test, \"jawsome\");\n    });\n    test(\"#attrAccessor\", function() {\n      var o;\n      o = Core({\n        test: \"my_val\"\n      });\n      o.attrAccessor(\"test\");\n      equals(o.test(), \"my_val\");\n      equals(o.test(\"new_val\"), o);\n      return equals(o.test(), \"new_val\");\n    });\n    test(\"#attrReader\", function() {\n      var o;\n      o = Core({\n        test: \"my_val\"\n      });\n      o.attrReader(\"test\");\n      equals(o.test(), \"my_val\");\n      equals(o.test(\"new_val\"), \"my_val\");\n      return equals(o.test(), \"my_val\");\n    });\n    test(\"#include\", function() {\n      var M, o, ret;\n      o = Core({\n        test: \"my_val\"\n      });\n      M = function(I, self) {\n        self.attrReader(\"test\");\n        return self.extend({\n          test2: \"cool\"\n        });\n      };\n      ret = o.include(M);\n      equals(ret, o, \"Should return self\");\n      equals(o.test(), \"my_val\");\n      return equals(o.test2, \"cool\");\n    });\n    return test(\"#include multiple\", function() {\n      var M, M2, o;\n      o = Core({\n        test: \"my_val\"\n      });\n      M = function(I, self) {\n        self.attrReader(\"test\");\n        return self.extend({\n          test2: \"cool\"\n        });\n      };\n      M2 = function(I, self) {\n        return self.extend({\n          test2: \"coolio\"\n        });\n      };\n      o.include(M, M2);\n      return equals(o.test2, \"coolio\");\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/core.coffee",
              "type": "blob"
            }
          },
          "progenitor": {
            "url": "http://strd6.github.io/editor/"
          },
          "version": "0.6.0",
          "entryPoint": "core",
          "repository": {
            "id": 13567517,
            "name": "core",
            "full_name": "distri/core",
            "owner": {
              "login": "distri",
              "id": 6005125,
              "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
              "gravatar_id": null,
              "url": "https://api.github.com/users/distri",
              "html_url": "https://github.com/distri",
              "followers_url": "https://api.github.com/users/distri/followers",
              "following_url": "https://api.github.com/users/distri/following{/other_user}",
              "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
              "organizations_url": "https://api.github.com/users/distri/orgs",
              "repos_url": "https://api.github.com/users/distri/repos",
              "events_url": "https://api.github.com/users/distri/events{/privacy}",
              "received_events_url": "https://api.github.com/users/distri/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/distri/core",
            "description": "An object extension system.",
            "fork": false,
            "url": "https://api.github.com/repos/distri/core",
            "forks_url": "https://api.github.com/repos/distri/core/forks",
            "keys_url": "https://api.github.com/repos/distri/core/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/distri/core/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/distri/core/teams",
            "hooks_url": "https://api.github.com/repos/distri/core/hooks",
            "issue_events_url": "https://api.github.com/repos/distri/core/issues/events{/number}",
            "events_url": "https://api.github.com/repos/distri/core/events",
            "assignees_url": "https://api.github.com/repos/distri/core/assignees{/user}",
            "branches_url": "https://api.github.com/repos/distri/core/branches{/branch}",
            "tags_url": "https://api.github.com/repos/distri/core/tags",
            "blobs_url": "https://api.github.com/repos/distri/core/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/distri/core/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/distri/core/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/distri/core/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/distri/core/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/distri/core/languages",
            "stargazers_url": "https://api.github.com/repos/distri/core/stargazers",
            "contributors_url": "https://api.github.com/repos/distri/core/contributors",
            "subscribers_url": "https://api.github.com/repos/distri/core/subscribers",
            "subscription_url": "https://api.github.com/repos/distri/core/subscription",
            "commits_url": "https://api.github.com/repos/distri/core/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/distri/core/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/distri/core/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/distri/core/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/distri/core/contents/{+path}",
            "compare_url": "https://api.github.com/repos/distri/core/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/distri/core/merges",
            "archive_url": "https://api.github.com/repos/distri/core/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/distri/core/downloads",
            "issues_url": "https://api.github.com/repos/distri/core/issues{/number}",
            "pulls_url": "https://api.github.com/repos/distri/core/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/distri/core/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/distri/core/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/distri/core/labels{/name}",
            "releases_url": "https://api.github.com/repos/distri/core/releases{/id}",
            "created_at": "2013-10-14T17:04:33Z",
            "updated_at": "2013-12-24T00:49:21Z",
            "pushed_at": "2013-10-14T23:49:11Z",
            "git_url": "git://github.com/distri/core.git",
            "ssh_url": "git@github.com:distri/core.git",
            "clone_url": "https://github.com/distri/core.git",
            "svn_url": "https://github.com/distri/core",
            "homepage": null,
            "size": 592,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CoffeeScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master",
            "master_branch": "master",
            "permissions": {
              "admin": true,
              "push": true,
              "pull": true
            },
            "organization": {
              "login": "distri",
              "id": 6005125,
              "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
              "gravatar_id": null,
              "url": "https://api.github.com/users/distri",
              "html_url": "https://github.com/distri",
              "followers_url": "https://api.github.com/users/distri/followers",
              "following_url": "https://api.github.com/users/distri/following{/other_user}",
              "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
              "organizations_url": "https://api.github.com/users/distri/orgs",
              "repos_url": "https://api.github.com/users/distri/repos",
              "events_url": "https://api.github.com/users/distri/events{/privacy}",
              "received_events_url": "https://api.github.com/users/distri/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "network_count": 0,
            "subscribers_count": 1,
            "branch": "v0.6.0",
            "defaultBranch": "master"
          },
          "dependencies": {}
        },
        "observable": {
          "source": {
            "LICENSE": {
              "path": "LICENSE",
              "content": "The MIT License (MIT)\n\nCopyright (c) 2014 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
              "mode": "100644",
              "type": "blob"
            },
            "README.md": {
              "path": "README.md",
              "content": "[![Build Status](https://travis-ci.org/distri/observable.svg?branch=npm)](https://travis-ci.org/distri/observable)\n\nObservable\n==========\n\nInstallation\n------------\n\nNode\n\n    npm install o_0\n\nUsage\n-----\n\n    Observable = require \"o_0\"\n\nGet notified when the value changes.\n\n    observable = Observable 5\n\n    observable() # 5\n\n    observable.observe (newValue) ->\n      console.log newValue\n\n    observable 10 # logs 10 to console\n\nArrays\n------\n\nProxy array methods.\n\n    observable = Observable [1, 2, 3]\n\n    observable.forEach (value) ->\n      # 1, 2, 3\n\nFunctions\n---------\n\nAutomagically compute dependencies for observable functions.\n\n    firstName = Observable \"Duder\"\n    lastName = Observable \"Man\"\n\n    o = Observable ->\n      \"#{firstName()} #{lastName()}\"\n\n    o.observe (newValue) ->\n      assert.equal newValue, \"Duder Bro\"\n\n    lastName \"Bro\"\n",
              "mode": "100644",
              "type": "blob"
            },
            "main.coffee.md": {
              "path": "main.coffee.md",
              "content": "Observable\n==========\n\n`Observable` allows for observing arrays, functions, and objects.\n\nFunction dependencies are automagically observed.\n\nStandard array methods are proxied through to the underlying array.\n\n    Observable = (value, context) ->\n\nReturn the object if it is already an observable object.\n\n      return value if typeof value?.observe is \"function\"\n\nMaintain a set of listeners to observe changes and provide a helper to notify each observer.\n\n      listeners = []\n\n      notify = (newValue) ->\n        copy(listeners).forEach (listener) ->\n          listener(newValue)\n\nOur observable function is stored as a reference to `self`.\n\nIf `value` is a function compute dependencies and listen to observables that it depends on.\n\n      if typeof value is 'function'\n        fn = value\n\nOur return function is a function that holds only a cached value which is updated\nwhen it's dependencies change.\n\nThe `magicDependency` call is so other functions can depend on this computed function the\nsame way we depend on other types of observables.\n\n        self = ->\n          # Automagic dependency observation\n          magicDependency(self)\n\n          return value\n\n        self.each = (args...) ->\n          magicDependency(self)\n\n          splat(value).forEach(args...)\n\n        changed = ->\n          value = computeDependencies(self, fn, changed, context)\n          notify(value)\n\n        value = computeDependencies(self, fn, changed, context)\n\n      else\n\nWhen called with zero arguments it is treated as a getter. When called with one argument it is treated as a setter.\n\nChanges to the value will trigger notifications.\n\nThe value is always returned.\n\n        self = (newValue) ->\n          if arguments.length > 0\n            if value != newValue\n              value = newValue\n\n              notify(newValue)\n          else\n            # Automagic dependency observation\n            magicDependency(self)\n\n          return value\n\nThis `each` iterator is similar to [the Maybe monad](http://en.wikipedia.org/wiki/Monad_&#40;functional_programming&#41;#The_Maybe_monad) in that our observable may contain a single value or nothing at all.\n\n      self.each = (args...) ->\n        magicDependency(self)\n\n        if value?\n          [value].forEach(args...)\n\nIf the value is an array then proxy array methods and add notifications to mutation events.\n\n      if Array.isArray(value)\n        [\n          \"concat\"\n          \"every\"\n          \"filter\"\n          \"forEach\"\n          \"indexOf\"\n          \"join\"\n          \"lastIndexOf\"\n          \"map\"\n          \"reduce\"\n          \"reduceRight\"\n          \"slice\"\n          \"some\"\n        ].forEach (method) ->\n          self[method] = (args...) ->\n            magicDependency(self)\n            value[method](args...)\n\n        [\n          \"pop\"\n          \"push\"\n          \"reverse\"\n          \"shift\"\n          \"splice\"\n          \"sort\"\n          \"unshift\"\n        ].forEach (method) ->\n          self[method] = (args...) ->\n            notifyReturning value[method](args...)\n\n        notifyReturning = (returnValue) ->\n          notify(value)\n\n          return returnValue\n\nAdd some extra helpful methods to array observables.\n\n        extend self,\n          each: (args...) ->\n            self.forEach(args...)\n\n            return self\n\nRemove an element from the array and notify observers of changes.\n\n          remove: (object) ->\n            index = value.indexOf(object)\n\n            if index >= 0\n              notifyReturning value.splice(index, 1)[0]\n\n          get: (index) ->\n            magicDependency(self)\n            value[index]\n\n          first: ->\n            magicDependency(self)\n            value[0]\n\n          last: ->\n            magicDependency(self)\n            value[value.length-1]\n\n          size: ->\n            magicDependency(self)\n            value.length\n\n      extend self,\n        listeners: listeners\n\n        observe: (listener) ->\n          listeners.push listener\n\n        stopObserving: (fn) ->\n          remove listeners, fn\n\n        toggle: ->\n          self !value\n\n        increment: (n) ->\n          self value + n\n\n        decrement: (n) ->\n          self value - n\n\n        toString: ->\n          \"Observable(#{value})\"\n\n      return self\n\n    Observable.concat = (args...) ->\n      args = Observable(args)\n\n      o = Observable ->\n        flatten args.map(splat)\n\n      o.push = args.push\n\n      return o\n\nExport `Observable`\n\n    module.exports = Observable\n\nAppendix\n--------\n\nThe extend method adds one objects properties to another.\n\n    extend = (target, sources...) ->\n      for source in sources\n        for name of source\n          target[name] = source[name]\n\n      return target\n\nSuper hax for computing dependencies. This needs to be a shared global so that\ndifferent bundled versions of observable libraries can interoperate.\n\n    global.OBSERVABLE_ROOT_HACK = []\n\n    autoDeps = ->\n      last(global.OBSERVABLE_ROOT_HACK)\n\n    magicDependency = (self) ->\n      if observerStack = autoDeps()\n        observerStack.push self\n\n    withBase = (self, update, fn) ->\n      global.OBSERVABLE_ROOT_HACK.push(deps = [])\n\n      try\n        value = fn()\n        self._deps?.forEach (observable) ->\n          observable.stopObserving update\n\n        self._deps = deps\n\n        deps.forEach (observable) ->\n          observable.observe update\n      finally\n        global.OBSERVABLE_ROOT_HACK.pop()\n\n      return value\n\nAutomagically compute dependencies.\n\n    computeDependencies = (self, fn, update, context) ->\n      withBase self, update, ->\n        fn.call(context)\n\nRemove a value from an array.\n\n    remove = (array, value) ->\n      index = array.indexOf(value)\n\n      if index >= 0\n        array.splice(index, 1)[0]\n\n    copy = (array) ->\n      array.concat([])\n\n    get = (arg) ->\n      if typeof arg is \"function\"\n        arg()\n      else\n        arg\n\n    splat = (item) ->\n      results = []\n\n      if typeof item.forEach is \"function\"\n        item.forEach (i) ->\n          results.push i\n      else\n        result = get item\n\n        results.push result if result?\n\n      results\n\n    last = (array) ->\n      array[array.length - 1]\n\n    flatten = (array) ->\n      array.reduce (a, b) ->\n        a.concat(b)\n      , []\n",
              "mode": "100644",
              "type": "blob"
            },
            "pixie.cson": {
              "path": "pixie.cson",
              "content": "version: \"0.3.1\"\n",
              "mode": "100644",
              "type": "blob"
            },
            "test/observable.coffee": {
              "path": "test/observable.coffee",
              "content": "global.Observable = require \"../main\"\n\ndescribe 'Observable', ->\n  it 'should create an observable for an object', ->\n    n = 5\n\n    observable = Observable(n)\n\n    assert.equal(observable(), n)\n\n  it 'should fire events when setting', ->\n    string = \"yolo\"\n\n    observable = Observable(string)\n    observable.observe (newValue) ->\n      assert.equal newValue, \"4life\"\n\n    observable(\"4life\")\n\n  it 'should be idempotent', ->\n    o = Observable(5)\n\n    assert.equal o, Observable(o)\n\n  describe \"#each\", ->\n    it \"should be invoked once if there is an observable\", ->\n      o = Observable(5)\n      called = 0\n\n      o.each (value) ->\n        called += 1\n        assert.equal value, 5\n\n      assert.equal called, 1\n\n    it \"should not be invoked if observable is null\", ->\n      o = Observable(null)\n      called = 0\n\n      o.each (value) ->\n        called += 1\n\n      assert.equal called, 0\n\n  it \"should allow for stopping observation\", ->\n    observable = Observable(\"string\")\n\n    called = 0\n    fn = (newValue) ->\n      called += 1\n      assert.equal newValue, \"4life\"\n\n    observable.observe fn\n\n    observable(\"4life\")\n\n    observable.stopObserving fn\n\n    observable(\"wat\")\n\n    assert.equal called, 1\n\n  it \"should increment\", ->\n    observable = Observable 1\n\n    observable.increment(5)\n\n    assert.equal observable(), 6\n\n  it \"should decremnet\", ->\n    observable = Observable 1\n\n    observable.decrement 5\n\n    assert.equal observable(), -4\n\n  it \"should toggle\", ->\n    observable = Observable false\n\n    observable.toggle()\n    assert.equal observable(), true\n\n    observable.toggle()\n    assert.equal observable(), false\n\n  it \"should trigger when toggling\", (done) ->\n    observable = Observable true\n    observable.observe (v) ->\n      assert.equal v, false\n      done()\n\n    observable.toggle()\n\ndescribe \"Observable Array\", ->\n  it \"should proxy array methods\", ->\n    o = Observable [5]\n\n    o.map (n) ->\n      assert.equal n, 5\n\n  it \"should notify on mutation methods\", (done) ->\n    o = Observable []\n\n    o.observe (newValue) ->\n      assert.equal newValue[0], 1\n\n    o.push 1\n\n    done()\n\n  it \"should have an each method\", ->\n    o = Observable []\n\n    assert o.each\n\n  it \"#get\", ->\n    o = Observable [0, 1, 2, 3]\n\n    assert.equal o.get(2), 2\n\n  it \"#first\", ->\n    o = Observable [0, 1, 2, 3]\n\n    assert.equal o.first(), 0\n\n  it \"#last\", ->\n    o = Observable [0, 1, 2, 3]\n\n    assert.equal o.last(), 3\n\n  it \"#remove\", (done) ->\n    o = Observable [0, 1, 2, 3]\n\n    o.observe (newValue) ->\n      assert.equal newValue.length, 3\n      setTimeout ->\n        done()\n      , 0\n\n    assert.equal o.remove(2), 2\n\n  # TODO: This looks like it might be impossible\n  it \"should proxy the length property\"\n\ndescribe \"Observable functions\", ->\n  it \"should compute dependencies\", (done) ->\n    firstName = Observable \"Duder\"\n    lastName = Observable \"Man\"\n\n    o = Observable ->\n      \"#{firstName()} #{lastName()}\"\n\n    o.observe (newValue) ->\n      assert.equal newValue, \"Duder Bro\"\n\n      done()\n\n    lastName \"Bro\"\n\n  it \"should compute array#get as a dependency\", ->\n    observableArray = Observable [0, 1, 2]\n\n    observableFn = Observable ->\n      observableArray.get(0)\n\n    assert.equal observableFn(), 0\n\n    observableArray([5])\n\n    assert.equal observableFn(), 5\n\n  it \"should compute array#first as a dependency\", ->\n    observableArray = Observable [0, 1, 2]\n\n    observableFn = Observable ->\n      observableArray.first() + 1\n\n    assert.equal observableFn(), 1\n\n    observableArray([5])\n\n    assert.equal observableFn(), 6\n\n  it \"should compute array#last as a dependency\", ->\n    observableArray = Observable [0, 1, 2]\n\n    observableFn = Observable ->\n      observableArray.last()\n\n    assert.equal observableFn(), 2\n\n    observableArray.pop()\n\n    assert.equal observableFn(), 1\n\n    observableArray([5])\n\n    assert.equal observableFn(), 5\n\n  it \"should compute array#size as a dependency\", ->\n    observableArray = Observable [0, 1, 2]\n\n    observableFn = Observable ->\n      observableArray.size() * 2\n\n    assert.equal observableFn(), 6\n\n    observableArray.pop()\n    assert.equal observableFn(), 4\n    observableArray.shift()\n    assert.equal observableFn(), 2\n\n  it \"should allow double nesting\", (done) ->\n    bottom = Observable \"rad\"\n    middle = Observable ->\n      bottom()\n    top = Observable ->\n      middle()\n\n    top.observe (newValue) ->\n      assert.equal newValue, \"wat\"\n      assert.equal top(), newValue\n      assert.equal middle(), newValue\n\n      done()\n\n    bottom(\"wat\")\n\n  it \"should work with dynamic dependencies\", ->\n    observableArray = Observable []\n\n    dynamicObservable = Observable ->\n      observableArray.filter (item) ->\n        item.age() > 3\n\n    assert.equal dynamicObservable().length, 0\n\n    observableArray.push\n      age: Observable 1\n\n    observableArray()[0].age 5\n    assert.equal dynamicObservable().length, 1\n\n  it \"should work with context\", ->\n    model =\n      a: Observable \"Hello\"\n      b: Observable \"there\"\n\n    model.c = Observable ->\n      \"#{@a()} #{@b()}\"\n    , model\n\n    assert.equal model.c(), \"Hello there\"\n\n    model.b \"world\"\n\n    assert.equal model.c(), \"Hello world\"\n\n  it \"should be ok even if the function throws an exception\", ->\n    assert.throws ->\n      t = Observable ->\n        throw \"wat\"\n\n    # TODO: Should be able to find a test case that is affected by this rather that\n    # checking it directly\n    assert.equal global.OBSERVABLE_ROOT_HACK.length, 0\n\n  it \"should have an each method\", ->\n    o = Observable ->\n\n    assert o.each\n\n  it \"should not invoke when returning undefined\", ->\n    o = Observable ->\n\n    o.each ->\n      assert false\n\n  it \"should invoke when returning any defined value\", (done) ->\n    o = Observable -> 5\n\n    o.each (n) ->\n      assert.equal n, 5\n      done()\n\n  it \"should work on an array dependency\", ->\n    oA = Observable [1, 2, 3]\n\n    o = Observable ->\n      oA()[0]\n\n    last = Observable ->\n      oA()[oA().length-1]\n\n    assert.equal o(), 1\n\n    oA.unshift 0\n\n    assert.equal o(), 0\n\n    oA.push 4\n\n    assert.equal last(), 4, \"Last should be 4\"\n\n  it \"should work with multiple dependencies\", ->\n    letter = Observable \"A\"\n    checked = ->\n      l = letter()\n      @name().indexOf(l) is 0\n\n    first = {name: Observable(\"Andrew\")}\n    first.checked = Observable checked, first\n\n    second = {name: Observable(\"Benjamin\")}\n    second.checked = Observable checked, second\n\n    assert.equal first.checked(), true\n    assert.equal second.checked(), false\n\n    assert.equal letter.listeners.length, 2\n\n    letter \"B\"\n\n    assert.equal first.checked(), false\n    assert.equal second.checked(), true\n\n  it \"should work with nested observable construction\", ->\n    gen = Observable ->\n      Observable \"Duder\"\n\n    o = gen()\n\n    assert.equal o(), \"Duder\"\n\n    o(\"wat\")\n\n    assert.equal o(), \"wat\"\n\n  describe \"Scoping\", ->\n    it \"should be scoped to optional context\", (done) ->\n      model =\n        firstName: Observable \"Duder\"\n        lastName: Observable \"Man\"\n\n      model.name = Observable ->\n        \"#{@firstName()} #{@lastName()}\"\n      , model\n\n      model.name.observe (newValue) ->\n        assert.equal newValue, \"Duder Bro\"\n\n        done()\n\n      model.lastName \"Bro\"\n\n  describe \"concat\", ->\n    it \"should return an observable array that changes based on changes in inputs\", ->\n      numbers = Observable [1, 2, 3]\n      letters = Observable [\"a\", \"b\", \"c\"]\n      item = Observable({})\n      nullable = Observable null\n\n      observableArray = Observable.concat numbers, \"literal\", letters, item, nullable\n\n      assert.equal observableArray().length, 3 + 1 + 3 + 1\n\n      assert.equal observableArray()[0], 1\n      assert.equal observableArray()[3], \"literal\"\n      assert.equal observableArray()[4], \"a\"\n      assert.equal observableArray()[7], item()\n\n      numbers.push 4\n\n      assert.equal observableArray().length, 9\n\n      nullable \"cool\"\n\n      assert.equal observableArray().length, 10\n\n    it \"should work with observable functions that return arrays\", ->\n      item = Observable(\"wat\")\n\n      computedArray = Observable ->\n        [item()]\n\n      observableArray = Observable.concat computedArray, computedArray\n\n      assert.equal observableArray().length, 2\n\n      assert.equal observableArray()[1], \"wat\"\n\n      item \"yolo\"\n\n      assert.equal observableArray()[1], \"yolo\"\n\n    it \"should have a push method\", ->\n      observableArray = Observable.concat()\n\n      observable = Observable \"hey\"\n\n      observableArray.push observable\n\n      assert.equal observableArray()[0], \"hey\"\n\n      observable \"wat\"\n\n      assert.equal observableArray()[0], \"wat\"\n\n      observableArray.push \"cool\"\n      observableArray.push \"radical\"\n\n      assert.equal observableArray().length, 3\n\n    it \"should be observable\", (done) ->\n      observableArray = Observable.concat()\n\n      observableArray.observe (items) ->\n        assert.equal items.length, 3\n        done()\n\n      observableArray.push [\"A\", \"B\", \"C\"]\n\n    it \"should have an each method\", ->\n      observableArray = Observable.concat([\"A\", \"B\", \"C\"])\n\n      n = 0\n      observableArray.each () ->\n        n += 1\n\n      assert.equal n, 3\n",
              "mode": "100644",
              "type": "blob"
            }
          },
          "distribution": {
            "main": {
              "path": "main",
              "content": "(function() {\n  var Observable, autoDeps, computeDependencies, copy, extend, flatten, get, last, magicDependency, remove, splat, withBase,\n    __slice = [].slice;\n\n  Observable = function(value, context) {\n    var changed, fn, listeners, notify, notifyReturning, self;\n    if (typeof (value != null ? value.observe : void 0) === \"function\") {\n      return value;\n    }\n    listeners = [];\n    notify = function(newValue) {\n      return copy(listeners).forEach(function(listener) {\n        return listener(newValue);\n      });\n    };\n    if (typeof value === 'function') {\n      fn = value;\n      self = function() {\n        magicDependency(self);\n        return value;\n      };\n      self.each = function() {\n        var args, _ref;\n        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n        magicDependency(self);\n        return (_ref = splat(value)).forEach.apply(_ref, args);\n      };\n      changed = function() {\n        value = computeDependencies(self, fn, changed, context);\n        return notify(value);\n      };\n      value = computeDependencies(self, fn, changed, context);\n    } else {\n      self = function(newValue) {\n        if (arguments.length > 0) {\n          if (value !== newValue) {\n            value = newValue;\n            notify(newValue);\n          }\n        } else {\n          magicDependency(self);\n        }\n        return value;\n      };\n    }\n    self.each = function() {\n      var args, _ref;\n      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n      magicDependency(self);\n      if (value != null) {\n        return (_ref = [value]).forEach.apply(_ref, args);\n      }\n    };\n    if (Array.isArray(value)) {\n      [\"concat\", \"every\", \"filter\", \"forEach\", \"indexOf\", \"join\", \"lastIndexOf\", \"map\", \"reduce\", \"reduceRight\", \"slice\", \"some\"].forEach(function(method) {\n        return self[method] = function() {\n          var args;\n          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n          magicDependency(self);\n          return value[method].apply(value, args);\n        };\n      });\n      [\"pop\", \"push\", \"reverse\", \"shift\", \"splice\", \"sort\", \"unshift\"].forEach(function(method) {\n        return self[method] = function() {\n          var args;\n          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n          return notifyReturning(value[method].apply(value, args));\n        };\n      });\n      notifyReturning = function(returnValue) {\n        notify(value);\n        return returnValue;\n      };\n      extend(self, {\n        each: function() {\n          var args;\n          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n          self.forEach.apply(self, args);\n          return self;\n        },\n        remove: function(object) {\n          var index;\n          index = value.indexOf(object);\n          if (index >= 0) {\n            return notifyReturning(value.splice(index, 1)[0]);\n          }\n        },\n        get: function(index) {\n          magicDependency(self);\n          return value[index];\n        },\n        first: function() {\n          magicDependency(self);\n          return value[0];\n        },\n        last: function() {\n          magicDependency(self);\n          return value[value.length - 1];\n        },\n        size: function() {\n          magicDependency(self);\n          return value.length;\n        }\n      });\n    }\n    extend(self, {\n      listeners: listeners,\n      observe: function(listener) {\n        return listeners.push(listener);\n      },\n      stopObserving: function(fn) {\n        return remove(listeners, fn);\n      },\n      toggle: function() {\n        return self(!value);\n      },\n      increment: function(n) {\n        return self(value + n);\n      },\n      decrement: function(n) {\n        return self(value - n);\n      },\n      toString: function() {\n        return \"Observable(\" + value + \")\";\n      }\n    });\n    return self;\n  };\n\n  Observable.concat = function() {\n    var args, o;\n    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    args = Observable(args);\n    o = Observable(function() {\n      return flatten(args.map(splat));\n    });\n    o.push = args.push;\n    return o;\n  };\n\n  module.exports = Observable;\n\n  extend = function() {\n    var name, source, sources, target, _i, _len;\n    target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    for (_i = 0, _len = sources.length; _i < _len; _i++) {\n      source = sources[_i];\n      for (name in source) {\n        target[name] = source[name];\n      }\n    }\n    return target;\n  };\n\n  global.OBSERVABLE_ROOT_HACK = [];\n\n  autoDeps = function() {\n    return last(global.OBSERVABLE_ROOT_HACK);\n  };\n\n  magicDependency = function(self) {\n    var observerStack;\n    if (observerStack = autoDeps()) {\n      return observerStack.push(self);\n    }\n  };\n\n  withBase = function(self, update, fn) {\n    var deps, value, _ref;\n    global.OBSERVABLE_ROOT_HACK.push(deps = []);\n    try {\n      value = fn();\n      if ((_ref = self._deps) != null) {\n        _ref.forEach(function(observable) {\n          return observable.stopObserving(update);\n        });\n      }\n      self._deps = deps;\n      deps.forEach(function(observable) {\n        return observable.observe(update);\n      });\n    } finally {\n      global.OBSERVABLE_ROOT_HACK.pop();\n    }\n    return value;\n  };\n\n  computeDependencies = function(self, fn, update, context) {\n    return withBase(self, update, function() {\n      return fn.call(context);\n    });\n  };\n\n  remove = function(array, value) {\n    var index;\n    index = array.indexOf(value);\n    if (index >= 0) {\n      return array.splice(index, 1)[0];\n    }\n  };\n\n  copy = function(array) {\n    return array.concat([]);\n  };\n\n  get = function(arg) {\n    if (typeof arg === \"function\") {\n      return arg();\n    } else {\n      return arg;\n    }\n  };\n\n  splat = function(item) {\n    var result, results;\n    results = [];\n    if (typeof item.forEach === \"function\") {\n      item.forEach(function(i) {\n        return results.push(i);\n      });\n    } else {\n      result = get(item);\n      if (result != null) {\n        results.push(result);\n      }\n    }\n    return results;\n  };\n\n  last = function(array) {\n    return array[array.length - 1];\n  };\n\n  flatten = function(array) {\n    return array.reduce(function(a, b) {\n      return a.concat(b);\n    }, []);\n  };\n\n}).call(this);\n",
              "type": "blob"
            },
            "pixie": {
              "path": "pixie",
              "content": "module.exports = {\"version\":\"0.3.1\"};",
              "type": "blob"
            },
            "test/observable": {
              "path": "test/observable",
              "content": "(function() {\n  global.Observable = require(\"../main\");\n\n  describe('Observable', function() {\n    it('should create an observable for an object', function() {\n      var n, observable;\n      n = 5;\n      observable = Observable(n);\n      return assert.equal(observable(), n);\n    });\n    it('should fire events when setting', function() {\n      var observable, string;\n      string = \"yolo\";\n      observable = Observable(string);\n      observable.observe(function(newValue) {\n        return assert.equal(newValue, \"4life\");\n      });\n      return observable(\"4life\");\n    });\n    it('should be idempotent', function() {\n      var o;\n      o = Observable(5);\n      return assert.equal(o, Observable(o));\n    });\n    describe(\"#each\", function() {\n      it(\"should be invoked once if there is an observable\", function() {\n        var called, o;\n        o = Observable(5);\n        called = 0;\n        o.each(function(value) {\n          called += 1;\n          return assert.equal(value, 5);\n        });\n        return assert.equal(called, 1);\n      });\n      return it(\"should not be invoked if observable is null\", function() {\n        var called, o;\n        o = Observable(null);\n        called = 0;\n        o.each(function(value) {\n          return called += 1;\n        });\n        return assert.equal(called, 0);\n      });\n    });\n    it(\"should allow for stopping observation\", function() {\n      var called, fn, observable;\n      observable = Observable(\"string\");\n      called = 0;\n      fn = function(newValue) {\n        called += 1;\n        return assert.equal(newValue, \"4life\");\n      };\n      observable.observe(fn);\n      observable(\"4life\");\n      observable.stopObserving(fn);\n      observable(\"wat\");\n      return assert.equal(called, 1);\n    });\n    it(\"should increment\", function() {\n      var observable;\n      observable = Observable(1);\n      observable.increment(5);\n      return assert.equal(observable(), 6);\n    });\n    it(\"should decremnet\", function() {\n      var observable;\n      observable = Observable(1);\n      observable.decrement(5);\n      return assert.equal(observable(), -4);\n    });\n    it(\"should toggle\", function() {\n      var observable;\n      observable = Observable(false);\n      observable.toggle();\n      assert.equal(observable(), true);\n      observable.toggle();\n      return assert.equal(observable(), false);\n    });\n    return it(\"should trigger when toggling\", function(done) {\n      var observable;\n      observable = Observable(true);\n      observable.observe(function(v) {\n        assert.equal(v, false);\n        return done();\n      });\n      return observable.toggle();\n    });\n  });\n\n  describe(\"Observable Array\", function() {\n    it(\"should proxy array methods\", function() {\n      var o;\n      o = Observable([5]);\n      return o.map(function(n) {\n        return assert.equal(n, 5);\n      });\n    });\n    it(\"should notify on mutation methods\", function(done) {\n      var o;\n      o = Observable([]);\n      o.observe(function(newValue) {\n        return assert.equal(newValue[0], 1);\n      });\n      o.push(1);\n      return done();\n    });\n    it(\"should have an each method\", function() {\n      var o;\n      o = Observable([]);\n      return assert(o.each);\n    });\n    it(\"#get\", function() {\n      var o;\n      o = Observable([0, 1, 2, 3]);\n      return assert.equal(o.get(2), 2);\n    });\n    it(\"#first\", function() {\n      var o;\n      o = Observable([0, 1, 2, 3]);\n      return assert.equal(o.first(), 0);\n    });\n    it(\"#last\", function() {\n      var o;\n      o = Observable([0, 1, 2, 3]);\n      return assert.equal(o.last(), 3);\n    });\n    it(\"#remove\", function(done) {\n      var o;\n      o = Observable([0, 1, 2, 3]);\n      o.observe(function(newValue) {\n        assert.equal(newValue.length, 3);\n        return setTimeout(function() {\n          return done();\n        }, 0);\n      });\n      return assert.equal(o.remove(2), 2);\n    });\n    return it(\"should proxy the length property\");\n  });\n\n  describe(\"Observable functions\", function() {\n    it(\"should compute dependencies\", function(done) {\n      var firstName, lastName, o;\n      firstName = Observable(\"Duder\");\n      lastName = Observable(\"Man\");\n      o = Observable(function() {\n        return \"\" + (firstName()) + \" \" + (lastName());\n      });\n      o.observe(function(newValue) {\n        assert.equal(newValue, \"Duder Bro\");\n        return done();\n      });\n      return lastName(\"Bro\");\n    });\n    it(\"should compute array#get as a dependency\", function() {\n      var observableArray, observableFn;\n      observableArray = Observable([0, 1, 2]);\n      observableFn = Observable(function() {\n        return observableArray.get(0);\n      });\n      assert.equal(observableFn(), 0);\n      observableArray([5]);\n      return assert.equal(observableFn(), 5);\n    });\n    it(\"should compute array#first as a dependency\", function() {\n      var observableArray, observableFn;\n      observableArray = Observable([0, 1, 2]);\n      observableFn = Observable(function() {\n        return observableArray.first() + 1;\n      });\n      assert.equal(observableFn(), 1);\n      observableArray([5]);\n      return assert.equal(observableFn(), 6);\n    });\n    it(\"should compute array#last as a dependency\", function() {\n      var observableArray, observableFn;\n      observableArray = Observable([0, 1, 2]);\n      observableFn = Observable(function() {\n        return observableArray.last();\n      });\n      assert.equal(observableFn(), 2);\n      observableArray.pop();\n      assert.equal(observableFn(), 1);\n      observableArray([5]);\n      return assert.equal(observableFn(), 5);\n    });\n    it(\"should compute array#size as a dependency\", function() {\n      var observableArray, observableFn;\n      observableArray = Observable([0, 1, 2]);\n      observableFn = Observable(function() {\n        return observableArray.size() * 2;\n      });\n      assert.equal(observableFn(), 6);\n      observableArray.pop();\n      assert.equal(observableFn(), 4);\n      observableArray.shift();\n      return assert.equal(observableFn(), 2);\n    });\n    it(\"should allow double nesting\", function(done) {\n      var bottom, middle, top;\n      bottom = Observable(\"rad\");\n      middle = Observable(function() {\n        return bottom();\n      });\n      top = Observable(function() {\n        return middle();\n      });\n      top.observe(function(newValue) {\n        assert.equal(newValue, \"wat\");\n        assert.equal(top(), newValue);\n        assert.equal(middle(), newValue);\n        return done();\n      });\n      return bottom(\"wat\");\n    });\n    it(\"should work with dynamic dependencies\", function() {\n      var dynamicObservable, observableArray;\n      observableArray = Observable([]);\n      dynamicObservable = Observable(function() {\n        return observableArray.filter(function(item) {\n          return item.age() > 3;\n        });\n      });\n      assert.equal(dynamicObservable().length, 0);\n      observableArray.push({\n        age: Observable(1)\n      });\n      observableArray()[0].age(5);\n      return assert.equal(dynamicObservable().length, 1);\n    });\n    it(\"should work with context\", function() {\n      var model;\n      model = {\n        a: Observable(\"Hello\"),\n        b: Observable(\"there\")\n      };\n      model.c = Observable(function() {\n        return \"\" + (this.a()) + \" \" + (this.b());\n      }, model);\n      assert.equal(model.c(), \"Hello there\");\n      model.b(\"world\");\n      return assert.equal(model.c(), \"Hello world\");\n    });\n    it(\"should be ok even if the function throws an exception\", function() {\n      assert.throws(function() {\n        var t;\n        return t = Observable(function() {\n          throw \"wat\";\n        });\n      });\n      return assert.equal(global.OBSERVABLE_ROOT_HACK.length, 0);\n    });\n    it(\"should have an each method\", function() {\n      var o;\n      o = Observable(function() {});\n      return assert(o.each);\n    });\n    it(\"should not invoke when returning undefined\", function() {\n      var o;\n      o = Observable(function() {});\n      return o.each(function() {\n        return assert(false);\n      });\n    });\n    it(\"should invoke when returning any defined value\", function(done) {\n      var o;\n      o = Observable(function() {\n        return 5;\n      });\n      return o.each(function(n) {\n        assert.equal(n, 5);\n        return done();\n      });\n    });\n    it(\"should work on an array dependency\", function() {\n      var last, o, oA;\n      oA = Observable([1, 2, 3]);\n      o = Observable(function() {\n        return oA()[0];\n      });\n      last = Observable(function() {\n        return oA()[oA().length - 1];\n      });\n      assert.equal(o(), 1);\n      oA.unshift(0);\n      assert.equal(o(), 0);\n      oA.push(4);\n      return assert.equal(last(), 4, \"Last should be 4\");\n    });\n    it(\"should work with multiple dependencies\", function() {\n      var checked, first, letter, second;\n      letter = Observable(\"A\");\n      checked = function() {\n        var l;\n        l = letter();\n        return this.name().indexOf(l) === 0;\n      };\n      first = {\n        name: Observable(\"Andrew\")\n      };\n      first.checked = Observable(checked, first);\n      second = {\n        name: Observable(\"Benjamin\")\n      };\n      second.checked = Observable(checked, second);\n      assert.equal(first.checked(), true);\n      assert.equal(second.checked(), false);\n      assert.equal(letter.listeners.length, 2);\n      letter(\"B\");\n      assert.equal(first.checked(), false);\n      return assert.equal(second.checked(), true);\n    });\n    it(\"should work with nested observable construction\", function() {\n      var gen, o;\n      gen = Observable(function() {\n        return Observable(\"Duder\");\n      });\n      o = gen();\n      assert.equal(o(), \"Duder\");\n      o(\"wat\");\n      return assert.equal(o(), \"wat\");\n    });\n    describe(\"Scoping\", function() {\n      return it(\"should be scoped to optional context\", function(done) {\n        var model;\n        model = {\n          firstName: Observable(\"Duder\"),\n          lastName: Observable(\"Man\")\n        };\n        model.name = Observable(function() {\n          return \"\" + (this.firstName()) + \" \" + (this.lastName());\n        }, model);\n        model.name.observe(function(newValue) {\n          assert.equal(newValue, \"Duder Bro\");\n          return done();\n        });\n        return model.lastName(\"Bro\");\n      });\n    });\n    return describe(\"concat\", function() {\n      it(\"should return an observable array that changes based on changes in inputs\", function() {\n        var item, letters, nullable, numbers, observableArray;\n        numbers = Observable([1, 2, 3]);\n        letters = Observable([\"a\", \"b\", \"c\"]);\n        item = Observable({});\n        nullable = Observable(null);\n        observableArray = Observable.concat(numbers, \"literal\", letters, item, nullable);\n        assert.equal(observableArray().length, 3 + 1 + 3 + 1);\n        assert.equal(observableArray()[0], 1);\n        assert.equal(observableArray()[3], \"literal\");\n        assert.equal(observableArray()[4], \"a\");\n        assert.equal(observableArray()[7], item());\n        numbers.push(4);\n        assert.equal(observableArray().length, 9);\n        nullable(\"cool\");\n        return assert.equal(observableArray().length, 10);\n      });\n      it(\"should work with observable functions that return arrays\", function() {\n        var computedArray, item, observableArray;\n        item = Observable(\"wat\");\n        computedArray = Observable(function() {\n          return [item()];\n        });\n        observableArray = Observable.concat(computedArray, computedArray);\n        assert.equal(observableArray().length, 2);\n        assert.equal(observableArray()[1], \"wat\");\n        item(\"yolo\");\n        return assert.equal(observableArray()[1], \"yolo\");\n      });\n      it(\"should have a push method\", function() {\n        var observable, observableArray;\n        observableArray = Observable.concat();\n        observable = Observable(\"hey\");\n        observableArray.push(observable);\n        assert.equal(observableArray()[0], \"hey\");\n        observable(\"wat\");\n        assert.equal(observableArray()[0], \"wat\");\n        observableArray.push(\"cool\");\n        observableArray.push(\"radical\");\n        return assert.equal(observableArray().length, 3);\n      });\n      it(\"should be observable\", function(done) {\n        var observableArray;\n        observableArray = Observable.concat();\n        observableArray.observe(function(items) {\n          assert.equal(items.length, 3);\n          return done();\n        });\n        return observableArray.push([\"A\", \"B\", \"C\"]);\n      });\n      return it(\"should have an each method\", function() {\n        var n, observableArray;\n        observableArray = Observable.concat([\"A\", \"B\", \"C\"]);\n        n = 0;\n        observableArray.each(function() {\n          return n += 1;\n        });\n        return assert.equal(n, 3);\n      });\n    });\n  });\n\n}).call(this);\n",
              "type": "blob"
            }
          },
          "progenitor": {
            "url": "http://www.danielx.net/editor/"
          },
          "version": "0.3.1",
          "entryPoint": "main",
          "repository": {
            "branch": "v0.3.1",
            "default_branch": "master",
            "full_name": "distri/observable",
            "homepage": "http://observable.us",
            "description": "",
            "html_url": "https://github.com/distri/observable",
            "url": "https://api.github.com/repos/distri/observable",
            "publishBranch": "gh-pages"
          },
          "dependencies": {}
        }
      }
    },
    "util": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "util\n====\n\nSmall utility methods for JS\n",
          "type": "blob"
        },
        "main.coffee.md": {
          "path": "main.coffee.md",
          "mode": "100644",
          "content": "Util\n====\n\n    module.exports =\n      approach: (current, target, amount) ->\n        (target - current).clamp(-amount, amount) + current\n\nApply a stylesheet idempotently.\n\n      applyStylesheet: (style, id=\"primary\") ->\n        styleNode = document.createElement(\"style\")\n        styleNode.innerHTML = style\n        styleNode.id = id\n\n        if previousStyleNode = document.head.querySelector(\"style##{id}\")\n          previousStyleNode.parentNode.removeChild(prevousStyleNode)\n\n        document.head.appendChild(styleNode)\n\n      defaults: (target, objects...) ->\n        for object in objects\n          for name of object\n            unless target.hasOwnProperty(name)\n              target[name] = object[name]\n\n        return target\n\n      extend: (target, sources...) ->\n        for source in sources\n          for name of source\n            target[name] = source[name]\n\n        return target\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.1.0\"\n",
          "type": "blob"
        }
      },
      "distribution": {
        "main": {
          "path": "main",
          "content": "(function() {\n  var __slice = [].slice;\n\n  module.exports = {\n    approach: function(current, target, amount) {\n      return (target - current).clamp(-amount, amount) + current;\n    },\n    applyStylesheet: function(style, id) {\n      var previousStyleNode, styleNode;\n      if (id == null) {\n        id = \"primary\";\n      }\n      styleNode = document.createElement(\"style\");\n      styleNode.innerHTML = style;\n      styleNode.id = id;\n      if (previousStyleNode = document.head.querySelector(\"style#\" + id)) {\n        previousStyleNode.parentNode.removeChild(prevousStyleNode);\n      }\n      return document.head.appendChild(styleNode);\n    },\n    defaults: function() {\n      var name, object, objects, target, _i, _len;\n      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n      for (_i = 0, _len = objects.length; _i < _len; _i++) {\n        object = objects[_i];\n        for (name in object) {\n          if (!target.hasOwnProperty(name)) {\n            target[name] = object[name];\n          }\n        }\n      }\n      return target;\n    },\n    extend: function() {\n      var name, source, sources, target, _i, _len;\n      target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n      for (_i = 0, _len = sources.length; _i < _len; _i++) {\n        source = sources[_i];\n        for (name in source) {\n          target[name] = source[name];\n        }\n      }\n      return target;\n    }\n  };\n\n}).call(this);\n",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.1.0\"};",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.1.0",
      "entryPoint": "main",
      "repository": {
        "id": 18501018,
        "name": "util",
        "full_name": "distri/util",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
          "gravatar_id": "192f3f168409e79c42107f081139d9f3",
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/util",
        "description": "Small utility methods for JS",
        "fork": false,
        "url": "https://api.github.com/repos/distri/util",
        "forks_url": "https://api.github.com/repos/distri/util/forks",
        "keys_url": "https://api.github.com/repos/distri/util/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/util/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/util/teams",
        "hooks_url": "https://api.github.com/repos/distri/util/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/util/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/util/events",
        "assignees_url": "https://api.github.com/repos/distri/util/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/util/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/util/tags",
        "blobs_url": "https://api.github.com/repos/distri/util/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/util/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/util/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/util/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/util/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/util/languages",
        "stargazers_url": "https://api.github.com/repos/distri/util/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/util/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/util/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/util/subscription",
        "commits_url": "https://api.github.com/repos/distri/util/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/util/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/util/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/util/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/util/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/util/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/util/merges",
        "archive_url": "https://api.github.com/repos/distri/util/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/util/downloads",
        "issues_url": "https://api.github.com/repos/distri/util/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/util/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/util/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/util/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/util/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/util/releases{/id}",
        "created_at": "2014-04-06T22:42:56Z",
        "updated_at": "2014-04-06T22:42:56Z",
        "pushed_at": "2014-04-06T22:42:56Z",
        "git_url": "git://github.com/distri/util.git",
        "ssh_url": "git@github.com:distri/util.git",
        "clone_url": "https://github.com/distri/util.git",
        "svn_url": "https://github.com/distri/util",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
          "gravatar_id": "192f3f168409e79c42107f081139d9f3",
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 2,
        "branch": "v0.1.0",
        "publishBranch": "gh-pages"
      },
      "dependencies": {}
    }
  }
});