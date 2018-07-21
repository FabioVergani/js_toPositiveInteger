const val=x=>x!==undefined&&x!==null,
isFiniteNumber=x=>{let i=x===0;try{i=i?i:val(x)&&+x===x&&x!==Infinity&&x!==-Infinity}finally{return i}},
toPositiveInteger=(x,y=0)=>isFiniteNumber(x)?x<=0?y:parseInt(x)+y:y;
