//	switch(terms) {
//		case terms: statment; break;
//		case terms: statment; break;
//		case terms: statment; break;
//		case terms: statment;
//		default: statment;
//	}

var name = 'Dan', homecity;

if (name === 'John') {
	homecity = 'Boston';
} else if (name === 'Sorax') {
	homecity = 'Belgorod';
} else if (name === 'Bill') {
	homecity = 'LA';
}

console.log(homecity);

switch (name){
	case 'John': homecity = 'Boston'; break;
	case 'Bill': homecity = 'LA'; break;
	case 'Sorax': homecity = 'Belgorod'; break;
	default: homecity = 'Moskow';
}

console.log(homecity);
