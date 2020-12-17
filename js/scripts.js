/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  //adicionar ação no botão
  var form = document.querySelector("#contactForm");
  $('#sendMessageButton').click(function (form) {

    var duende = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };
    $(document).ready(() => {
      var table = '';
      var pessoas = duende.length;
      var x = 0;
      while (x < pessoas) {
        table += '<tr><th>' + duende.name + '</th>';
        table += '<th>' + duende.email + '</th>';
        table += '<th>' + duende.phone + '</th>';
        table += '<th>' + duende.message+ '</th></tr>';
        x++;
      }
    })
    
  })

  // Inserir tabela duendes
  $(document).ready(() => {
    $('#table-person').show();

    var nomes = ["Eduardo Saito", "Luan Halaiko", "Thiago Teixeira", "João Victor"];
    var email = ["eduardo@gmail.com", "luan@gmail.com", "thiago@gmail.com", "jv@gmail.com"];
    var contatos = ["(42)98432-6218", "(42)96473-2738", "(42)92738-2873", "(42)99742-2833"];
    var points = ["1200", "1700", "1550", "1670"];

    var table = '';
    var pessoas = nomes.length;
    var x = 0;
    while (x < pessoas) {
      table += '<tr><th>' + nomes[x] + '</th>';
      table += '<th>' + email[x] + '</th>';
      table += '<th>' + contatos[x] + '</th>';
      table += '<th>' + points[x] + '</th></tr>';
      x++;
    }
    $('#table-person tbody').html(table);
  })

})(jQuery); // End of use strict
