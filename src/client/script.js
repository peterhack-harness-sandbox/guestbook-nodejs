$(document).ready(function() {
  var headerTitleElement = $("#header h1");
  var entriesElement = $("#guestbook-entries");
  var formElement = $("#guestbook-form");
  var submitElement = $("#guestbook-submit");
  var entryContentElement = $("#guestbook-entry-content");
  var hostAddressElement = $("#guestbook-host-address");

  var appendGuestbookEntries = function() {
    $.getJSON("/api/lists/guestbook/", function(list) {
      entriesElement.empty();
      $.each(list.entries, function(key, val) {
        entriesElement.append("<p>" + val + "</p>");
      });
    });
  }

  var handleSubmission = function(e) {
    e.preventDefault();
    var entryValue = entryContentElement.val();
    if (entryValue.length > 0) {

      if (entriesElement.toArray()[0].childElementCount == 0) {
        console.log("Entries element is empty");
        $.ajax({
          url: "/api/lists/guestbook",
          method: "PUT",
          data: {"entries": [entryValue]},
          success: appendGuestbookEntries
        });
      } else {
        console.log("entries element is not empty");
        entriesElement.append("<p>...</p>");
        $.getJSON("/api/lists/guestbook/", function(list) {

          console.log(list);
  
          list.entries.push(entryValue);
  
          $.ajax({
            url: "/api/lists/guestbook",
            method: "PUT",
            data: list,
            success: appendGuestbookEntries
          });
  
        });

      }
    
    

	  entryContentElement.val("")
    }
    return false;
  }

  submitElement.click(handleSubmission);
  formElement.submit(handleSubmission);
  hostAddressElement.append(document.URL);

  // Poll every second.
  (function fetchGuestbook() {
      console.log("Getting list");
      $.getJSON("/api/lists/guestbook").done(appendGuestbookEntries).always(
        function() {
          setTimeout(fetchGuestbook, 1000);
        });
  })()
});
