let transformers = [
    { name: 'Megatron', evil: true },
    { name: 'Shockwave', evil: true },
    { name: 'Thunderwing', evil: true },
    { name: 'Starscream', evil: true },
    { name: 'Galvatron', evil: true },
    { name: 'Optimus Prime', evil: false },
    { name: 'Bumblebee', evil: false },
    { name: 'Jazz', evil: false },
    { name: 'Ironhide', evil: false },
    { name: 'Mirage', evil: false }
];

let ulElem = document.querySelector('.transformers');

for(let i = 0; i < transformers.length;i++) {
    let liElem = document.createElement('li');
    liElem.innerHTML = transformers[i].name;

    liElem.addEventListener('click', (event) => {
        console.log(event.target.innerHTML);
    });

    ulElem.append(liElem);
}