$(function() {

    function setNews(){
        let title = document.getElementById("firstNews")
        title.innerHTML += `

        <div id="newscontent">
            <h3 style="margin-bottom: 15px;">XVIII Региональная естественнонаучная конференция <br> «ШКОЛА ЮНОГО ИССЛЕДОВАТЕЛЯ»</h3>
            Приглашаем принять участие в ежегодной Региональной естественнонаучной конференции «Школа юного исследователя»!<br> В программе конференции конкурс исследовательских работ и творческий конкурс "Очарование науки".
            <p>
                <a href="/CONF_SHUI/info/infoconf-2023/Инф.письмо_Конференция ШЮИ-2023.pdf" target="_blank" style="margin-top: 8px;" class="btn btn-outline-primary">Информация</a>
                <a href="/CONF_SHUI/registrationconfpedagogi.html" style="margin-top: 8px;" class="btn btn-outline-danger">Регистрация педагогической секции</a>
                <a class="btn btn-outline-danger" style="margin-top: 8px;" target="_blank" href="/CONF_SHUI/confs/conf2023/Финал_конфренции_ШЮИ_2023_список_участников_3.pdf" target="_blank"><span>Финалисты научного конкурса</span></a>
            </p>
        </div>`;
    }
  //  document.addEventListener('DOMContentLoaded', setNews);
  setNews()
});

//<a href="https://docs.google.com/forms/d/e/1FAIpQLSdzazsEWXPEVUKnZ4FimV3g8vVp7NAGhKjVGan1S60NMHnRkA/viewform" style="margin-top: 8px;" class="btn btn-outline-danger" target="_blank">Регистрация творческого конкурса</a>  