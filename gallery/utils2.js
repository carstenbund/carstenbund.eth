// misc display utils
//
//
//


function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


      Number.prototype.pad = function(size) {
                var s = String(this);
                while (s.length < (size || 2)) {s = "0" + s;}
                return s;
        }


	function tg(ourl){
		//ga('set','page',ourl);
		//ga('send', 'pageview');
				img_url = new URL(ourl).pathname;	
                                window.open("/gallery/single.html?i=" + img_url ,"_blank");
                        }


        function getDocHeight() {
		var D = document;
		return Math.max(
			D.body.scrollHeight, D.documentElement.scrollHeight,
			D.body.offsetHeight, D.documentElement.offsetHeight,
			D.body.clientHeight, D.documentElement.clientHeight
		);
	}
var totalImages = 0;
var cur_image=totalImages;
var ext = ".png";
var dtext = ".";

 function loadImages(img_dir){
                var batch = Math.min( 24 , totalImages +1);
                for (let i=1;i<=batch;++i){
                        var a = document.createElement('a');
                        var img = document.createElement('img');
                        let rnum = i;
                        //let rnum = Math.floor(Math.random() * 150 + 60);
                        let img_url = img_dir + 'img-' + (cur_image.pad(4)) + ext
                        //let img_url = img_dir + 'img-' + (rnum.pad(4)) + ext
                        img.src = img_url;
                        img.className = 'imageElement';
                        a.url = img_url;
                        a.href = img_url;

                        a.href = 'javascript:tg("' + a.href +'")';
                        a.appendChild(img);
                        var image_div = document.getElementById('image_container');
                        image_div.appendChild(a);
                        cur_image = ++cur_image;
                        if (cur_image >= totalImages+1){
                                window.onscroll='';
                                break;
                        }
                }
        }



      function scroll() {
                if(window.scrollY + window.innerHeight +100 >= getDocHeight()) {
                        loadImages(folder);
                }
        };


var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

