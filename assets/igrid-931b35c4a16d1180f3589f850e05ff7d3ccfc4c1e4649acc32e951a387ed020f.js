window.onload = function(){
    let igrid = document.querySelector('.igrid');

    let msnry = new Masonry( igrid, {
      itemSelector: 'none', // select none at first
      columnWidth: '.igrid__col-sizer',
      gutter: '.igrid__gutter-sizer',
      percentPosition: true,
      stagger: 30,
      // nicer reveal transition
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
    });
    
    
    // initial items reveal
    imagesLoaded( igrid, function() {
      igrid.classList.remove('are-images-unloaded');
      msnry.options.itemSelector = '.igrid__item';
      let items = igrid.querySelectorAll('.igrid__item');
      msnry.appended( items );
    });
}
;
