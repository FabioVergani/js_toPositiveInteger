# js_toPositiveInteger

const val=x=>x!==undefined&&x!==null;
const isFiniteNumber=x=>{let i=x===0;try{i=i?i:val(x)&&+x===x&&x!==Infinity&&x!==-Infinity}finally{return i}};
//

const toPositiveInteger=x=>isFiniteNumber(x)?x<=0?0:parseInt(x):0;

//#test: floored values...
console.clear();
(n=>{//MaxSafeInteger
	[
		Math.PI,//3
		n,//9007199254740991
		n+1,//9007199254740992
		//0:
		-n,
		-n-1,
		-1E3,
		-2.1,
		-2,
		-1,
		-.9,
		-.6,
		-.5,
		-.4,
		-.1,
		0,
		Number(),
		.1,
		.4,
		.5,
		.6,
		.9,
		1,
		2,
		2.1,
		Number(666),
		1E3,
		//false:
		null,//nb; isFinite true isFiniteNumber:false
		undefined,
		'','\r','\n','\t',' ','   ',
		'x',' x ','  x  ',
		[],[''],['\r'],['\n'],['\t'],[' '],
		[' x '],
		{},{a:1},{a:1,b:2},
		Object,
		-Infinity,
		Infinity,
		Object.create(null),//nb; isFinite Cannot convert object to primitive value
	].forEach(x=>console.log(toPositiveInteger(x)));
})(Number.MAX_SAFE_INTEGER);
/*
3
9007199254740991
9007199254740992
0*18
1
2*2
666
0*25
*/


/*
with offset:
toPositiveInteger=(x,y=0)=>isFiniteNumber(x)?x<=0?y:parseInt(x)+y:y;
*/
*/


