window.onload = function () {
    var p = setInterval(function () {
        var ul_obj = document.querySelector('ul.met-tabs__tablist');
        if (ul_obj) {
            clearInterval(p);
            var download_button = document.createElement('li');
            ul_obj.appendChild(download_button);
            download_button.outerHTML = '<li class="met-tabs__tabitem"><a class="met-tabs__tab"><button class="met-btn met-btn--weak with-icon" style="border-radius:20px;border:none;background:#ebedf2" type="button" onclick="window.open(document.getElementById(\'test-video_html5_api\').src)"><i class="met-icon met-icon-download--outlined download-icon-d" role="img" aria-label="met-icon-download--outlined"><svg class="me-icon me-icon-download--outlined" color="#4E5461" style="font-size:16px"><use xlink:href="#me-icon-download--outlined"></use></svg></i><span><div>下载</div></span></button></a></li>';
        }
    }, 1000);
}