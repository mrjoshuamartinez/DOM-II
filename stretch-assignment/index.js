// Coded By: Joshua Martinez

let blkClk = document.querySelectorAll('.block');
let blks = document.querySelector('.blocks')
blkClk.forEach((e) => {
    e.addEventListener('click', (el) => {
      blks.prepend(e);
      // console.log(e);
    });
});

