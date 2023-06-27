(function(win, doc) {

  "use strict";

  // ページのスクロールを止めるためにtouchmoveを止める

  if (doc.body.dataset.app === "true") {
    doc.body.addEventListener("touchmove", (evt) => {
      evt.preventDefault();
    }, {
      passive: false
    });
  }

})(window, document);