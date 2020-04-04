<template>
  <div class="header__middle">
    <div class="container--flush">
      <!--Menu switch button-->

      <span class="mobile-menu-open dropdown-toggle"></span>
      <!--/.Menu switch button-->
      <!--Logo-->
      <div class="logo">
        <a href="/">
          <svg 
          class="brand-logo icon" 
          width="150px" 
          height="33px"
          
          >
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#brand-logo" />
          </svg>
        </a>
      </div>
      <!--/.Logo-->
      <!--Searchbox-->
      <div class="searchbox">
        <button
          class="btn btn-link searchbox__closebutton hidden-md hidden-lg hidden-xl hidden-xxl flex-a-center"
          type="button"
        >
          <svg
            class="icon"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="long-arrow-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#333"
              d="M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"
              class
            />
          </svg>

                <span>Patırtı</span>

        </button>
        <form action="/arama/" id="small-searchbox-form" method="get" novalidate="novalidate">
          <div class="searchbox__wrapper">
            <div class="searchbox__inner">
              <input
                type="text"
                class="searchbox__text form-control"
                id="small-searchterms"
                data-provide="typeahead"
                autocomplete="off"
                name="q"
                placeholder="Elbise, abiye, büyük beden ara..."
              />
              <button type="submit" class="searchbox__button btn-link hidden-xs hidden-sm">
                <svg
                  class="icon"
                  width="17"
                  version="1.1"
                  id="katman_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 62.2 60"
                  style="enable-background:new 0 0 62.2 60"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <circle
                        style="fill:none;stroke:#666666;stroke-width:3;stroke-miterlimit:10"
                        cx="25.6"
                        cy="25.6"
                        r="24.1"
                      />
                      <line
                        style="fill:none;stroke:#666666;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10"
                        x1="44.3"
                        y1="42.1"
                        x2="60.7"
                        y2="58.5"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <span class="clear-search hidden-md hidden-lg hidden">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    class
                  />
                </svg>
              </span>
            </div>
            <div class="searchbox__result"></div>
          </div>
        </form>
      </div>
      <!--/.Searchbox-->
      <!--Header Tools-->
      <div class="header__tools">
        <!--Search icon for mobile-->
        <!--/.Search icon for mobile-->
        <!--User Dropdown-->
        <a
          href="#"
          data-target="#langModal"
          data-toggle="modal"
          id="langDiv"
          style="max-width:25px; min-height:25px; margin-right:10px;"
          class="hidden-lg hidden-md"
        >
        </a>
        <a
          href="/hesabim/bilgilerim/"
          class="header__tools__item btn btn-link flex-column-a-center"
        >
          <svg
            width="23"
            height="22"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="user"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-user fa-w-14 fa-2x"
          >
            <path
              fill="#333"
              d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              class
            />
          </svg>
          <span>Hesabım</span>
        </a>
        <!--/.User Dropdown-->
        <!--/.Favourites Button-->
        <a class="header__tools__item btn btn-link favourite-button" href="/favorilerim/">
          <svg
            width="26"
            height="22"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-heart fa-w-16 fa-2x"
          >
            <path
              fill="#333"
              d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"
              class
            />
          </svg>
          <span>Favorilerim</span>
          <span class="mini-quantity"></span>
        </a>
        <!--/.Favourites Button-->
        <!--ShoppingCart-->
        <div class="shopping-cart">
          <div class="c-dropdown" id="shoppingCartDropdown">
            <button
              id="topcartlink"
              type="button"
              data-droplabel="shoppingCartDropdown"
              class="ajax-cart-load c-dropdown__button btn btn-link flex-column-a-center"
            >
              <svg
                width="20"
                height="22"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="shopping-bag"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-shopping-bag fa-w-14 fa-2x"
              >
                <path
                  fill="#333"
                  d="M352 128C352 57.421 294.579 0 224 0 153.42 0 96 57.421 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 32c52.935 0 96 43.065 96 96H128c0-52.935 43.065-96 96-96zm192 400c0 26.467-21.533 48-48 48H80c-26.467 0-48-21.533-48-48V160h64v48c0 8.837 7.164 16 16 16s16-7.163 16-16v-48h192v48c0 8.837 7.163 16 16 16s16-7.163 16-16v-48h64v272z"
                  class
                />
              </svg>
              <span class="shopping-cart__label hidden-sm hidden-xs">Sepetim</span>
              <span class="shopping-cart__qty"></span>
            </button>
            <div
              id="flyout-cart"
              class="flyout-cart c-dropdown__menu dropdown-menu dropdown-menu-right"
            ></div>
          </div>
        </div>
        <!--/.ShoppingCart-->
      </div>
      <!--/.Header Tools-->
    </div>
    <div class="container--flush search-main-header scrolldowns">
      <div class="search-button hidden-md hidden-lg">
        <button
          id="searchboxSwitch"
          class="btn btn-link flex-column-a-center hidden-md hidden-lg hidden-xl hidden-xxl"
          type="button"
        >
          <svg
            class="icon"
            width="20"
            version="1.1"
            id="katman_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 62.2 60"
            style="enable-background:new 0 0 62.2 60"
            xml:space="preserve"
          >
            <g>
              <g>
                <circle
                  style="fill:none;stroke:#999999;stroke-width:3;stroke-miterlimit:10"
                  cx="25.6"
                  cy="25.6"
                  r="24.1"
                />
                <line
                  style="fill:none;stroke:#999999;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10"
                  x1="44.3"
                  y1="44.1"
                  x2="60.7"
                  y2="58.5"
                />
              </g>
            </g>
          </svg>
        </button>
        <span>Elbise, abiye, büyük beden ara...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header__middle, .header__bar, .header-main, .header-menu {
    background-color: #fff;
}
.header__middle {
    border-bottom: solid 1px #e2e6eb;
    padding: 11px 0;
    background-color: #fff;
    z-index: 1;
    position: relative;
}
.container--flush {
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
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
.searchbox {
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
}
.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {
    border-color: transparent;
}
.btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled], fieldset[disabled] .btn-link {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
}
@media only screen and (min-width: 992px){
.searchbox__wrapper {
    max-width: 450px;
}}
.searchbox__wrapper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.searchbox__inner {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: space-between;
    -moz-align-items: space-between;
    -ms-align-items: space-between;
    align-items: space-between;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    border-radius: 3px;
    overflow: hidden;
    border: solid 1px #e2e6eb;
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
.searchbox__button {
    color: #000;
    height: 36px;
    border: 0;
    border-left: 1px solid #e2e6eb !important;
    padding: 0 9px;
}
.header__tools {
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
.header__tools .btn-link {
    color: #000;
    padding: 6px 13px;
}
.header__tools__item.favourite-button {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -ms-flex;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    position: relative;
    padding: 6px 12px;
}
.shopping-cart {
    position: relative;
    padding: 0;
}
.c-dropdown {
    position: relative;
}
.shopping-cart #topcartlink {
    position: relative;
    padding-right: 0;
}
a.header__tools__item span {
    font-size: 12px;
    margin-top: 5px;
}
.header__tools .c-dropdown .flyout-cart {
    top: 109px;
}
.shopping-cart .flyout-cart {
    width: 300px;
    z-index: 999998;
    background: #fff;
    padding: 0 0 0 !important;
    margin: 0 !important;
}
.header__tools .c-dropdown__menu {
    border: solid 1px #e2e6eb;
    box-shadow: none;
    transition: top .2s linear;
}
.c-dropdown__menu {
    display: none;
    position: absolute;
}
.dropdown-menu-right {
    left: auto;
    right: 0;
}
.fa-2x {
    font-size: 2em;
}
.header .logo {
    margin-top: 0;
    margin-bottom: 0;
    color: #333;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-size: 13px;
    line-height: 1.42857143;
    font-family: 'Montserrat',sans-serif;
    width: 150px;
    height: 33px;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
}
svg:not(:root) {
    overflow: hidden;
}
.header__tools button span, a.header__tools__item span {
    font-size: 12px;
    margin-top: 5px;
}
</style>