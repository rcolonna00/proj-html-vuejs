var app = new Vue(
    {
        el: '#root',
        data: {
            activeIndex: 0,
            menuLink: [ 
                "Home", 
                "Pages", 
                "Program", 
                "Tickets", 
                "Papers", 
                "Blog", 
                "Shortcodes" 
            ],
            imgSponsors: [ "1", "2", "3", "4", "5", "6" ],
            imgMaps: [

                // INIZIO PRIMA RIGA
                "img/vt (23).png",
                "img/vt (17).png",
                "img/vt (11).png",
                "img/vt (1).png",
                "img/vt (5).png",
                "img/vt (4).png",
                "img/vt (9).png",
                "img/vt (20).png",
                // FINE PRIMA RIGA

                // INIZIO SECONDA RIGA
                "img/vt (19).png",
                "img/vt (13).png",
                "img/vt (12).png",
                "img/vt (2).png",
                "img/vt.png",
                "img/vt (3).png",
                "img/vt (15).png",
                "img/vt (18).png",
                // INIZIO SECONDA RIGA

                // INIZIO TERZA RIGA
                "img/vt (22).png",
                "img/vt (16).png",
                "img/vt (8).png",
                "img/vt (10).png",
                "img/vt (6).png",
                "img/vt (7).png",
                "img/vt (14).png",
                "img/vt (21).png",
                // INIZIO TERZA RIGA
            ],
            footerIcon: [
                "fab fa-facebook-square",
                "fab fa-twitter-square",
                "fab fa-linkedin",
                "fab fa-google-plus-square",
                "fab fa-pinterest-square",
                "fas fa-comment-dots"
            ],
            recentNews: [
                "sem porta mollis parturient",
                "nullam lorem mattis purus",
                "nibh sem sit ullamcorper",
                "donec luctus imperdiet",
                "magna pars studiorum"
            ],
            footerImage: [
                // prima riga
                "img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg",
                "img/photodune-8523683-speaker-at-business-convention-and-present (1).jpg",
                "img/photodune-6745579-modern-creative-man-relaxing-on-workspace- (1).jpg",
                "img/2-item-1.jpg",

                // seconda riga
                "img/photodune-8797753-multiethnic-people-with-startup-business-t.jpg",
                "img/card04-150x150.jpg",
                "img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg",
                "img/photodune-6745585-modern-creative-workspace-m.jpg",

                // terza riga
                "img/6426608875_186070f8ca_o-150x150.jpg",
                "img/card01-150x150.jpg",
                "img/13349065283_64d09b067c_o-150x150.jpg",
                "img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg"
            ],
            supportoInformazioni:[
                "About Us",
                "Accomodation",
                "Call for Paper",
                "Contact Us",
            ],
        },
        methods: {

        },
        mounted () {

        }
    }
)