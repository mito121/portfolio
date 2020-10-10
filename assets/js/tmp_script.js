// Particles.js
//    particlesJS.load('particles', 'assets/js/particles.json', function () {

particlesJS.load('particles', 'assets/js/particles-2.json', function () {

    //    $("#particles").css("background-color", "#1d1d1d");

});

$(document).ready(function () {
    // Debounce
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }


    // Smooth scrolling for all links
    $("a").on('click', function (event) {
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
    });

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

    // Check URL params
//    var urlString = window.location.hash;
//    var params = urlString.split("?").pop();
//    var decoded_msg = atob("WW91ciBlbWFpbCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseSwgYW5kIEkgd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZSE=");
////    var decoded_msg = atob(params);
//    
//    console.log(decoded_msg);

});


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

    // Scroll to next or prev section on keypress
//        $(document).keydown(function (e) {
//            if (e.which === 38 || e.which === 33 || e.which === 40 || e.which === 34) {
//
//                e.preventDefault();
//
//                if (e.which === 38 || e.which === 33) { // Up
//                    let prevSection = $currentSection - 1;
//
//                    if ($currentSection !== 1) {
//                        $("#nav .navlink:nth-child(" + prevSection + ") a").click();
//                    }
//
//                } else if (e.which === 40 || e.which === 34) { // Down
//
//                    let nextSection = $currentSection + 1;
//
//                    if ($currentSection !== 4) {
//                        $("#nav .navlink:nth-child(" + nextSection + ") a").click();
//                    } else {
//                        $("#nav .navlink:nth-child(1) a").click();
//                    }
//                }
//            }
//
//        });

    console.log($currentSection);

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
        $("#about .flex-c .w50:last-of-type").addClass("animate-right");
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
const url = 'http://webnation.dk/portv2/assets/json/skills.json';

d3.json(url, (error, data) => {
    if (error)
        throw error
    const nodes = data.nodes;
    const links = data.links;

    // add links (lines):
    const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line") // line to connect nodes
            .attr("stroke-width", 1) // line width

    // use a g element to contain a rect and an image for every node
    const nodeWrapper = svg.append("g")
            .attr("class", "nodes")
            .selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "nodeWrapper");

    // add nodes (circles)
    const node = nodeWrapper
            .append("clipPath")
            .attr("id", d => d.img)
            .append("circle")
            .attr("id", d => d.id)
            .attr("class", "node")
            .attr("cx", 21)
            .attr("cy", 22)
            .attr("r", 22.5);

    // add images
    nodeWrapper
            .append("image")
            .attr("href", d => "assets/img/" + d.img)
            .attr("clipPath", d => "url(#" + d.img + ")")
            .attr("height", nodeHeight)
            .attr("width", nodeWidth);

    // node dragging:
    nodeWrapper
            .call(d3.drag()
                    .on("start", d => {
                        // heat the simulation
                        if (!d3.event.active)
                            simulation.alphaTarget(0.2).restart()
                        // set fixed x and y coordinates
                        d.fx = d.x
                        d.fy = d.y
                    })
                    .on("drag", d => {
                        // by fixing its position, this disables the forces acting on the node
                        d.fx = d3.event.x
                        d.fy = d3.event.y
                    })
                    .on("end", d => {
                        // stop simulation:
                        if (!d3.event.active)
                            simulation.alphaTarget(0)
                        // reactivate the force on the node
                        d.fx = null
                        d.fy = null
                    })
                    );

    // tooltip div
    const tooltip = d3.select('#skills-wrapper').append("div")
            .classed("tooltip", true)
            .style("opacity", 0); // start invisible
    nodeWrapper
            .on("mouseover", function (d) {
                tooltip.transition()
                        .duration(300)
                        .style("opacity", 1) // show the tooltip
                tooltip.html(d.skill)
                        .style("left", (d3.event.pageX - d3.select('.tooltip').node().offsetWidth - 5) + "px")
                        .style("top", (d3.event.pageY - d3.select('.tooltip').node().offsetHeight) + "px");
            })
            .on("mouseleave", function (d) {
                tooltip.transition()
                        .duration(200)
                        .style("opacity", 0);
            });

    simulation
            .nodes(nodes)
            .on("tick", () => {
                // set each node's position on each tick of the simulation
                nodeWrapper.attr("transform", d => "translate(" + getNodeXCoordinate(d.x) + "," + getNodeYCoordinate(d.y) + ")")
                // set start (x1,y1) and point (x2,y2) coordinate of each link on each tick of the simulation
                link.attr("x1", d => getNodeXCoordinate(d.source.x + nodeWidth / 2))
                link.attr("y1", d => getNodeYCoordinate(d.source.y + nodeHeight / 2))
                link.attr("x2", d => getNodeXCoordinate(d.target.x + nodeWidth / 2))
                link.attr("y2", d => getNodeYCoordinate(d.target.y + nodeHeight / 2))
            });

    // pass the links to the link force
    simulation
            .force("link")
            .links(links)
            .distance(45);
});



