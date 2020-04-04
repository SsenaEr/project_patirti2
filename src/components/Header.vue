<template>
  <div class="header__bar hidden-sm hidden-xs">
    <div class="container--flush flex-a-center-j-end">
      <div class="ck-lang-box">
        <div class="dropdown hoverDropdown hidden-sm hidden-xs">
          <button class="btn btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <img src="@/assets/tr2.png" />Türkçe (
            <span id="currency-code">TRY</span>)
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <div class="form-group">
              <label for="country-selector">Teslimat Ülkesi:</label>
              <select class="form-control country-selector select2-hidden-accessible" id="country-selector" data-select2-id="country-selector" tabindex="-1" aria-hidden="true">
                <option selected="&quot;selected&quot;" value="77" data-val="/changecountry/77/?returnurl=%2f" data-select2-id="2">Türkiye</option>
                <option value="86" data-val="/changecountry/86/?returnurl=%2f">Afganistan</option>
                <option value="35" data-val="/changecountry/35/?returnurl=%2f">Almanya</option>
                <option value="1" data-val="/changecountry/1/?returnurl=%2f">Amerika Birleşik Devletleri</option>
                <option value="89" data-val="/changecountry/89/?returnurl=%2f">Amerikan Samoası</option>
                <option value="90" data-val="/changecountry/90/?returnurl=%2f">Andora</option>
                <option value="91" data-val="/changecountry/91/?returnurl=%2f">Angola</option>
                <option value="94" data-val="/changecountry/94/?returnurl=%2f">Antigua ve Barbuda</option>
                <option value="3" data-val="/changecountry/3/?returnurl=%2f">Arjantin</option>
                <option value="87" data-val="/changecountry/87/?returnurl=%2f">Arnavutluk</option>
                <option value="5" data-val="/changecountry/5/?returnurl=%2f">Aruba</option>
                <option value="6" data-val="/changecountry/6/?returnurl=%2f">Avustralya</option>
                <option value="7" data-val="/changecountry/7/?returnurl=%2f">Avusturya</option>
                <option value="8" data-val="/changecountry/8/?returnurl=%2f">Azerbaycan</option>
                <option value="9" data-val="/changecountry/9/?returnurl=%2f">Bahamalar</option>
                <option value="95" data-val="/changecountry/95/?returnurl=%2f">Bahreyn</option>
                <option value="10" data-val="/changecountry/10/?returnurl=%2f">Bangladeş</option>
                <option value="96" data-val="/changecountry/96/?returnurl=%2f">Barbados</option>
                <option value="12" data-val="/changecountry/12/?returnurl=%2f">Belçika</option>
                <option value="13" data-val="/changecountry/13/?returnurl=%2f">Belize</option>
                <option value="97" data-val="/changecountry/97/?returnurl=%2f">Benin</option>
                <option value="14" data-val="/changecountry/14/?returnurl=%2f">Bermuda</option>
                <option value="79" data-val="/changecountry/79/?returnurl=%2f">Birleşik Arap Emirlikleri</option>
                <option value="15" data-val="/changecountry/15/?returnurl=%2f">Bolivya</option>
                <option value="16" data-val="/changecountry/16/?returnurl=%2f">Bosna Hersek</option>
                <option value="99" data-val="/changecountry/99/?returnurl=%2f">Botswana</option>
                <option value="17" data-val="/changecountry/17/?returnurl=%2f">Brezilya</option>
                <option value="102" data-val="/changecountry/102/?returnurl=%2f">Brunei Darussalam</option>
                <option value="98" data-val="/changecountry/98/?returnurl=%2f">Buhutan</option>
                <option value="18" data-val="/changecountry/18/?returnurl=%2f">Bulgaristan</option>
                <option value="103" data-val="/changecountry/103/?returnurl=%2f">Burkina Faso</option>
                <option value="104" data-val="/changecountry/104/?returnurl=%2f">Burundi</option>
                <option value="107" data-val="/changecountry/107/?returnurl=%2f">Cape Verde</option>
                <option value="19" data-val="/changecountry/19/?returnurl=%2f">Cayman Islands</option>
                <option value="88" data-val="/changecountry/88/?returnurl=%2f">Cezayir</option>
                <option value="116" data-val="/changecountry/116/?returnurl=%2f">Cibuti</option>
                <option value="114" data-val="/changecountry/114/?returnurl=%2f">Cook Adaları</option>
                <option value="109" data-val="/changecountry/109/?returnurl=%2f">Çad</option>
                <option value="27" data-val="/changecountry/27/?returnurl=%2f">Çek Cumhuriyeti</option>
                <option value="21" data-val="/changecountry/21/?returnurl=%2f">Çin</option>
                <option value="28" data-val="/changecountry/28/?returnurl=%2f">Danimarka</option>
                <option value="117" data-val="/changecountry/117/?returnurl=%2f">Dominica</option>
                <option value="29" data-val="/changecountry/29/?returnurl=%2f">Dominik Cumhuriyeti</option>
                <option value="30" data-val="/changecountry/30/?returnurl=%2f">Ekvator</option>
                <option value="119" data-val="/changecountry/119/?returnurl=%2f">Ekvator Gine</option>
                <option value="118" data-val="/changecountry/118/?returnurl=%2f">El Salvador</option>
                <option value="42" data-val="/changecountry/42/?returnurl=%2f">Endonezya</option>
                <option value="120" data-val="/changecountry/120/?returnurl=%2f">Eritre</option>
                <option value="4" data-val="/changecountry/4/?returnurl=%2f">Ermenistan</option>
                <option value="121" data-val="/changecountry/121/?returnurl=%2f">Estonya</option>
                <option value="122" data-val="/changecountry/122/?returnurl=%2f">Etiyopya</option>
                <option value="123" data-val="/changecountry/123/?returnurl=%2f">Falkland Adaları</option>
                <option value="124" data-val="/changecountry/124/?returnurl=%2f">Faroe Adaları</option>
                <option value="176" data-val="/changecountry/176/?returnurl=%2f">Fas</option>
                <option value="125" data-val="/changecountry/125/?returnurl=%2f">Fiji</option>
                <option value="32" data-val="/changecountry/32/?returnurl=%2f">Finlandiya</option>
                <option value="60" data-val="/changecountry/60/?returnurl=%2f">Flipinler</option>
                <option value="33" data-val="/changecountry/33/?returnurl=%2f">Fransa</option>
                <option value="126" data-val="/changecountry/126/?returnurl=%2f">Fransız Guyanası</option>
                <option value="129" data-val="/changecountry/129/?returnurl=%2f">Gabon</option>
                <option value="130" data-val="/changecountry/130/?returnurl=%2f">Gambiya</option>
                <option value="131" data-val="/changecountry/131/?returnurl=%2f">Gana</option>
                <option value="136" data-val="/changecountry/136/?returnurl=%2f">Gine</option>
                <option value="137" data-val="/changecountry/137/?returnurl=%2f">Gine-Bissau</option>
                <option value="132" data-val="/changecountry/132/?returnurl=%2f">Grönland</option>
                <option value="134" data-val="/changecountry/134/?returnurl=%2f">Guadelup</option>
                <option value="135" data-val="/changecountry/135/?returnurl=%2f">Guam</option>
                <option value="38" data-val="/changecountry/38/?returnurl=%2f">Guatemala</option>
                <option value="71" data-val="/changecountry/71/?returnurl=%2f">Güney Afrika</option>
                <option value="34" data-val="/changecountry/34/?returnurl=%2f">Gürcistan</option>
                <option value="139" data-val="/changecountry/139/?returnurl=%2f">Haiti</option>
                <option value="24" data-val="/changecountry/24/?returnurl=%2f">Hırvatistan</option>
                <option value="41" data-val="/changecountry/41/?returnurl=%2f">Hindistan</option>
                <option value="54" data-val="/changecountry/54/?returnurl=%2f">Hollanda</option>
                <option value="141" data-val="/changecountry/141/?returnurl=%2f">Honduras</option>
                <option value="39" data-val="/changecountry/39/?returnurl=%2f">Hong Kong</option>
                <option value="144" data-val="/changecountry/144/?returnurl=%2f">Irak</option>
                <option value="44" data-val="/changecountry/44/?returnurl=%2f">Israil</option>
                <option value="80" data-val="/changecountry/80/?returnurl=%2f">İngiltere</option>
                <option value="143" data-val="/changecountry/143/?returnurl=%2f">İran</option>
                <option value="43" data-val="/changecountry/43/?returnurl=%2f">İrlanda</option>
                <option value="72" data-val="/changecountry/72/?returnurl=%2f">İspanya</option>
                <option value="73" data-val="/changecountry/73/?returnurl=%2f">İsveç</option>
                <option value="74" data-val="/changecountry/74/?returnurl=%2f">İsviçre</option>
                <option value="45" data-val="/changecountry/45/?returnurl=%2f">İtalya</option>
                <option value="47" data-val="/changecountry/47/?returnurl=%2f">Japonya</option>
                <option value="105" data-val="/changecountry/105/?returnurl=%2f">Kamboçya</option>
                <option value="106" data-val="/changecountry/106/?returnurl=%2f">Kamerun</option>
                <option value="2" data-val="/changecountry/2/?returnurl=%2f">Kanada</option>
                <option value="64" data-val="/changecountry/64/?returnurl=%2f">Katar</option>
                <option value="49" data-val="/changecountry/49/?returnurl=%2f">Kazakistan</option>
                <option value="145" data-val="/changecountry/145/?returnurl=%2f">Kenya</option>
                <option value="26" data-val="/changecountry/26/?returnurl=%2f">Kıbrıs</option>
                <option value="148" data-val="/changecountry/148/?returnurl=%2f">Kırgızistan</option>
                <option value="146" data-val="/changecountry/146/?returnurl=%2f">Kiribati</option>
                <option value="22" data-val="/changecountry/22/?returnurl=%2f">Kolombiya</option>
                <option value="112" data-val="/changecountry/112/?returnurl=%2f">Komorlar</option>
                <option value="113" data-val="/changecountry/113/?returnurl=%2f">Kongo</option>
                <option value="23" data-val="/changecountry/23/?returnurl=%2f">Kosta Rika</option>
                <option value="51" data-val="/changecountry/51/?returnurl=%2f">Kuveyt</option>
                <option value="25" data-val="/changecountry/25/?returnurl=%2f">Küba</option>
                <option value="149" data-val="/changecountry/149/?returnurl=%2f">Laos</option>
                <option value="152" data-val="/changecountry/152/?returnurl=%2f">Lesotho</option>
                <option value="150" data-val="/changecountry/150/?returnurl=%2f">Letonya</option>
                <option value="153" data-val="/changecountry/153/?returnurl=%2f">Liberya</option>
                <option value="154" data-val="/changecountry/154/?returnurl=%2f">Libya</option>
                <option value="155" data-val="/changecountry/155/?returnurl=%2f">Lihtenştayn</option>
                <option value="156" data-val="/changecountry/156/?returnurl=%2f">Litvanya</option>
                <option value="151" data-val="/changecountry/151/?returnurl=%2f">Lübnan</option>
                <option value="157" data-val="/changecountry/157/?returnurl=%2f">Lüksemburg</option>
                <option value="40" data-val="/changecountry/40/?returnurl=%2f">Macaristan</option>
                <option value="160" data-val="/changecountry/160/?returnurl=%2f">Madagaskar</option>
                <option value="158" data-val="/changecountry/158/?returnurl=%2f">Makau</option>
                <option value="159" data-val="/changecountry/159/?returnurl=%2f">Makedonya</option>
                <option value="161" data-val="/changecountry/161/?returnurl=%2f">Malavi</option>
                <option value="162" data-val="/changecountry/162/?returnurl=%2f">Maldivler</option>
                <option value="52" data-val="/changecountry/52/?returnurl=%2f">Malezya</option>
                <option value="163" data-val="/changecountry/163/?returnurl=%2f">Mali</option>
                <option value="164" data-val="/changecountry/164/?returnurl=%2f">Malta</option>
                <option value="165" data-val="/changecountry/165/?returnurl=%2f">Marshall Adaları</option>
                <option value="166" data-val="/changecountry/166/?returnurl=%2f">Martinik</option>
                <option value="53" data-val="/changecountry/53/?returnurl=%2f">Meksika</option>
                <option value="173" data-val="/changecountry/173/?returnurl=%2f">Moğolistan</option>
                <option value="172" data-val="/changecountry/172/?returnurl=%2f">Monako</option>
                <option value="175" data-val="/changecountry/175/?returnurl=%2f">Montserrat</option>
                <option value="167" data-val="/changecountry/167/?returnurl=%2f">Moritanya</option>
                <option value="177" data-val="/changecountry/177/?returnurl=%2f">Mozambik</option>
                <option value="178" data-val="/changecountry/178/?returnurl=%2f">Myanmar</option>
                <option value="179" data-val="/changecountry/179/?returnurl=%2f">Namibya</option>
                <option value="180" data-val="/changecountry/180/?returnurl=%2f">Naru</option>
                <option value="181" data-val="/changecountry/181/?returnurl=%2f">Nepal</option>
                <option value="185" data-val="/changecountry/185/?returnurl=%2f">Nijer</option>
                <option value="186" data-val="/changecountry/186/?returnurl=%2f">Nijerya</option>
                <option value="184" data-val="/changecountry/184/?returnurl=%2f">Nikaragua</option>
                <option value="187" data-val="/changecountry/187/?returnurl=%2f">Niue</option>
                <option value="56" data-val="/changecountry/56/?returnurl=%2f">Norveç</option>
                <option value="108" data-val="/changecountry/108/?returnurl=%2f">Orta Afrika Cumhuriyeti</option>
                <option value="83" data-val="/changecountry/83/?returnurl=%2f">Özbekistan</option>
                <option value="57" data-val="/changecountry/57/?returnurl=%2f">Pakistan</option>
                <option value="192" data-val="/changecountry/192/?returnurl=%2f">Panama</option>
                <option value="193" data-val="/changecountry/193/?returnurl=%2f">Papua Yeni Gine</option>
                <option value="58" data-val="/changecountry/58/?returnurl=%2f">Paraguay</option>
                <option value="59" data-val="/changecountry/59/?returnurl=%2f">Peru</option>
                <option value="61" data-val="/changecountry/61/?returnurl=%2f">Polonya</option>
                <option value="62" data-val="/changecountry/62/?returnurl=%2f">Portekiz</option>
                <option value="63" data-val="/changecountry/63/?returnurl=%2f">Porto Riko</option>
                <option value="195" data-val="/changecountry/195/?returnurl=%2f">Reunion</option>
                <option value="65" data-val="/changecountry/65/?returnurl=%2f">Romanya</option>
                <option value="196" data-val="/changecountry/196/?returnurl=%2f">Ruanda</option>
                <option value="66" data-val="/changecountry/66/?returnurl=%2f">Rusya</option>
                <option value="197" data-val="/changecountry/197/?returnurl=%2f">Saint Kitts ve Nevis</option>
                <option value="198" data-val="/changecountry/198/?returnurl=%2f">Saint Lucia</option>
                <option value="199" data-val="/changecountry/199/?returnurl=%2f">Saint Vincent ve Grenadinler</option>
                <option value="202" data-val="/changecountry/202/?returnurl=%2f">Sao Tome ve Principe</option>
                <option value="203" data-val="/changecountry/203/?returnurl=%2f">Senegal</option>
                <option value="204" data-val="/changecountry/204/?returnurl=%2f">Seyşeller</option>
                <option value="85" data-val="/changecountry/85/?returnurl=%2f">Sırbistan</option>
                <option value="205" data-val="/changecountry/205/?returnurl=%2f">Sierra Leone</option>
                <option value="68" data-val="/changecountry/68/?returnurl=%2f">Singapur</option>
                <option value="69" data-val="/changecountry/69/?returnurl=%2f">Slovakya</option>
                <option value="70" data-val="/changecountry/70/?returnurl=%2f">Slovenya</option>
                <option value="206" data-val="/changecountry/206/?returnurl=%2f">Solomon Adaları</option>
                <option value="209" data-val="/changecountry/209/?returnurl=%2f">Sri Lanka</option>
                <option value="210" data-val="/changecountry/210/?returnurl=%2f">St. Helena</option>
                <option value="212" data-val="/changecountry/212/?returnurl=%2f">Sudan</option>
                <option value="213" data-val="/changecountry/213/?returnurl=%2f">Surinam</option>
                <option value="216" data-val="/changecountry/216/?returnurl=%2f">Suriye</option>
                <option value="67" data-val="/changecountry/67/?returnurl=%2f">Suudi Arabistan</option>
                <option value="215" data-val="/changecountry/215/?returnurl=%2f">Svaziland</option>
                <option value="20" data-val="/changecountry/20/?returnurl=%2f">Şili</option>
                <option value="217" data-val="/changecountry/217/?returnurl=%2f">Tacikistan</option>
                <option value="218" data-val="/changecountry/218/?returnurl=%2f">Tanzanya</option>
                <option value="76" data-val="/changecountry/76/?returnurl=%2f">Tayland</option>
                <option value="75" data-val="/changecountry/75/?returnurl=%2f">Tayvan</option>
                <option value="219" data-val="/changecountry/219/?returnurl=%2f">Togo</option>
                <option value="220" data-val="/changecountry/220/?returnurl=%2f">Tokelau</option>
                <option value="221" data-val="/changecountry/221/?returnurl=%2f">Tonga</option>
                <option value="222" data-val="/changecountry/222/?returnurl=%2f">Trinidad ve Tobago</option>
                <option value="223" data-val="/changecountry/223/?returnurl=%2f">Tunus</option>
                <option value="227" data-val="/changecountry/227/?returnurl=%2f">Uganda</option>
                <option value="78" data-val="/changecountry/78/?returnurl=%2f">Ukrayna</option>
                <option value="190" data-val="/changecountry/190/?returnurl=%2f">Umman</option>
                <option value="82" data-val="/changecountry/82/?returnurl=%2f">Uruguay</option>
                <option value="48" data-val="/changecountry/48/?returnurl=%2f">Ürdün</option>
                <option value="228" data-val="/changecountry/228/?returnurl=%2f">Vanuatu</option>
                <option value="84" data-val="/changecountry/84/?returnurl=%2f">Venezuela</option>
                <option value="230" data-val="/changecountry/230/?returnurl=%2f">Vietnam</option>
                <option value="231" data-val="/changecountry/231/?returnurl=%2f">Virgin Adaları</option>
                <option value="232" data-val="/changecountry/232/?returnurl=%2f">Virgin Adaları (Amerika)</option>
                <option value="235" data-val="/changecountry/235/?returnurl=%2f">Yemen</option>
                <option value="183" data-val="/changecountry/183/?returnurl=%2f">Yeni Kaledonya</option>
                <option value="55" data-val="/changecountry/55/?returnurl=%2f">Yeni Zelanda</option>
                <option value="37" data-val="/changecountry/37/?returnurl=%2f">Yunanistan</option>
                <option value="236" data-val="/changecountry/236/?returnurl=%2f">Zambiya</option>
                <option value="237" data-val="/changecountry/237/?returnurl=%2f">Zimbabve</option>
              </select>
              <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 100px;">
                <span class="selection">
                  <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-country-selector-container" >
                    <span class="select2-selection__rendered" id="select2-country-selector-container" role="textbox" aria-readonly="true" title="Türkiye">Türkiye</span>
                    <span class="select2-selection__arrow" role="presentation"> <b role="presentation"></b></span>
                  </span>
                </span>
                <span class="dropdown-wrapper" aria-hidden="true"></span>
              </span>
            </div>
            <li><a href="/" title="Türkçe"><img title="Türkçe" alt="Türkçe" class="selected" src="@/assets/tr2.png" />Türkçe</a></li>
            <li><a href="/en/" title="English"><img title="English" alt="English" src="@/assets/us3.png" />English</a></li>
            <li><a href="/ar/" title="العربية"><img title="العربية" alt="العربية" src="@/assets/ar2.jpg" />العربية</a></li></ul>
            </div>
      </div>
      <a href="/sik-sorulan-sorular/" title="Yardım" class="d-help"><span>Yardım<b class="text-primary">?</b></span></a>
      <a href="tel:0850 840 0048">0850 840 0048</a>
      <a href="/siparis-takip/" title="Siparişlerim" class="chase"><span>Sipariş Takibi</span></a>
    </div>
  </div>
