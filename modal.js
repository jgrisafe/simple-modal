/**
 * Here's how to use modal:
 *
 * Any element with a data-modal-trigger="identifier" will cause the modal to open.
 * If you want to create the modal content on your html doc, just put a
 * data-modal-content="indentifier" on the element. The "identifier" can be called
 * whatever you want, but they need to match up for the trigger to link up. You can
 * also set the modal content in javascript by calling Modal.set(content).open();
 *
 * All Modal methods will return the Modal object so that they can be chained, as in the
 * example above.
 *
 * That's it!
 */

(function(Modal, $) {

  const $body = $('body');

  Modal.open = function(){
    $body.addClass('modal__open');
    return Modal;
  }

  Modal.close = function(){
    $body.removeClass('modal__open');
    return Modal;
  }

  Modal.set = function(content) {
    $('.modal__content').append(content);
    return Modal;
  }

  Modal.init = function(){
    appendModalHtml();
    bindTriggers();
    return Modal;
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
