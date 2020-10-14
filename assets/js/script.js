// Redirect to https
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

/* Particles.js */
//    particlesJS.load('particles', 'assets/js/particles.json', function () {
particlesJS.load('particles', 'assets/js/particles-2.json', function () {

});

$(document).ready(function () {
    // Smooth scrolling for all links
    $("a").on('click', _.throttle(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;

                var el = $('#nextSection a span'),
                        newone = el.clone(true);

                el.before(newone);

                $("." + el.attr("class") + ":last").remove();
            });
        }
    }, 700, {trailing: false}));;

    // Color selfie on mouseover
    $('.selfie').mousemove(function (e) {

        $('.color', this).css("opacity", "1");

        var offs = $(this).offset(),
                p = {x: offs.left, y: offs.top},
                mPos = {x: e.pageX, y: e.pageY},
                x = mPos.x - p.x - 112.5,
                y = mPos.y - p.y - 112.5;

        $('.color', this).css({left: x, top: y, backgroundPosition: -x + 'px ' + -y + 'px'});

    }).mouseout(function () {

        $('.color', this).css("opacity", "0");
    });



//  Scroll to next or prev section on keypress (arrow up/down & Page up/down)
    $(document).keydown(_.throttle(function (e) {
        if (e.which === 40 || e.which === 34) { // Down
            e.preventDefault();
            $("#firstScroll a").click();
        } else if (e.which === 38 || e.which === 33) { // Up
            e.preventDefault();
            $("#sectionCtrls .prevSection a").click();
        }
    }, 700, {trailing: false}));

});

/* Waypoints.js */

var $section = $("section");
var $currentSection = 0;
var $sectionCtrls = $("#sectionCtrls");
var $prevSection = $(".prevSection a");
var $nextSection = $(".nextSection a");

$nextSection.attr("href", "#about");

function activateNav(i) {
    $('.navlink a svg').removeClass('active');
    $(".navlink:nth-child(" + i + ") a svg").addClass('active');
}

$section.waypoint(function (direction) {

    if (direction == "down") {
        $currentSection++;
    } else {
        $currentSection--;
    }


    // Home
    if ($currentSection === 1) {
        $nextSection.attr("href", "#about");
        $sectionCtrls.css("display", "none");
        activateNav($currentSection);

        /** Animations **/

        /* Primary entry */
        setTimeout(function () {
            $("#entry-primary").css("display", "block");
        }, 800);

        /* Secondary entry */
        setTimeout(function () {
            $("#entry-secondary").css("display", "block");
        }, 2300);
    }

    // About
    if ($currentSection === 2) {
        $sectionCtrls.css("display", "block");
        $prevSection.attr("href", "#home");
        $nextSection.attr("href", "#mywork");
        activateNav($currentSection);

        $("#about .flex-c .w50").css("opacity", "1");
        $("#about .flex-c .w50:first-of-type").addClass("animate-left");

        if (!$("#about .flex-c .w50:last-of-type").hasClass("is-shown")) {
            $("#about .flex-c .w50:last-of-type").addClass("animate-right");
            setTimeout(function () {
                $("#about .flex-c .w50:last-of-type").addClass("is-shown");
                $("#about .flex-c .w50:last-of-type").removeClass("animate-right");
            }, 1100);
        }
        clearTimeout();

    }

    // My work
    if ($currentSection === 3) {
        $sectionCtrls.css("display", "block");
        $prevSection.attr("href", "#about");
        $nextSection.attr("href", "#contact");
        activateNav($currentSection);

        // Show work boxes
        var boxes = document.getElementsByClassName("grid-item");
        var i = 0;
        let length = boxes.length;

        var animation = 'animate-top';

        function showWork() {
            boxes[i].style.opacity = 1;
            boxes[i].classList.add(animation);
            i++;
            if (i !== length) {
                setTimeout(showWork, 250);
                clearTimeout();
            }
        }
        showWork();
    }

    // Contact
    if ($currentSection === 4) {

        // Show contact inputs
        var inputs = document.getElementsByClassName("contactInput");
        var i = 0;
        let length = inputs.length;

        var animation = 'animate-left';

        function showContact() {
            inputs[i].style.opacity = 1;
            inputs[i].classList.add(animation);
            if (animation === 'animate-left') {
                animation = 'animate-right';
            } else {
                animation = 'animate-left';
            }
            i++;
            if (i !== length) {
                setTimeout(showContact, 250);
                clearTimeout();
            }
        }
        showContact();

        $sectionCtrls.css("display", "block");
        $prevSection.attr("href", "#mywork");
        $nextSection.attr("href", "#home");
        $("#sectionCtrls .nextSection").css("transform", "rotate(270deg)");
        $("#sectionCtrls .nextSection a").append("<span class=\"arrow primary-first-arrow next\" id=\"toTheTopArrow\" style=\"left:11px;\"></span>");
        $("#sectionCtrls .nextSection a span:first-child").css("left", "21px");
        $("#sectionCtrls .nextSection a span:nth-child(2)").css("animation-delay", ".175s");

        activateNav($currentSection);
    } else {
        $("#sectionCtrls .nextSection").css("transform", "rotate(90deg)");
        $("#sectionCtrls .nextSection a span:first-child").css("left", "16px");
        $("#toTheTopArrow").remove();
    }

}, {offset: "40%"});



