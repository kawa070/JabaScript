const menu = document.querySelector('#menu');

const lists=[
    'strawberry.jpg',
    'lime.jpg',
    'lemon.jpg',
];

//console.log(lists[0])
//console.log(lists[1])
//console.log(lists[2])

const content = 
`<div><img src="images/${lists[2]}" alt=""></div>;
<div><img src="images/${lists[1]}" alt=""></div>
<div><img src="images/${lists[0]}" alt=""></div>
<div><img src="images/${lists[2]}" alt=""></div>
<div><img src="images/${lists[0]}" alt=""></div>
<div><img src="images/${lists[1]}" alt=""></div>`;
//menu.textContent = content;
menu.insertAdjacentHTML('beforeend', content);

for(let i=1;i<=10;i++){
    console.log('${i}回目のこんにちは！');
}


