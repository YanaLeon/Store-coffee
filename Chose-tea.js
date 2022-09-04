$('input[name="radio"]').click(function() {
    $('.block-katalog-products').hide();
  
    $(this).data('for').split(' ').forEach(blockId => {
      $(`#${blockId}`).fadeIn(500);
    });
  });