// ABOUT ME

// https://codepen.io/fabvit86/pen/RLKbab

const chartHeight = 500,
        chartWidth = 600,
        nodeHeight = 45,
        nodeWidth = 45;

const svg = d3.select("#skills-container");

svg.attr("height", chartHeight)
        .attr("width", chartWidth);

// functions to avoid nodes and links going outside the svg container, when calculating the position:
function getNodeXCoordinate(x) {
    return Math.max(0, Math.min(chartWidth - nodeWidth, x));
}
function getNodeYCoordinate(y) {
    return Math.max(0, Math.min(chartHeight - nodeHeight, y));
}

// create a new simulation (a simulation starts with alpha = 1 and decreases slowly to 0):
const simulation = d3.forceSimulation()
        // many-body force (force applied amongst all nodes, negative strength for repulsion):
        .force("charge", d3.forceManyBody().strength(-275).distanceMax(200))
        // centering force (mean position of all nodes):
        .force("center", d3.forceCenter(chartWidth / 2, chartHeight / 2))
        // link force (pushes linked nodes together or apart according to the desired link distance)
        .force("link", d3.forceLink().distance(30).strength(.5))
        // prevent nodes from ovelapping, treating them as circles with the given radius
        .force("collide", d3.forceCollide((nodeWidth + 2) / 2));

// json data
const url = 'https://webnation.dk/portv2/assets/json/skills.json';

