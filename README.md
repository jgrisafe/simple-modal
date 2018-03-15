 # The simplest modal ya'll ever seen

 Here's how to use modal:

  Any element with a data-modal-trigger="identifier" will cause the modal to open.
  If you want to create the modal content on your html doc, just put a
  data-modal-content="indentifier" on the element. The "identifier" can be called
  whatever you want, but they need to match up for the trigger to link up. You can
  also set the modal content in javascript by calling Modal.set(content).open();

  All Modal methods will return the Modal object so that they can be chained, as in the
  example above.
 
  That's it!