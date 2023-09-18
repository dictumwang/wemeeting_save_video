$(window).bind('load', function () {
    var p = setInterval(function () {
        var ul_obj = $('ul.met-tabs__tablist');
        if (ul_obj.length !== 0) {
            clearInterval(p);
            var download_button = $('<li class="met-tabs__tabitem"><a class="met-tabs__tab"><button class="met-btn met-btn--weak with-icon" style="border-radius:20px;border:none;background:#ebedf2"><i class="met-icon met-icon-download--outlined download-icon-d" role="img" aria-label="met-icon-download--outlined"><svg class="me-icon me-icon-download--outlined" color="#4E5461" style="font-size:16px"><use xlink:href="#me-icon-download--outlined"></use></svg></i><span><div>下载</div></span></button></a></li>');
            download_button.click(function () {
                window.open($('#test-video_html5_api').attr('src'));
            });
            ul_obj.append(download_button);
        }
    }, 1000);
});
