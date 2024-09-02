      window.onload = function() { 
      if (window.location.hash) { // Remove the hash part from the URL 
      	history.replaceState(null, document.title, window.location.pathname + window.location.search+"#welcome");
      	window.scrollTo(0, 0);
      } 

  };