d3.json(url, (error, data) => {
    if (error)
        throw error;
    const nodes = data.nodes;
    const links = data.links;

    // add links (lines):
    const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line') // line to connect nodes
            .attr('stroke-width', 1) // line width

    // use a g element to contain a rect and an image for every node
    const nodeWrapper = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('.node')
            .data(nodes)
            .enter().append('g')
            .attr('class', 'nodeWrapper');

    // add nodes (circles)
    const node = nodeWrapper
            .append('clipPath')
            .attr('id', d => d.img)
            .append('circle')
            .attr('id', d => d.id)
            .attr('class', 'node')
            .attr('cx', 21)
            .attr('cy', 22)
            .attr('r', 22.5);

    // add images
    nodeWrapper
            .append('image')
            .attr('href', d => 'assets/img/' + d.img)
            .attr('clipPath', d => 'url(#' + d.img + ')')
            .attr('height', nodeHeight)
            .attr('width', nodeWidth);

    // node dragging:
    nodeWrapper
            .call(d3.drag()
                    .on('start', d => {
                        // heat the simulation
                        if (!d3.event.active)
                            simulation.alphaTarget(0.2).restart();
                        // set fixed x and y coordinates
                        d.fx = d.x;
                        d.fy = d.y;
                    })
                    .on('drag', d => {
                        // by fixing its position, this disables the forces acting on the node
                        d.fx = d3.event.x;
                        d.fy = d3.event.y;
                    })
                    .on('end', d => {
                        // stop simulation:
                        if (!d3.event.active)
                            simulation.alphaTarget(0);
                        // reactivate the force on the node
                        d.fx = null;
                        d.fy = null;
                    })
                    );

    // tooltip div
    const tooltip = d3.select('#skills-wrapper').append('div')
            .classed('tooltip', true)
            .style('opacity', 0); // start invisible
    nodeWrapper
            .on('mouseover', function (d) {
                tooltip.transition()
                        .duration(300)
                        .style('opacity', 1); // show the tooltip
                tooltip.html(d.skill)
                        .style('left', (d3.event.pageX - d3.select('.tooltip').node().offsetWidth - 5) + 'px')
                        .style('top', (d3.event.pageY - d3.select('.tooltip').node().offsetHeight) + 'px');
            })
            .on('mouseleave', function (d) {
                tooltip.transition()
                        .duration(200)
                        .style('opacity', 0);
            });

    simulation
            .nodes(nodes)
            .on('tick', () => {
                // set each node's position on each tick of the simulation
                nodeWrapper.attr('transform', d => 'translate(' + getNodeXCoordinate(d.x) + ',' + getNodeYCoordinate(d.y) + ')')
                // set start (x1,y1) and point (x2,y2) coordinate of each link on each tick of the simulation
                link.attr('x1', d => getNodeXCoordinate(d.source.x + nodeWidth / 2))
                link.attr('y1', d => getNodeYCoordinate(d.source.y + nodeHeight / 2))
                link.attr('x2', d => getNodeXCoordinate(d.target.x + nodeWidth / 2))
                link.attr('y2', d => getNodeYCoordinate(d.target.y + nodeHeight / 2))
            });

    // pass the links to the link force
    simulation
            .force('link')
            .links(links)
            .distance(45);
});



/* ANGULAR x waypoints.js x d3.js */

var app = angular.module('app', ['ngAnimate']);

