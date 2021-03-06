# maas-editor-demo
--------------------------------------------------------

[![Build Status](https://semaphoreci.com/api/v1/projects/b7c4bbc6-f1b3-4066-8c99-51168ca58f69/967037/shields_badge.svg)](https://semaphoreci.com/apetrovYa/maas-editor-demo)[![Heroku](http://heroku-badge.herokuapp.com/?app=maas-editor-demo&style=flat&svg=1)]

--------------------------------------------------------

## MaaS (MongoDB as an Admin Sevice)

A web app with a specific goal in mind: to make more sweety the problem of building custom UIs for Mongo databases.
This web app is based on the MaaP project [link](https://github.com/steakholders/maap), which is a very flexible tool for the system administrators to extract and show graphical representations of the business entities from the data underneath. It is the framework on which MaaS is based.  

## Why maas-editor-demo?

This repo is a MaaS subproject. A demo version of the Editor to be used by clients during UI specification. As each editor, 
MaaS Editor provides some help for creating DSL specs.

## Common features

In order to simplify the DSL editing, the Editor offers:

	1. Syntax highlighting.

	2. Indentation.

	3. Snippets.

## Future work

Offering a common editor features for a new non standard language is not an easy task but is a very challenging one.
Indeed, soonely is programmed to add the following features:

1. Autocompletion. 

2. Syntax Checker.

3. Custom personalization.	

4. Live helper.

P.S. It's welcome any suggestion, idea and also collaboration... Together we can make the difference! :) 


## Where can you play with DSLs and the Editor?

The demo version is deployed on, the crazy platform, [Heroku](https://maas-editor-demo.herokuapp.com/#/).

_Have a nice time_  and _let me know what you think about_

## Looking for learning more about MaaS and MaaP DSLs?

Following this link, the useful info will take you [MaaP-DSL configurations](https://github.com/steakholders/maap/wiki/DSL-File-Configuration).

And for more DSL examples please check here [MaaP DSL examples](https://github.com/steakholders/maap/wiki/DSL-Configuration-File-Example).


### Common ***snippets*** that can be used within the Editor

-  DSL :: collection
```
> snippet collection
> collection( 
>
>	  name: " "
>	){ }
```

- DSL :: document
```
> snippet document
>	document(
>	  name: " " 
>	){  }
```

-  DSL :: cell
```
> snippet cell
> 	cell( 
>	     name: " "  
>	){  }
```

-  DSL :: dashboard 
```
> snippet dashboard 
> 	dashboard(
>		name: "  " 
>	) {  }
>
```

-  DSL :: index

```
> snippet index 
>	index (
>		
>	) {   }
>
```

-  DSL :: show
```
> snippet show
>	show(
>	 	 
>	) {  }
```

-  DSL :: header :: name
```
> snippet n 
>	name: "  "
```

-  DSL :: header :: label
```
> snippet l
> label: " "
```

- DSL :: header :: weight
```
> snippet w 
>	weight: "  "
```

- DSL :: [ collection | document ] :: perpage
```
> snippet p 
>	perpage: 
```

-  DSL :: [ collection | document ] :: populate
```
> snippet pop 
> populate: ""
```

- DSL :: [ collection | document ] :: sortby
```
>  snippet s 
>  sortby: ""
```

-  DSL :: [ collection | document ] :: order
```
> snippet o
>	order: ""
```

- DSL :: [ collection | document ] :: query
```
> snippet q 
>	query: ""
```

- DSL :: [collection | document ] -> column :: sortable
```
> snippet srt 
>	sortable: ""
```

- DSL :: [collection | document ] -> column :: selectable
```
> snippet se 
>	selectable: "" 
```

- DSL :: [collection | document ] -> column | row :: transformation 
```
> snippet trans
>	transformation: function() { 
>	return  ; 
>	}
```
