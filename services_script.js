function show_checked(title) {
    let opened = document.getElementsByClassName(title),
        links = document.getElementsByClassName('aside_li'),
        info = document.getElementsByClassName('service_type');

    for (let i = 0; i < 4; i++) {
        links[i].classList.remove('checked');
        info[i].classList.remove('checked');
    }

    opened[0].classList.add('checked');
    opened[1].classList.add('checked');
}