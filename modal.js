/**
 * Here's how to use modal:
 *
 *
 */

(function(Modal, $) {

  const $body = $('body');

  Modal.open = function(){
    $body.addClass('modal__open')
  }

  Modal.close = function(){
    $body.removeClass('modal__open');
  }

  Modal.set = function(content) {
    $('.modal__content').append(content)
  }

  Modal.init = function(){
    appendModalHtml()
    bindTriggers()
  }


  /* Private methods
  ========================================================= */
  function appendModalHtml() {
    $body.append(
      `<div class="modal">
         <div class="modal__content">
         </div>
      </div>`);
    $body.append('<div class="modal__overlay"></div>');
  }

  function bindTriggers() {
    $('[data-modal-trigger]').on('click', function() {
      const id = $(this).data('modal-trigger');
      const html = $(`[data-modal-content="${id}"]`);
      if (html) { Modal.set(html); }
      Modal.open();
    })

    $('.modal__overlay').on('click', function() {
      Modal.close();
    })
  }

})(window.Modal = window.Modal || {}, jQuery)

// initialize modal on document ready
$(function() { Modal.init(); })
