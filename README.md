 # The simplest modal ya'll ever seen

 Here's how to use modal:

 Just include the modal.js and modal.css in your head. And the data attributes do the rest.

 Here are the two data attributes you need.

 - data-modal-trigger
 - data-modal-content

  Any element with a `data-modal-trigger="identifier"` will cause the modal to open.
  If you want to create the modal content on your html, just put a
  `data-modal-content="indentifier"` on the element. The content will not show on the page unless the modal
  is open. The "identifier" can be called whatever you want, but they need to match up 
  for the trigger to link up. You can also set the modal content in javascript by calling the following code:
  
  ```
  const content = '<div>stuff</div>'
  Modal.set(content).open();
  ```

  All Modal methods will return the Modal object so that they can be chained, as in the
  example above.
  
  If you want to adjust the css you can in modal.css
  
  ![demo][modal-demo.gif]

  That's it!