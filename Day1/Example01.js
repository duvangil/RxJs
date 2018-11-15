var button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clickeado');
});

Rx.Observable.fromEvent(button, 'click').subscribe(() => console.log('click RxJs'));