</template>

<style scoped >
.header__bar {
    border-bottom: 1px solid #e2e6eb;
    background-color: #fff;
}
[class*='flex'][class*='-j-end'] {
    -webkit-justify-content: flex-end;
    -moz-justify-content: flex-end;
    -ms-justify-content: flex-end;
    justify-content: flex-end;
}
[class*='flex'][class*='-a-center'] {
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
}
@media (min-width: 992px){
.container--flush {
    width: 100%;
}}
@media (min-width: 768px){
.container--flush {
    width: 100%;
}}
.container--flush {
    margin-right: auto;
    margin-left: auto;
    padding-left: 0px;
    padding-right: 0px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
}
[class*='flex'] {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -ms-flex;
    display: flex;
}
.ck-lang-box {
    flex: 1;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.header__bar .dropdown {
    display: inline-block;
    max-width: 320px;
    width: 100%;
}
.dropup, .dropdown {
    position: relative;
}
.header__bar, .dropdown button#dropdownMenu1 {
    background-color: transparent;
    padding-left: 0;
    font-size: 12px;
}
.ck-lang-box[data-v-61dd7a3d] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.dropdown.hoverDropdown button {
    background-color: #ededed;
}
.btn-sm, .btn-group-sm>.btn {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 2px;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 6px;
    font-size: 13px;
    line-height: 1.42857143;
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, select {
    text-transform: none;
}
button {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
.button {
    -webkit-appearance: button;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
}
.dropdown.hoverDropdown .dropdown-menu {
    min-width: 190px;
    padding: 10px 10px;
    top: 28px;
    border: 1px solid #e2e6eb;
    font-size: 12px;
}
.ck-lang-box .dropdown-menu {
    box-shadow: none !important;
}
.ck-lang-box .dropdown-menu {
    padding: 15px 15px !important;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 13px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #e2e6eb;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;
}
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 9px;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
body {
    font-family: 'Montserrat',sans-serif;
}
body {
    font-family: 'Montserrat',sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #545454;
    background-color: #fff;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}
label {
    cursor: default;
}
.form-control {
    display: block;
    width: 100%;
    height: 32px;
    padding: 6px 6px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #767676;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e2e6eb;
    border-radius: 2px;
}
.select2-hidden-accessible {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
}
input, select {
    box-shadow: none !important;
}
input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, select {
    text-transform: none;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

select:not(:-internal-list-box) {
    overflow: visible !important;
}
select {
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: -internal-light-dark-color(white, black);
    cursor: default;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-radius: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169);
    border-image: initial;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.select2-container {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle;
    width: 100% !important;
}
.ck-lang-box .dropdown-menu li {
    display: inline-block;
    margin-right: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
}
.ck-lang-box .dropdown-menu li {
    display: inline-block;
    margin-right: 15px;
    margin-top: 5px;
}
.ck-lang-box .dropdown-menu li {
    display: inline-block;
}
.dropdown.hoverDropdown .dropdown-menu {
    min-width: 190px;
    padding: 10px 10px;
    top: 28px;
    border: 1px solid #e2e6eb;
    font-size: 12px;
}
.ck-lang-box .dropdown-menu {
    box-shadow: none !important;
}
.ck-lang-box .dropdown-menu {
    padding: 15px 15px !important;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 13px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #e2e6eb;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;
}
.header__bar a {
    display: inline-block;
    border-left: solid 1px #e2e6eb;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10px;
    margin-left: 10px;
    font-size: 12px;
}
a {
    color: #333;
     background-color: transparent;
}
.header a.d-help b.text-primary {
    margin-left: 4px;
}
.text-primary {
    color: #e91f63;
}
b, strong {
    font-weight: bold;
}
.header__bar a:last-child {
    padding-right: 10px;
    border-right: solid 1px #e2e6eb;
}
#element.style {
    padding-left: 0px;
}
dropup[data-v-61dd7a3d], .dropdown[data-v-61dd7a3d] {
    position: relative;
}
.container--flush flex-a-center-j-end{
-webkit-tap-highlight-color: rgba(0,0,0,0);
font-size: 13px;
line-height: 1.42857143;
color: #545454;
font-family: 'Montserrat',sans-serif;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
padding-right: 10px;
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
padding-left: 0px;
}
</style>
