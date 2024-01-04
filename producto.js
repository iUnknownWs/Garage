let gallery = document.getElementById('gallery');
let modal = document.getElementById('gallery-full');
let fnext = document.getElementById('fnext');
let fprev = document.getElementById('fprev');

gallery.addEventListener('click', function () {
    let div = document.querySelector('.active');
    let image = div.querySelector('img');
    let imageUrl = image.src;
    let imgf = document.getElementById('img-full');
    imgf.src = imageUrl;

    console.log(imageUrl);
    modal.style.display = 'block';
});

fnext.addEventListener('click', function () {
    let div = document.getElementById('gallery');
    let childs = div.children;
    let imgf = document.getElementById('img-full');

    for (let i = 0; i < childs.length; i++) {
        if (childs[i].classList.contains('active')) {
            if (childs[i + 1] == undefined) {
                return
            }
            let next = childs[i + 1];
            console.log(next);
            next.classList.add('active');
            childs[i].classList.remove('active');
            let image = next.querySelector('img');
            let imageUrl = image.src;
            imgf.src = imageUrl;
            return
        }
    }
})

fprev.addEventListener('click', function () {
    let div = document.getElementById('gallery');
    let childs = div.children;
    let imgf = document.getElementById('img-full');

    for (let i = 0; i < childs.length; i++) {
        if (childs[i].classList.contains('active')) {
            if (childs[i - 1] == undefined) {
                return
            }
            let next = childs[i - 1];
            console.log(next);
            next.classList.add('active');
            childs[i].classList.remove('active');
            let image = next.querySelector('img');
            let imageUrl = image.src;
            imgf.src = imageUrl;
            return
        }
    }
})

let closeButton = modal.getElementsByClassName('close')[0];
closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

document.addEventListener('scroll', () => {
    let button = document.querySelector('.reserva')
    let scrollPos = window.scrollY
    let x = window.innerHeight-button.clientHeight
    console.log(x)
    console.log(scrollPos)
  
    if(scrollPos > x) {
      button.classList.add('fixed-bottom')
    } else if(scrollPos < x) {
      button.classList.remove('fixed-bottom')
    }
  })