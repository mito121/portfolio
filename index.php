<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio • Rasmus Andersen</title>
    <!-- ### Styles ### -->
    <!-- favicon -->
    <link rel="icon" href="assets/img/portfolioLogo.png">
    <!-- Fontawesome -->
    <link href="assets/fontawesome/css/all.css" rel="stylesheet" type="text/css" />
    <!-- Custom -->
    <link href="assets/css/style.css" rel="stylesheet" type="text/css" />

    <!-- ### Scripts ### -->
    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.1.0.js" defer></script>
    <!-- waypoints -->
    <script src="assets/js/jquery.waypoints.min.js" defer></script>
    <!-- lodash for throttle -->
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js" defer></script>
    <!-- d3.js -->
    <script src="https://d3js.org/d3.v6.min.js" defer></script>
    <!-- d3-force -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js" defer></script>
    <!-- particles.js -->
    <script src="assets/js/particles.js" type="text/javascript" defer></script>
    <!-- angularjs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js" defer></script>
    <!-- ng-animate -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min.js" defer></script>
    <!-- custom javascript w/ ng-controller -->
    <script src="assets/js/script.js" defer></script>
</head>

<body ng-app="app" ng-controller="mainCtrl" id="app">
    <!-- Navigation -->
    <div id="nav">
        <a href="https://webnation.dk/">
            <svg id="logo" data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.22 337.94">
                <path class="logo-svg-1"
                    d="M0,96.32v-95s154-3,172.49-.07C218.91,8.71,238.87,26,250.3,44.9,261.37,59.93,261.76,67,264,77.19A127.81,127.81,0,0,1,266.7,96.4c.22,4,.39,7.8.73,10.68.5,4.23-.18,17.32-3.55,32.63-4.45,20.23-12,32.41-13.33,34.62-4.22,7-12.78,15.82-22.67,22.75s-18,10.29-28.39,11.67c-14.82,2-49.16,4.09-49.16,4.09L90.2,165.37s43.4.43,57.76-1.06c12-1.24,36.9-7,45.63-15.3,7.3-6.92,15.22-27.39,14.77-37.45s-10.23-29.8-17.94-36.39C182,68,159,63,148,62c-22-2-88.35-.53-88.35-.53v82.29Z"
                    transform="translate(0 0.03)" />
                <path class="logo-svg-2"
                    d="M0,116.91v221H59.61V311l107.08.53,33.75,26.37h91.78ZM57,264.07V230.82l50.06,33.23Z"
                    transform="translate(0 0.03)" />
            </svg>
        </a>

        <div class="navlinks">
            <div class="navlink">
                <a href="#home">
                    <svg style="width:23px;height:23px" viewBox="0 0 24 24">
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </a>
            </div>

            <div class="navlink">
                <a href="#about">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path
                            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                </a>
            </div>

            <div class="navlink">
                <a href="#mywork">
                    <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                        <path
                            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                    </svg>
                </a>
            </div>

            <div class="navlink">
                <a href="#contact">
                    <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                        <path
                            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                </a>
            </div>

        </div>

        <ul id="navSocials">
            <li>
                <a href="https://www.linkedin.com/in/rasmus-andersen-0a050211a/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://gitlab.com/mito121" target="_blank">
                    <i class="fab fa-gitlab"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/mito121" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
            </li>
        </ul>

        <div id="mobileNav">
            <nav class="menu-navigation">
                <a href="#" class="menu-icon-toggle"><span></span></a>
                <i class="menu-background top"></i>
                <i class="menu-background middle"></i>
                <i class="menu-background bottom"></i>
                <ul class="menu">
                    <li><a class="mobileNavlink" href="#home">Home</a></li>
                    <li><a class="mobileNavlink" href="#about">About</a></li>
                    <li><a class="mobileNavlink" href="#mywork">My Work</a></li>
                    <li><a class="mobileNavlink" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="global-wrapper">
        <!-- Section 1 -->
        <section id="home">
            <div id="theTop"></div>
            <div id="particles"></div>

            <div class="entry">
                <div class="flex">
                    <div id="entry-primary">
                        <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span>
                        <span>I</span><span>'</span><span>m</span>
                        <span>R</span><span>a</span><span>s</span><span>m</span><span>u</span><span>s</span>
                    </div>
                </div>

                <span id="entry-secondary">
                    <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>e</span><span>n</span><span>d</span><span>,
                    </span><span>B</span><span>a</span><span>c</span><span>k</span><span>-</span><span>e</span><span>n</span><span>d</span><span>,
                    </span><span>U</span><span>I</span><span>/</span><span>U</span><span>X</span><span>,
                    </span><span>W</span><span>o</span><span>r</span><span>d</span><span>P</span><span>r</span><span>e</span><span>s</span><span>s</span>
                </span>
            </div>

            <div class="nextSection" id="firstScroll">
                <a class="arrow-wrapper">
                    <span class="arrow secondary-first-arrow next"></span>
                </a>
            </div>
        </section>


        <!-- Section 2 -->
        <section id="about">
            <div class="sectionHeader mobile-padding">
                <h1>About</h1>
                <hr>
            </div>

            <div class="flex-c">
                <div class="w50">
                    <div class="selfie">
                        <div class="color"></div>
                    </div>
                    <img id="mobile-selfie" src="assets/img/selfie-nobg.png" alt="Me" />
                </div>

                <div class="w50">
                    <div id="aboutMe">
                        <div class="aboutSection">
                            <h3>Hi!<span class="wave">👋</span></h3>
                            <p>
                                My name is Rasmus Andersen. I'm 26 years old, I live in Denmark and I have a deep
                                passion for making fast, flexible and user-friendly webapplications.</p>
                            <p>
                                I'm currently studying for a bachelor degree in web development at University College
                                Lillebælt (UCL), in pursuit of the ability to provide the best possible user-experience
                                through my work - primarily on the web.
                            </p>
                        </div>

                        <div id="skills-wrapper" class="aboutSection">
                            <span>Tools I've grown familiar with, when building websites include the following:
                                <span class="desktop-only">
                                    (mouseover for more info, or even pull if you
                                    dare!)
                                </span>
                            </span>
                            <svg id="skills-container"></svg>
                            <div id="mobile-skills">
                                <div ng-repeat="skill in skills" ng-class="{ps: skill.color == '#001d26'}"
                                    style="border-color: {{skill.color}}; background-color: {{skill.color}};"
                                    class="mobile-skill">
                                    {{skill.skill}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3 -->
        <section id="mywork">

            <div class="sectionHeader">
                <h1>My Work</h1>
                <hr>
            </div>

            <div class="container" ng-class="{'no-scroll': selected.length}">
                <div class="page">
                    <div class="grid">

                        <div class="grid-item" ng-repeat="item in boxes">
                            <box class="box" item="item" on-select="selectBox"
                                ng-class="{'selected': selected[0].item.name == item.name}">
                                <div class="overlay">
                                    <div class="overlayHeader">{{item.name}}</div>
                                    <div class="overlayText">{{item.role}}</div>
                                </div>
                            </box>
                        </div>

                    </div>
                </div>
                <div class="fullscreen-background top-up" ng-show="selected.length"
                    ng-style="{'background-image': 'url(' + selected[0].item.image + ')'}"></div>
                <div class="scroller" ng-show="selected.length">
                    <a class="close-button" ng-click="clearSelection()">
                        <i class="fas fa-times"></i>
                    </a>
                    <h1>{{selected[0].item.name}}</h1>
                    <div big-box ng-repeat="item in selected" class="box on-top" position="item.position"
                        selected="item.item">
                        <img ng-src="{{item.item.image}}" alt="" />
                        <div class="content">
                            <h2>{{selected[0].item.heading}}</h2>
                            <p>{{selected[0].item.desc}}</p>
                            <br>
                            <h2 ng-if="selected[0].item.myRole">My role</h2>
                            <p>{{selected[0].item.myRole}}</p>
                            <a target="_blank" href="{{selected[0].item.link}}">View result of this project</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Section 4 -->
        <section id="contact">
            <div class="sectionHeader mobile-padding">
                <h1 class="white">Contact</h1>
                <hr class="bg-white">
                <p class="highlight">Have a question or want to work together?</p>
            </div>

            <div class="contactFormWrapper">
                <div ng-cloak id="server_msg" style="background:{{response_color}};" ng-show="response_bin !== ''">
                    {{response}}</div>
                <form ng-submit="contact_me(name, email, msg)" autocomplete="off">
                    <div class="contactInput">
                        <label for="contactName">Name</label>
                        <input type="text" required autocomplete="off" placeholder="Enter your name" name="name"
                            ng-model="name" id="contactName">
                    </div>

                    <div class="contactInput">
                        <label for="contactEmail">Email</label>
                        <input type="email" autocomplete="off" required placeholder="Enter your email" name="email"
                            ng-model="email" id="contactEmail">
                    </div>

                    <div class="contactInput">
                        <label for="contactMsg">Message</label>
                        <textarea placeholder="Enter your message..." name="msg" required autocomplete="off"
                            id="contactMsg" ng-model="msg" rows="4" cols="50"></textarea>
                    </div>

                    <div class="contactInput">
                        <button type="submit" class="button">Send</button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Section controller arrows -->
        <div id="sectionCtrls">
            <!-- Next section -->
            <div class="prevSection">
                <a class="arrow-wrapper">
                    <span class="arrow secondary-first-arrow next"></span>
                </a>
            </div>
            <!-- Previous section -->
            <div class="nextSection">
                <a class="arrow-wrapper">
                    <span class="arrow primary-first-arrow next"></span>
                </a>
            </div>
        </div>

    </div> <!-- </global-wrapper> -->
</body>

</html>