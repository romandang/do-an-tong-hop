doctype html
html(lang='en')
  head
    meta(charset='utf-8')
    meta(name='viewport' content='width=device-width, initial-scale=1.0')
    meta(name='description' content='')
    meta(name='author' content='')
    title Medicio landing page template for Health niche
    // css
    link(href='css/bootstrap.min.css' rel='stylesheet' type='text/css')
    link(href='font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css')
    link(rel='stylesheet' type='text/css' href='plugins/cubeportfolio/css/cubeportfolio.min.css')
    link(href='css/nivo-lightbox.css' rel='stylesheet')
    link(href='css/nivo-lightbox-theme/default/default.css' rel='stylesheet' type='text/css')
    link(href='css/owl.carousel.css' rel='stylesheet' media='screen')
    link(href='css/owl.theme.css' rel='stylesheet' media='screen')
    link(href='css/animate.css' rel='stylesheet')
    link(href='css/style.css' rel='stylesheet')
    // boxed bg
    link#bodybg(href='bodybg/bg1.css' rel='stylesheet' type='text/css')
    // template skin
    link#t-colors(href='color/default.css' rel='stylesheet')
  body#page-top(data-spy='scroll' data-target='.navbar-custom')
    #wrapper
      nav.navbar.navbar-custom.navbar-fixed-top(role='navigation')
        .top-area
          .container
            .row
              .col-sm-6.col-md-6
                p.bold.text-left Monday - Saturday, 8am to 10pm 
              .col-sm-6.col-md-6
                p.bold.text-right Call us now +62 008 65 001
        .container.navigation
          .navbar-header.page-scroll
            button.navbar-toggle(type='button' data-toggle='collapse' data-target='.navbar-main-collapse')
              i.fa.fa-bars
            a.navbar-brand(href='index.html')
              img(src='img/logo.png' alt='' width='150' height='40')
          // Collect the nav links, forms, and other content for toggling
          .collapse.navbar-collapse.navbar-right.navbar-main-collapse
            ul.nav.navbar-nav
              li.active
                a(href='#intro') Home
              li
                a(href='#service') Service
              li
                a(href='#doctor') Doctors
              li
                a(href='#facilities') Facilities
              li
                a(href='#pricing') Pricing
              li.dropdown
                a.dropdown-toggle(href='#' data-toggle='dropdown')
                  span.badge.custom-badge.red.pull-right Extra
                  | More 
                  b.caret
                ul.dropdown-menu
                  li
                    a(href='index.html') Home form
                  li
                    a(href='index-video.html') Home video
                  li
                    a(href='index-cta.html') Home CTA
                  li
                    a(href='https://bootstrapmade.com') Download
          // /.navbar-collapse
          // /.container
          // Section: intro
          section#intro.intro
            .intro-content
              .container
                .row
                  .col-lg-6
                    .wow.fadeInDown(data-wow-offset='0' data-wow-delay='0.1s')
                      h2.h-ultra Medicio medical group
                    .wow.fadeInUp(data-wow-offset='0' data-wow-delay='0.1s')
                      h4.h-light Provide best quality healthcare for you
                    .well.well-trans
                      .wow.fadeInRight(data-wow-delay='0.1s')
                        ul.lead-list
                          li
                            span.fa.fa-check.fa-2x.icon-success
                            span.list
                              strong Affordable monthly premium packages
                              br
                              | Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis
                          li
                            span.fa.fa-check.fa-2x.icon-success
                            span.list
                              strong Choose your favourite doctor
                              br
                              | Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis
                          li
                            span.fa.fa-check.fa-2x.icon-success
                            span.list
                              strong Only use friendly environment
                              br
                              | Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis
                        p.text-right.wow.bounceIn(data-wow-delay='0.4s')
                          a.btn.btn-skin.btn-lg(href='#')
                            | Learn more 
                            i.fa.fa-angle-right
                  .col-lg-6
                    .wow.fadeInUp(data-wow-duration='2s' data-wow-delay='0.2s')
                      img.img-responsive(src='img/dummy/img-1.png' alt='')
          // /Section: intro
          // Section: boxes
          section#boxes.home-section.paddingtop-80
            .container
              .row
                .col-sm-3.col-md-3
                  .wow.fadeInUp(data-wow-delay='0.2s')
                    .box.text-center
                      i.fa.fa-check.fa-3x.circled.bg-skin
                      h4.h-bold Make an appoinment
                      p
                        | Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne.
                .col-sm-3.col-md-3
                  .wow.fadeInUp(data-wow-delay='0.2s')
                    .box.text-center
                      i.fa.fa-list-alt.fa-3x.circled.bg-skin
                      h4.h-bold Choose your package
                      p
                        | Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne.
                .col-sm-3.col-md-3
                  .wow.fadeInUp(data-wow-delay='0.2s')
                    .box.text-center
                      i.fa.fa-user-md.fa-3x.circled.bg-skin
                      h4.h-bold Help by specialist
                      p
                        | Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne.
                .col-sm-3.col-md-3
                  .wow.fadeInUp(data-wow-delay='0.2s')
                    .box.text-center
                      i.fa.fa-hospital-o.fa-3x.circled.bg-skin
                      h4.h-bold Get diagnostic report
                      p
                        | Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne.
          // /Section: boxes
          section#callaction.home-section.paddingtop-40
            .container
              .row
                .col-md-12
                  .callaction.bg-gray
                    .row
                      .col-md-8
                        .wow.fadeInUp(data-wow-delay='0.1s')
                          .cta-text
                            h3 In an emergency? Need help now?
                            p
                              | Lorem ipsum dolor sit amet consectetur adipiscing elit uisque interdum ante eget faucibus.
                      .col-md-4
                        .wow.lightSpeedIn(data-wow-delay='0.1s')
                          .cta-btn
                            a.btn.btn-skin.btn-lg(href='#') Book an appoinment
          // Section: services
          section#service.home-section.nopadding.paddingtop-60
            .container
              .row
                .col-sm-6.col-md-6
                  .wow.fadeInUp(data-wow-delay='0.2s')
                    img.img-responsive(src='img/dummy/img-1.jpg' alt='')
                .col-sm-3.col-md-3
                  .wow.fadeInRight(data-wow-delay='0.1s')
                    .service-box
                      .service-icon
                        span.fa.fa-stethoscope.fa-3x
                      .service-desc
                        h5.h-light Medical checkup
                        p Vestibulum tincidunt enim in pharetra malesuada.
                  .wow.fadeInRight(data-wow-delay='0.2s')
                    .service-box
                      .service-icon
                        span.fa.fa-wheelchair.fa-3x
                      .service-desc
                        h5.h-light Nursing Services
                        p Vestibulum tincidunt enim in pharetra malesuada.
                  .wow.fadeInRight(data-wow-delay='0.3s')
                    .service-box
                      .service-icon
                        span.fa.fa-plus-square.fa-3x
                      .service-desc
                        h5.h-light Pharmacy
                        p Vestibulum tincidunt enim in pharetra malesuada.
                .col-sm-3.col-md-3
                  .wow.fadeInRight(data-wow-delay='0.1s')
                    .service-box
                      .service-icon
                        span.fa.fa-h-square.fa-3x
                      .service-desc
                        h5.h-light Gyn Care
                        p Vestibulum tincidunt enim in pharetra malesuada.
                  .wow.fadeInRight(data-wow-delay='0.2s')
                    .service-box
                      .service-icon
                        span.fa.fa-filter.fa-3x
                      .service-desc
                        h5.h-light Neurology
                        p Vestibulum tincidunt enim in pharetra malesuada.
                  .wow.fadeInRight(data-wow-delay='0.3s')
                    .service-box
                      .service-icon
                        span.fa.fa-user-md.fa-3x
                      .service-desc
                        h5.h-light Sleep Center
                        p Vestibulum tincidunt enim in pharetra malesuada.
          // /Section: services
          // Section: team
          section#doctor.home-section.bg-gray.paddingbot-60
            .container.marginbot-50
              .row
                .col-lg-8.col-lg-offset-2
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .section-heading.text-center
                      h2.h-bold Doctors
                      p Ea melius ceteros oportere quo, pri habeo viderer facilisi ei
                  .divider-short
            .container
              .row
                .col-lg-12
                  #filters-container.cbp-l-filters-alignLeft
                    .cbp-filter-item-active.cbp-filter-item(data-filter='*')
                      | All (
                      .cbp-filter-counter
                      | )
                    .cbp-filter-item(data-filter='.cardiologist')
                      | Cardiologist (
                      .cbp-filter-counter
                      | )
                    .cbp-filter-item(data-filter='.psychiatrist')
                      | Psychiatrist (
                      .cbp-filter-counter
                      | )
                    .cbp-filter-item(data-filter='.neurologist')
                      | Neurologist (
                      .cbp-filter-counter
                      | )
                  #grid-container.cbp-l-grid-team
                    ul
                      li.cbp-item.psychiatrist
                        a.cbp-caption.cbp-singlePage(href='doctors/member1.html')
                          .cbp-caption-defaultWrap
                            img(src='img/team/1.jpg' alt='' width='100%')
                          .cbp-caption-activeWrap
                            .cbp-l-caption-alignCenter
                              .cbp-l-caption-body
                                .cbp-l-caption-text VIEW PROFILE
                        a.cbp-singlePage.cbp-l-grid-team-name(href='doctors/member1.html') Alice Grue
                        .cbp-l-grid-team-position Psychiatrist
                      li.cbp-item.cardiologist
                        a.cbp-caption.cbp-singlePage(href='doctors/member2.html')
                          .cbp-caption-defaultWrap
                            img(src='img/team/2.jpg' alt='' width='100%')
                          .cbp-caption-activeWrap
                            .cbp-l-caption-alignCenter
                              .cbp-l-caption-body
                                .cbp-l-caption-text VIEW PROFILE
                        a.cbp-singlePage.cbp-l-grid-team-name(href='doctors/member2.html') Joseph Murphy
                        .cbp-l-grid-team-position Cardiologist
                      li.cbp-item.cardiologist
                        a.cbp-caption.cbp-singlePage(href='doctors/member3.html')
                          .cbp-caption-defaultWrap
                            img(src='img/team/3.jpg' alt='' width='100%')
                          .cbp-caption-activeWrap
                            .cbp-l-caption-alignCenter
                              .cbp-l-caption-body
                                .cbp-l-caption-text VIEW PROFILE
                        a.cbp-singlePage.cbp-l-grid-team-name(href='doctors/member3.html') Alison Davis
                        .cbp-l-grid-team-position Cardiologist
                      li.cbp-item.neurologist
                        a.cbp-caption.cbp-singlePage(href='doctors/member4.html')
                          .cbp-caption-defaultWrap
                            img(src='img/team/4.jpg' alt='' width='100%')
                          .cbp-caption-activeWrap
                            .cbp-l-caption-alignCenter
                              .cbp-l-caption-body
                                .cbp-l-caption-text VIEW PROFILE
                        a.cbp-singlePage.cbp-l-grid-team-name(href='doctors/member4.html') Adam Taylor
                        .cbp-l-grid-team-position Neurologist
          // /Section: team
          // Section: works
          section#facilities.home-section.paddingbot-60
            .container.marginbot-50
              .row
                .col-lg-8.col-lg-offset-2
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .section-heading.text-center
                      h2.h-bold Our facilities
                      p Ea melius ceteros oportere quo, pri habeo viderer facilisi ei
                  .divider-short
            .container
              .row
                .col-sm-12.col-md-12.col-lg-12
                  .wow.bounceInUp(data-wow-delay='0.2s')
                    #owl-works.owl-carousel
                      .item
                        a(href='img/photo/1.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/1@2x.jpg')
                          img.img-responsive(src='img/photo/1.jpg' alt='img')
                      .item
                        a(href='img/photo/2.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/2@2x.jpg')
                          img.img-responsive(src='img/photo/2.jpg' alt='img')
                      .item
                        a(href='img/photo/3.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/3@2x.jpg')
                          img.img-responsive(src='img/photo/3.jpg' alt='img')
                      .item
                        a(href='img/photo/4.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/4@2x.jpg')
                          img.img-responsive(src='img/photo/4.jpg' alt='img')
                      .item
                        a(href='img/photo/5.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/5@2x.jpg')
                          img.img-responsive(src='img/photo/5.jpg' alt='img')
                      .item
                        a(href='img/photo/6.jpg' title='This is an image title' data-lightbox-gallery='gallery1' data-lightbox-hidpi='img/works/6@2x.jpg')
                          img.img-responsive(src='img/photo/6.jpg' alt='img')
          // /Section: works
          // Section: testimonial
          section#testimonial.home-section.paddingbot-60.parallax(data-stellar-background-ratio='0.5')
            .carousel-reviews.broun-block
              .container
                .row
                  #carousel-reviews.carousel.slide(data-ride='carousel')
                    .carousel-inner
                      .item.active
                        .col-md-4.col-sm-6
                          .block-text.rel.zmin
                            a(title='' href='#') Emergency Contraception
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star(data-value='2')
                                span.glyphicon.glyphicon-star(data-value='3')
                                span.glyphicon.glyphicon-star-empty(data-value='4')
                                span.glyphicon.glyphicon-star-empty(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/1.jpg' alt='')
                            a(title='' href='#') Anna
                            span Chicago, Illinois
                        .col-md-4.col-sm-6.hidden-xs
                          .block-text.rel.zmin
                            a(title='' href='#') Orthopedic Surgery
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star-empty(data-value='2')
                                span.glyphicon.glyphicon-star-empty(data-value='3')
                                span.glyphicon.glyphicon-star-empty(data-value='4')
                                span.glyphicon.glyphicon-star-empty(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/2.jpg' alt='')
                            a(title='' href='#') Matthew G
                            span San Antonio, Texas
                        .col-md-4.col-sm-6.hidden-sm.hidden-xs
                          .block-text.rel.zmin
                            a(title='' href='#') Medical consultation
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star(data-value='2')
                                span.glyphicon.glyphicon-star(data-value='3')
                                span.glyphicon.glyphicon-star(data-value='4')
                                span.glyphicon.glyphicon-star(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/3.jpg' alt='')
                            a(title='' href='#') Scarlet Smith
                            span Dallas, Texas
                      .item
                        .col-md-4.col-sm-6
                          .block-text.rel.zmin
                            a(title='' href='#') Birth control pills
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star(data-value='2')
                                span.glyphicon.glyphicon-star(data-value='3')
                                span.glyphicon.glyphicon-star-empty(data-value='4')
                                span.glyphicon.glyphicon-star-empty(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/4.jpg' alt='')
                            a(title='' href='#') Lucas Thompson
                            span Austin, Texas
                        .col-md-4.col-sm-6.hidden-xs
                          .block-text.rel.zmin
                            a(title='' href='#') Radiology
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star-empty(data-value='2')
                                span.glyphicon.glyphicon-star-empty(data-value='3')
                                span.glyphicon.glyphicon-star-empty(data-value='4')
                                span.glyphicon.glyphicon-star-empty(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/5.jpg' alt='')
                            a(title='' href='#') Ella Mentree
                            span Fort Worth, Texas
                        .col-md-4.col-sm-6.hidden-sm.hidden-xs
                          .block-text.rel.zmin
                            a(title='' href='#') Cervical Lesions
                            .mark
                              | My rating: 
                              span.rating-input
                                span.glyphicon.glyphicon-star(data-value='0')
                                span.glyphicon.glyphicon-star(data-value='1')
                                span.glyphicon.glyphicon-star(data-value='2')
                                span.glyphicon.glyphicon-star(data-value='3')
                                span.glyphicon.glyphicon-star(data-value='4')
                                span.glyphicon.glyphicon-star(data-value='5')
                            p
                              | Ne eam errem semper. Laudem detracto phaedrum cu vim, pri cu errem fierent fabellas. Quis magna in ius, pro vidit nonumy te, nostrud ...
                            ins.ab.zmin.sprite.sprite-i-triangle.block
                          .person-text.rel.text-light
                            img.person.img-circle(src='img/testimonials/6.jpg' alt='')
                            a(title='' href='#') Suzanne Adam
                            span Detroit, Michigan
                    a.left.carousel-control(href='#carousel-reviews' role='button' data-slide='prev')
                      span.glyphicon.glyphicon-chevron-left
                    a.right.carousel-control(href='#carousel-reviews' role='button' data-slide='next')
                      span.glyphicon.glyphicon-chevron-right
          // /Section: testimonial
          // Section: pricing
          section#pricing.home-section.bg-gray.paddingbot-60
            .container.marginbot-50
              .row
                .col-lg-8.col-lg-offset-2
                  .wow.lightSpeedIn(data-wow-delay='0.1s')
                    .section-heading.text-center
                      h2.h-bold Health packages
                      p Take charge of your health today with our specially designed health packages
                  .divider-short
            .container
              .row
                .col-sm-4.pricing-box
                  .wow.bounceInUp(data-wow-delay='0.1s')
                    .pricing-content.general
                      h2 Basic Fit 1 Package
                      h3
                        | $33
                        sup .99
                        span / one time
                      ul
                        li
                          | Anthropometry (BMI, WH Ratio) 
                          i.fa.fa-check.icon-success
                        li
                          | Post Examination Review 
                          i.fa.fa-check.icon-success
                        li
                          | General Screening – Basic 
                          i.fa.fa-check.icon-success
                        li
                          del Health Screening Report
                          i.fa.fa-times.icon-danger
                      .price-bottom
                        a.btn.btn-skin.btn-lg(href='#') Purchase
                .col-sm-4.pricing-box.featured-price
                  .wow.bounceInUp(data-wow-delay='0.3s')
                    .pricing-content.featured
                      h2 Golden Glow Package
                      h3
                        | $65
                        sup .99
                        span / one time
                      ul
                        li
                          | Anthropometry (BMI, WH Ratio) 
                          i.fa.fa-check.icon-success
                        li
                          | Post Examination Review 
                          i.fa.fa-check.icon-success
                        li
                          | General Screening – Basic 
                          i.fa.fa-check.icon-success
                        li
                          | Body Composition Analysis 
                          i.fa.fa-check.icon-success
                        li
                          | GR Assessment & Scoring 
                          i.fa.fa-check.icon-success
                      .price-bottom
                        a.btn.btn-skin.btn-lg(href='#') Purchase
                .col-sm-4.pricing-box
                  .wow.bounceInUp(data-wow-delay='0.2s')
                    .pricing-content.general.last
                      h2 Basic Fit 2 Package
                      h3
                        | $47
                        sup .99
                        span / one time
                      ul
                        li
                          | Anthropometry (BMI, WH Ratio) 
                          i.fa.fa-check.icon-success
                        li
                          | Post Examination Review 
                          i.fa.fa-check.icon-success
                        li
                          | General Screening – Regular 
                          i.fa.fa-check.icon-success
                        li
                          del Health Screening Report
                          i.fa.fa-times.icon-danger
                      .price-bottom
                        a.btn.btn-skin.btn-lg(href='#') Purchase
          // /Section: pricing
          section#partner.home-section.paddingbot-60
            .container.marginbot-50
              .row
                .col-lg-8.col-lg-offset-2
                  .wow.lightSpeedIn(data-wow-delay='0.1s')
                    .section-heading.text-center
                      h2.h-bold Our partner
                      p Take charge of your health today with our specially designed health packages
                  .divider-short
            .container
              .row
                .col-sm-6.col-md-3
                  .partner
                    a(href='#')
                      img(src='img/dummy/partner-1.jpg' alt='')
                .col-sm-6.col-md-3
                  .partner
                    a(href='#')
                      img(src='img/dummy/partner-2.jpg' alt='')
                .col-sm-6.col-md-3
                  .partner
                    a(href='#')
                      img(src='img/dummy/partner-3.jpg' alt='')
                .col-sm-6.col-md-3
                  .partner
                    a(href='#')
                      img(src='img/dummy/partner-4.jpg' alt='')
          footer
            .container
              .row
                .col-sm-6.col-md-4
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .widget
                      h5 About Medicio
                      p
                        | Lorem ipsum dolor sit amet, ne nam purto nihil impetus, an facilisi accommodare sea
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .widget
                      h5 Information
                      ul
                        li
                          a(href='#') Home
                        li
                          a(href='#') Laboratory
                        li
                          a(href='#') Medical treatment
                        li
                          a(href='#') Terms & conditions
                .col-sm-6.col-md-4
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .widget
                      h5 Medicio center
                      p
                        | Nam leo lorem, tincidunt id risus ut, ornare tincidunt naqunc sit amet.
                      ul
                        li
                          span.fa-stack.fa-lg
                            i.fa.fa-circle.fa-stack-2x
                            i.fa.fa-calendar-o.fa-stack-1x.fa-inverse
                          |  Monday - Saturday, 8am to 10pm
                        li
                          span.fa-stack.fa-lg
                            i.fa.fa-circle.fa-stack-2x
                            i.fa.fa-phone.fa-stack-1x.fa-inverse
                          |  +62 0888 904 711
                        li
                          span.fa-stack.fa-lg
                            i.fa.fa-circle.fa-stack-2x
                            i.fa.fa-envelope-o.fa-stack-1x.fa-inverse
                          |  hello@medicio.com
                .col-sm-6.col-md-4
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .widget
                      h5 Our location
                      p The Suithouse V303, Kuningan City, Jakarta Indonesia 12940
                  .wow.fadeInDown(data-wow-delay='0.1s')
                    .widget
                      h5 Follow us
                      ul.company-social
                        li.social-facebook
                          a(href='#')
                            i.fa.fa-facebook
                        li.social-twitter
                          a(href='#')
                            i.fa.fa-twitter
                        li.social-google
                          a(href='#')
                            i.fa.fa-google-plus
                        li.social-vimeo
                          a(href='#')
                            i.fa.fa-vimeo-square
                        li.social-dribble
                          a(href='#')
                            i.fa.fa-dribbble
            .sub-footer
              .container
                .row
                  .col-sm-6.col-md-6.col-lg-6
                    .wow.fadeInLeft(data-wow-delay='0.1s')
                      .text-left
                        p ©Copyright 2015 - Medicio. All rights reserved.
                  .col-sm-6.col-md-6.col-lg-6
                    .wow.fadeInRight(data-wow-delay='0.1s')
                      .text-right
                        p
                          a(href='http://bootstraptaste.com/') Bootstrap Themes
                          |  by BootstrapTaste
                      //
                        All links in the footer should remain intact.
                        Licenseing information is available at: http://bootstraptaste.com/license/
                        You can buy this theme without footer links online at: http://bootstraptaste.com/buy/?theme=Medicio
    a.scrollup(href='#')
      i.fa.fa-angle-up.active
    // Core JavaScript Files
    script(src='js/jquery.min.js')
    script(src='js/bootstrap.min.js')
    script(src='js/jquery.easing.min.js')
    script(src='js/wow.min.js')
    script(src='js/jquery.scrollTo.js')
    script(src='js/jquery.appear.js')
    script(src='js/stellar.js')
    script(src='plugins/cubeportfolio/js/jquery.cubeportfolio.min.js')
    script(src='js/owl.carousel.min.js')
    script(src='js/nivo-lightbox.min.js')
    script(src='js/custom.js')
