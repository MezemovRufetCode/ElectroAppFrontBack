$(document).ready(function () {
  //--------Category menu open close starting-------
  $(".categories .headofCat").click(function () {
    $(this).toggleClass("active");
    $(".categories .Menu").toggleClass("deactive");
  });
  //--------Category menu open close ending-------

  // -----------------Starting Owl Carousel--------

  //-----Intro slider--------
  $(document).ready(function () {
    $("#Intro .owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      dots: true,
    });
  });
  // -------Intro slider Ending--------

  // ----------Fourth Banner Slider Starting--------
  $(document).ready(function () {
    $("#shoplistBannerfourth .owl-carousel").owlCarousel({
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 4,
        },
        768: {
          items: 4,
        },
        992: {
          items: 6,
        },
        1200: {
          items: 6,
        },
      },
    });
  });
  // ----------Fourth Banner Slider Ending--------

  // ----------Parners Banner Slider Starting--------
  $(document).ready(function () {
    $("#partnerBrands .owl-carousel").owlCarousel({
      items: 6,
      dots: false,
      nav: true,
      loop: true,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 5,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
    });
    $("#partnerBrands .owl-carousel .owl-nav").classList.remove("disabled");
  });
  // ----------Partners Banner Slider Ending--------
  //-----------Ending owl Caorousel-------------

  //--------------Starting Shoplist FirstBanner Tab
  let category = document.querySelectorAll(
    "#shoplistBannerfirst .productsCat .category"
  );
  let catContent = document.querySelectorAll(
    "#shoplistBannerfirst .content .all"
  );

  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener(
      "click",
      filterContents.bind(this, category[i])
    );
  }

  function filterContents(item) {
    changeActive(item);
    for (let i = 0; i < catContent.length; i++) {
      if (catContent[i].classList.contains(item.attributes.id.value)) {
        catContent[i].classList.add("activeB1Content");
      } else catContent[i].classList.remove("activeB1Content");
    }
  }
  function changeActive(activeitem) {
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove("activeB1CatName");
    }
    activeitem.classList.add("activeB1CatName");
  }
  //--------------Ending Shoplist FirstBanner Tab

  //--------------Starting Shoplist SecondBanner Tab
  let category2 = document.querySelectorAll(
    "#shoplistBannersecond .productsCat .category"
  );
  let catContent2 = document.querySelectorAll(
    "#shoplistBannersecond .content .all"
  );

  for (let i = 0; i < category2.length; i++) {
    category2[i].addEventListener(
      "click",
      filterContents2.bind(this, category2[i])
    );
  }

  function filterContents2(item2) {
    changeActive2(item2);
    for (let i = 0; i < catContent2.length; i++) {
      if (catContent2[i].classList.contains(item2.attributes.id.value)) {
        catContent2[i].classList.add("activeB2Content");
      } else catContent2[i].classList.remove("activeB2Content");
    }
  }
  function changeActive2(activeitem2) {
    for (let i = 0; i < category2.length; i++) {
      category2[i].classList.remove("activeB2catName");
    }
    activeitem2.classList.add("activeB2catName");
  }
  //--------------Ending Shoplist SecondBanner Tab
  //--------------Starting Shoplist Third Tab
  $(document).ready(function () {});
  let category3 = document.querySelectorAll(
    "#shoplistBannerthird .productsCat .category"
  );
  let catContent3 = document.querySelectorAll(
    "#shoplistBannerthird .content .all"
  );

  for (let i = 0; i < category3.length; i++) {
    category3[i].addEventListener(
      "click",
      filterContents3.bind(this, category3[i])
    );
  }

  function filterContents3(item3) {
    changeActive3(item3);
    for (let i = 0; i < catContent3.length; i++) {
      if (catContent3[i].classList.contains(item3.attributes.id.value)) {
        catContent3[i].classList.add("activeB3Content");
      } else catContent3[i].classList.remove("activeB3Content");
    }
  }
  function changeActive3(activeitem3) {
    for (let i = 0; i < category3.length; i++) {
      category3[i].classList.remove("activeB3catName");
    }
    activeitem3.classList.add("activeB3catName");
  }

  // Two row owl carosuel Banner Third Starting

  $(document).ready(function () {
    var el = $("#shoplistBannerthird .activeB3Content .owl-carousel");

    var carousel;
    var carouselOptions = {
      margin: 20,
      dots: true,
      slideBy: "page",
      responsive: {
        0: {
          items: 1,
          rows: 2,
        },
        450: {
          items: 2,
          rows: 2,
        },
        768: {
          items: 2,
          rows: 2,
        },
        991: {
          items: 3,
          rows: 2,
        },
      },
    };

    //Taken from Owl Carousel so we calculate width the same way
    var viewport = function () {
      var width;
      if (
        carouselOptions.responsiveBaseElement &&
        carouselOptions.responsiveBaseElement !== window
      ) {
        width = $(carouselOptions.responsiveBaseElement).width();
      } else if (window.innerWidth) {
        width = window.innerWidth;
      } else if (
        document.documentElement &&
        document.documentElement.clientWidth
      ) {
        width = document.documentElement.clientWidth;
      } else {
        console.warn("Can not detect viewport width.");
      }
      return width;
    };

    var severalRows = false;
    var orderedBreakpoints = [];
    for (var breakpoint in carouselOptions.responsive) {
      if (carouselOptions.responsive[breakpoint].rows > 1) {
        severalRows = true;
      }
      orderedBreakpoints.push(parseInt(breakpoint));
    }

    //Custom logic is active if carousel is set up to have more than one row for some given window width
    if (severalRows) {
      orderedBreakpoints.sort(function (a, b) {
        return b - a;
      });
      var slides = el.find("[data-slide-index]");
      var slidesNb = slides.length;
      if (slidesNb > 0) {
        var rowsNb;
        var previousRowsNb = undefined;
        var colsNb;
        var previousColsNb = undefined;

        //Calculates number of rows and cols based on current window width
        var updateRowsColsNb = function () {
          var width = viewport();
          for (var i = 0; i < orderedBreakpoints.length; i++) {
            var breakpoint = orderedBreakpoints[i];
            if (width >= breakpoint || i == orderedBreakpoints.length - 1) {
              var breakpointSettings =
                carouselOptions.responsive["" + breakpoint];
              rowsNb = breakpointSettings.rows;
              colsNb = breakpointSettings.items;
              break;
            }
          }
        };

        var updateCarousel = function () {
          updateRowsColsNb();

          //Carousel is recalculated if and only if a change in number of columns/rows is requested
          if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
            var reInit = false;
            if (carousel) {
              //Destroy existing carousel if any, and set html markup back to its initial state
              carousel.trigger("destroy.owl.carousel");
              carousel = undefined;
              slides = el.find("[data-slide-index]").detach().appendTo(el);
              el.find(".fake-col-wrapper").remove();
              reInit = true;
            }

            //This is the only real 'smart' part of the algorithm

            //First calculate the number of needed columns for the whole carousel
            var perPage = rowsNb * colsNb;
            var pageIndex = Math.floor(slidesNb / perPage);
            var fakeColsNb =
              pageIndex * colsNb +
              (slidesNb >= pageIndex * perPage + colsNb
                ? colsNb
                : slidesNb % colsNb);

            //Then populate with needed html markup
            var count = 0;
            for (var i = 0; i < fakeColsNb; i++) {
              //For each column, create a new wrapper div
              var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(
                el
              );
              for (var j = 0; j < rowsNb; j++) {
                //For each row in said column, calculate which slide should be present
                var index =
                  Math.floor(count / perPage) * perPage +
                  (i % colsNb) +
                  j * colsNb;
                if (index < slidesNb) {
                  //If said slide exists, move it under wrapper div
                  slides
                    .filter("[data-slide-index=" + index + "]")
                    .detach()
                    .appendTo(fakeCol);
                }
                count++;
              }
            }
            //end of 'smart' part

            previousRowsNb = rowsNb;
            previousColsNb = colsNb;

            if (reInit) {
              //re-init carousel with new markup
              carousel = el.owlCarousel(carouselOptions);
            }
          }
        };

        //Trigger possible update when window size changes
        $(window).on("resize", updateCarousel);

        //We need to execute the algorithm once before first init in any case
        updateCarousel();
      }
    }

    //init
    carousel = el.owlCarousel(carouselOptions);
  });
  // ----Banner Third Ending
  //--------------Ending Shoplist ThirdBanner Tab
});