app.controller('mainCtrl', function ($scope, $http) {

    /* WORK */

    $http.get(url)
            .success(function (data) {
                $scope.skills = data.nodes;
            });

    $scope.boxes = [{
            name: 'HealthPilot',
            image: 'assets/img/hp.png',
            role: 'AJAX, Back-end',
            heading: 'What is HealthPilot?',
            desc: "This is a project I've been working on in collaboration with my father-in-law since early 2018. The goal of this project is to make a foundation for quality improvement within the danish healthcare system.\n\
                    This web-application gives any patient the opportunity to rate and comment on the effectiveness, facilities, kindness, waiting time and overall experience with any healthcare institution around the country, while at the same time giving each institution the possibility to monitor and manage their own page within HealthPilot.\n\
                    HealthPilot is also made to give users an easy and manageable way to find the best place for any kind of treatment. Users are able to filter their search by the name of an institution, by city and by category. As the user is changing the search criteria a list and a map containing the search results updates live to fit the search criteria. It is then possible to order the search results by name, rating, distance or price.",
            myRole: "My job during this project has been mostly in the back-end along with front-end AJAX-functionality (live updates, no page reloads). \n\
                    Prior to this project I had very little experience with AJAX-technology, but due to the fact that it adds such a significant boost to the workflow and the overall user-experience, it was neccesary for me to get familiar with this technology.",
            link: 'https://healthpilot.dk'
        }, {
            name: 'Tinas Klip & Krøl',
            image: 'assets/img/tk.svg',
            role: 'Design, front-end, back-end',
            heading: 'Mobile hairdresser',
            desc: "This is a website I built for a mobile hairdresser. The primary purpose of this website was to have a place of reference where a gallery of past work could be found, along with prices and contact information.",
            myRole: "This is an ongoing solo project for me. This site is updated, as well as given a redesign approximately once a year. The page is currently run entirely through AngularJS, which results in a great user-experience, but also includes the downside of poor SEO (Search Engine Optimization).",
            link: "https://tinasklip.dk"
        }, {
            name: 'BoligPortal (prototype)',
            image: 'assets/img/boligportal.svg',
            role: 'Design, front-end, back-end',
            heading: 'BoligPortal (HousingPortal)',
            desc: "This website is a tool for finding, selling, renting or buying apartments, houses or rooms. It is a yet unfinished project that I have been working on by myself in my sparetime. The purpose of this project was primarily the practice of programming a moderately complex web-application run with pure AJAX and with a lot of back-end, as well as to showcase my programming ability when the project is finished.",
            myRole: "",
            link: "http://boligportal.webnation.dk/"
        }
    ];


    $scope.selected = [];
    $scope.selectBox = function (item, position) {
        $('html, body').css("overflow-y", "hidden");
        $('#nav').addClass("disable-nav");
        $('.navlink a').attr("href", "javascript: void(0)");
        $scope.selected = [{
                item: item,
                position: position
            }];
        $scope.$apply();
    };
    $scope.clearSelection = function () {
        $('html, body').css("overflow-y", "auto");
        $('#nav').removeClass("disable-nav");
        // Reset all nav link hrefs
        $('.navlinks .navlink:first-child a').attr("href", "#home");
        $('.navlinks .navlink:nth-child(2) a').attr("href", "#about");
        $('.navlinks .navlink:nth-child(3) a').attr("href", "#mywork");
        $('.navlinks .navlink:nth-child(4) a').attr("href", "#contact");
        $scope.selected = [];
    };



    // Mobile nav
    $('.menu-icon-toggle').on('click', function (e) {
        $('body').toggleClass('open');
        $('html').toggleClass('stopScrolling');
        $scope.clearSelection();
        e.preventDefault();
        $scope.$apply();
    });
    $('.mobileNavlink').on('click', function (e) {
        $('body').toggleClass('open');
        $('html').toggleClass('stopScrolling');
    });


    // Send contact form
    $scope.contact_me = function (name, email, message) {
        $http.post("assets/php/send_mail.php", {
            'name': name,
            'email': email,
            'message': message
        }).success(function (response) {

            $scope.response_bin = response;

            if (response == 1) {
                $scope.response = "Your email has been sent successfully, and I will get back to you as soon as possible!";
                $scope.response_color = "#28a745";
            } else {
                $scope.response = "Oops... Something broke! Please try again later.";
                $scope.response_color = "#dc3545";
            }

            $scope.name = $scope.email = $scope.msg = '';
        });
    };

});

app.directive('box', function () {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            onSelect: "=",
            item: "="
        },
        controllerAs: 'box',
        controller: function () {
            var box = this;

            box.goFullscreen = function (e) {
                box.onSelect(box.item, e.target.getBoundingClientRect());
            };
        },
        link: function (scope, element) {
            element.bind('click', scope.box.goFullscreen);
            element.css({
                'background-image': 'url(' + scope.box.item.image + ')'
            });
        }
    };
});

app.directive('bigBox', function ($timeout) {
    return {
        restrict: 'AE',
        scope: {},
        bindToController: {
            position: "=",
            selected: "=",
            onSelect: "="
        },
        controllerAs: 'box',
        controller: function () {
            var box = this;
        },
        link: function (scope, element) {
            var css = {};
            for (var key in scope.box.position) {
                css[key] = scope.box.position[key] + 'px';
            }

            element.css(css);

            $timeout(function () {
                element.css({
                    top: '50%',
                    left: '10%'
                });
                element.addClass('image-out');
            }, 200);

            $timeout(function () {
                element.css({
                    width: '80%',
                    height: '100%'
                });
            }, 500);

            $timeout(function () {
                element.addClass('show');
            }, 800);
        }
    };
});