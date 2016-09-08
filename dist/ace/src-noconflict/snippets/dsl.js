ace.define("ace/snippets/dsl",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "## DSL snippets \n\
\n\
# DSL :: collection\n\
snippet collection\n\
	collection( \n\
	name: \" ${1} \" ${2}\n\
	){ ${3} }\n\
\n\
# DSL :: document\n\
snippet document\n\
	document(\n\
	   name: \"${1}\" ${2}\n\
	){ ${3} }\n\
\n\
# DSL :: cell\n\
snippet cell\n\
	cell( \n\
	     name: \" ${1} \" ${2} \n\
	){ ${3} }\n\
\n\
# DSL :: dashboard \n\
snippet dashboard \n\
	dashboard(\n\
		name: \" ${1} \" ${2}\n\
	) { ${3} }\n\
\n\
# DSL :: index\n\
snippet index \n\
	index (\n\
		${1}\n\
	) {  ${2} }\n\
\n\
# DSL :: show\n\
snippet show\n\
	show(\n\
	 	${1} \n\
	) { ${2} }\n\
		 \n\
\n\
	\n\
# DSL :: header :: name\n\
snippet n \n\
	name: \" ${1} \"\n\
\n\
# DSL :: header :: label\n\
snippet l\n\
	label: \" ${1} \"\n\
\n\
# DSL :: header :: weight\n\
snippet w \n\
	weight: \" ${1} \"\n\
\n\
# DSL :: [ collection | document ] :: perpage\n\
snippet p \n\
	perpage: ${1}\n\
\n\
# DSL :: [ collection | document ] :: populate\n\
snippet pop \n\
	populate: ${1}\n\
\n\
# DSL :: [ collection | document ] :: sortby\n\
snippet s \n\
	sortby: ${1}\n\
\n\
# DSL :: [ collection | document ] :: order\n\
snippet o\n\
	order: ${1}\n\
# DSL :: [ collection | document ] :: query\n\
snippet q \n\
	query: ${1}\n\
\n\
# DSL :: [collection | document ] -> column :: sortable\n\
snippet srt \n\
	sortable: ${1}\n\
\n\
# DSL :: [collection | document ] -> column :: selectable\n\
snippet se \n\
	selectable: ${1}\n\
\n\
# DSL :: [collection | document ] -> column | row :: transformation \n\
snippet trans\n\
	transformation: function() { \n\
	return ${1} ; \n\
	}\n\
\n\
 \n\
\n\
\n\
";
exports.scope = "dsl";

});
