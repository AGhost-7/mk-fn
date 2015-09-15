module.exports = function (length, func) {
	switch(length) {
		case 0: return function() { return func.apply(this, arguments); };
		case 1: return function(a) { return func.apply(this, arguments); };
		case 2: return function(a,b) { return func.apply(this, arguments); };
		case 3: return function(a,b,c) { return func.apply(this, arguments); };
		case 4: return function(a,b,c,d) { return func.apply(this, arguments); };
		case 5: return function(a,b,c,d,e) { return func.apply(this, arguments); };
		case 6: return function(a,b,c,d,e,f) { return func.apply(this, arguments); };
		case 7: return function(a,b,c,d,e,f,g) { return func.apply(this, arguments); };
		case 8: return function(a,b,c,d,e,f,g,h) { return func.apply(this, arguments); };
		case 9: return function(a,b,c,d,e,f,g,h,i) { return func.apply(this, arguments); };
		case 10: return function(a,b,c,d,e,f,g,h,i,j) { return func.apply(this, arguments); };
		case 11: return function(a,b,c,d,e,f,g,h,i,j,k) { return func.apply(this, arguments); };
		case 12: return function(a,b,c,d,e,f,g,h,i,j,k,l) { return func.apply(this, arguments); };
		case 13: return function(a,b,c,d,e,f,g,h,i,j,k,l,m) { return func.apply(this, arguments); };
		case 14: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n) { return func.apply(this, arguments); };
		case 15: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) { return func.apply(this, arguments); };
		case 16: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) { return func.apply(this, arguments); };
		case 17: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) { return func.apply(this, arguments); };
		case 18: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) { return func.apply(this, arguments); };
		case 19: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) { return func.apply(this, arguments); };
		case 20: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) { return func.apply(this, arguments); };
		case 21: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u) { return func.apply(this, arguments); };
		case 22: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v) { return func.apply(this, arguments); };
		case 23: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w) { return func.apply(this, arguments); };
		case 24: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x) { return func.apply(this, arguments); };
		case 25: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y) { return func.apply(this, arguments); };
		case 26: return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) { return func.apply(this, arguments); };
		default: throw 'Function length is not valid, mk-fn cannot create function';
	}
};
