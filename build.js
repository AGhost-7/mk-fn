var code = 'module.exports = function (length, func) {\n' +
	'\tswitch(length) {\n';

for(var i = 0; i < 27; i++) {
	code += '\t\tcase ' + i + ': return function(';
	var first = true;
	for(var argIndex = 0; argIndex < i; argIndex++) {
		if(first) first = false;
		else code += ',';
		code += String.fromCharCode(97 + argIndex);
	}
	code += ') { return func.apply(this, arguments); };\n';
}
code += '\t\tdefault: throw \'Function length is not valid, mk-fn cannot create function\';\n';
code += '\t}\n' + 
	'};';
console.log(code);