/* ANGULAR x waypoints.js x d3.js */

var app = angular.module('app', ['ngAnimate']);

app.controller('mainCtrl', function ($scope) {

    /* WORK */

    $scope.boxes = [{
            name: 'HealthPilot',
            image: 'assets/img/hp.png',
            role: 'AJAX, Back-end',
            heading: 'Lorem ipsum dolor 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum perferendis, ullam minus. Illo ad aliquid ab magni, enim nesciunt at consequuntur dolores explicabo nisi. Dolor, reiciendis suscipit alias nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequatur, sit saepe reprehenderit nisi dolorem, voluptates amet quos ab assumenda non id accusamus, dicta soluta laboriosam voluptas fuga sint deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis minus tenetur ex molestias qui possimus sit facilis dolorum suscipit. Cumque, aperiam inventore nobis? Veniam voluptatibus sapiente ea, voluptate dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta ducimus ratione reiciendis officia odit omnis distinctio, eveniet et modi fuga nisi voluptatem nihil aliquam ex pariatur possimus repudiandae vero?'
        }, {
            name: 'Tinas Klip & Krøl',
            image: 'assets/img/tk.svg',
            role: 'Design, front-end, back-end',
            heading: 'Lorem ipsum dolor 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum perferendis, ullam minus. Illo ad aliquid ab magni, enim nesciunt at consequuntur dolores explicabo nisi. Dolor, reiciendis suscipit alias nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequatur, sit saepe reprehenderit nisi dolorem, voluptates amet quos ab assumenda non id accusamus, dicta soluta laboriosam voluptas fuga sint deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis minus tenetur ex molestias qui possimus sit facilis dolorum suscipit. Cumque, aperiam inventore nobis? Veniam voluptatibus sapiente ea, voluptate dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta ducimus ratione reiciendis officia odit omnis distinctio, eveniet et modi fuga nisi voluptatem nihil aliquam ex pariatur possimus repudiandae vero?'
        }, {
            name: 'BoligPortalen',
            image: 'assets/img/angularjs.png',
            role: 'Design, front-end, back-end',
            heading: 'Lorem ipsum dolor 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum perferendis, ullam minus. Illo ad aliquid ab magni, enim nesciunt at consequuntur dolores explicabo nisi. Dolor, reiciendis suscipit alias nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus consequatur, sit saepe reprehenderit nisi dolorem, voluptates amet quos ab assumenda non id accusamus, dicta soluta laboriosam voluptas fuga sint deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis minus tenetur ex molestias qui possimus sit facilis dolorum suscipit. Cumque, aperiam inventore nobis? Veniam voluptatibus sapiente ea, voluptate dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta ducimus ratione reiciendis officia odit omnis distinctio, eveniet et modi fuga nisi voluptatem nihil aliquam ex pariatur possimus repudiandae vero?'
        }
    ];


    $scope.selected = [];
    $scope.selectBox = function (item, position) {
        $('body').css("overflow-y", "hidden");
        $('#nav').addClass("disable-nav");
        $('.navlink a').attr("href", "javascript: void(0)");
        $scope.selected = [{
                item: item,
                position: position
            }];
        $scope.$apply();
    };
    $scope.clearSelection = function () {
        $('body').css("overflow-y", "auto");
        $('#nav').removeClass("disable-nav");
        // Reset all nav link hrefs
        $('.navlinks .navlink:first-child a').attr("href", "#home");
        $('.navlinks .navlink:nth-child(2) a').attr("href", "#about");
        $('.navlinks .navlink:nth-child(3) a').attr("href", "#mywork");
        $('.navlinks .navlink:nth-child(4) a').attr("href", "#contact");
        $scope.selected = [];
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