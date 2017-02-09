function boris_media_group_getSuggestion(id) {

	
	
	var height;
	var width;
	
	var html = "";
	var x = document.querySelector('meta[name="keywords"]');
	var title = document.title.replace(/\u2013|\u2014/g, "-"); 
	
	var server = "http://45.79.71.25:8080/trafficSharing/getSuggestion?keywords="
			+ escape(x.content)+ "&detail="+escape((title)) + "&id=" + id + "&host=" + escape(window.location.host)
			+ "&href=" + escape(window.location.href) ;
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', server);
	xhr.onload = function() {
		if (xhr.status === 200) {
			var data = xhr.responseText;
			
			var jsonResponse = JSON.parse(data);
			var location = jsonResponse.url;
			var detail = jsonResponse.detail;
			console.log(jsonResponse);
			var html = "<div style=\"height: 60px; width: 468px;cursor:pointer;display: inline-block;text-align: left;\"  onclick=\"window.open(\'"+location+"\',\'_blank\')\" ><table>	<tr><td style=\"font-size: larger; color: #1a0dab\">"+detail+"</td></tr><tr><td style=\"font-size: small; color:green\"><span style=\"background-color:#59946b;	border-radius: 2px;	color: #fff;display: inline-block;	font-size: 12px;padding: 0 2px;line-height: 14px;vertical-align: baseline;\">Ad</span>&nbsp;"+extractDomain(location)+"</td></tr></table></div>";
			document.getElementById("boris_media_group_suggestion").innerHTML = html;
			
		}
	};
	xhr.send();
}


function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

