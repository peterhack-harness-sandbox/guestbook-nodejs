$(document).ready(function() {
  var headerTitleElement = $("#header h1");
  var entriesElement = $("#guestbook-entries");
  var formElement = $("#guestbook-form");
  var submitElement = $("#guestbook-submit");
  var entryContentElement = $("#guestbook-entry-content");
  var hostAddressElement = $("#guestbook-host-address");

  var appendGuestbookEntries = function(data) {
    entriesElement.empty();
    $.each(data.list, function(key, val) {
      entriesElement.append("<p>" + val + "</p>");
    });
  }

  var handleSubmission = function(e) {
    e.preventDefault();
    var entryValue = entryContentElement.val();
    if (entryValue.length > 0) {


      $.ajax({
        url: "/api/entries/greet",
        method: "POST",
        data: {"msg": entryValue},
        success: appendGuestbookEntries
      });
        
      entryContentElement.val("")
    }
    return false;
  }

  submitElement.click(handleSubmission);
  formElement.submit(handleSubmission);
  hostAddressElement.append(document.URL);

  // Poll every second.
  (function fetchGuestbook() {
      $.getJSON("/api/entries/read", appendGuestbookEntries)
        .always(
          function() {
            setTimeout(fetchGuestbook, 1000);
          });

  })()
});
