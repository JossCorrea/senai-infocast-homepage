$.ajax("https://infocast-info.azurewebsites.net/api/v1/infocasts")
    .done(function(data) {
        let html = ""
        for (let i = 1; i <= 5; i++) {
            html += `
                <div class="slide-container" style="width: auto">
                    <div class="slide">
                        <div class="slide__cover" style='background-image:url( "${data[i].cover}")'></div>
                        <div id="modal-podcast" class="modal">
                            <div class="modal-podcast__content">
                                <span class="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>
                        </div>
                        <div class="soundcloud">
                            <iframe data-v-d139e514="" width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data[i].soundCloudId}&color=%23ff4e50&auto_play=false&show_artwork=false&sharing=true&download=true&sharing=true&buying=true"></iframe>
                        </div>
                        <div class="nav-podcast">
                            <ul class="nav-podcast__links">
                                <li class="podcast-link">
                                    <button class="btn-info">Mais Informações</button>
                                </li>
                                <li class="podcast-link">
                                    <a href="">
                                        <img src="assets/icones/spotify-logo-button.png" alt="">
                                        <span>Spotify</span>
                                    </a>
                                </li>
                                <li class="podcast-link">
                                    <a href="">
                                        <img src="assets/icones/itunes-icone.png" alt="">
                                        <span>Itunes</span>
                                    </a>
                                </li>
                                <li class="podcast-link podcast-link--break">
                                    <a href="">
                                        <img src="assets/icones/deezer-logo.png" alt="">
                                        <span>Deezer</span>
                                    </a>
                                </li>
                                <li class="podcast-link">
                                    <a href="">
                                        <img src="assets/icones/youtube.png" alt="">
                                        <span>Youtube</span>
                                    </a>
                                </li>
                                <li class="podcast-link podcast-link--break margin-top">
                                    <a href="">
                                        <img src="assets/icones/medium.png" alt="">
                                        <span>Medium</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }
        $("#slider-frame").html(html)
        $("#slider-frame").slick({
            centerPadding: '60px',
            variableWidth: true,
            centerMode: true,
            lazyLoad: 'ondemand',
            appendArrows: $("#control"),
            nextArrow: "<div id='next' class='arrow'><div class='arrow-top'></div><div class='arrow-bottom'></div></div>",
            prevArrow: "<div id='prev' class='arrow'><div class='arrow-top'></div><div class='arrow-bottom'></div></div>"
        })
});