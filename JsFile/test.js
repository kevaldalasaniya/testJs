window.onload=function(){function a(a,b){var c=/^(?:file):/,d=new XMLHttpRequest,e=0;d.onreadystatechange=function(){4==d.readyState&&(e=d.status),c.test(location.href)&&d.responseText&&(e=200),4==d.readyState&&200==e&&(a.outerHTML=d.responseText)};try{d.open("GET",b,!0),d.send()}catch(f){}}var b,c=document.getElementsByTagName("*");for(b in c)c[b].hasAttribute&&c[b].hasAttribute("data-include")&&a(c[b],c[b].getAttribute("data-include"))};


function getSuggestion() {
	var x =  document.querySelector('meta[name="keywords"]');
	var server = "http://localhost:8080/trafficSharing/getSuggestion?keywords="+x.content;	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', server);
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        alert(xhr.responseText);
	    }   
	};
	xhr.send();

	}

