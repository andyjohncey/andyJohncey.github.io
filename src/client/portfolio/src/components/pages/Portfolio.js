import React from "react";
import './App.css';

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
        </div>
        <div class="row align-items-end">
            <div class="col-sm">
                <div id="project-1">
                    <div class="text-center">
                        <img src="./assets/images/ReadMe book search app.png" class="rounded" alt="book search app"
                            href="https://jmacr0.github.io/project_one/" onclick=""></img>
                        <div class="centered">Project 1 Book Search App</div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="text-center">
                        <img src="./assets/images/Five star reviews.JPG" class="rounded" alt="profile picture"
                            href="https://fivestarhotels.herokuapp.com/index.html" onclick=""></img>
                        <div class="centered">Project 2 Hotel Reviews</div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="text-center">
                        <img src="./assets/images/random password generation1a.png" class="rounded"
                            alt="random password generation" href="https://andyjohncey.github.io/homework-03-js/" onclick=""></img>
                        <div class="centered">Random Password Generation</div>
                    </div>
                </div>
            </div>
            <br>
                <div class="row align-items-end">
                    <div class="col-sm">
                        <div class="text-center">
                            <img src="./assets/images/day planner.png" class="rounded" alt="day planner" href=""></img>
                            <div class="centered">Day Planner</div>
                        </div>
                    </div>
                    {/* <div class="col-sm">
                                                    <div class="text-center">
                                                        <img src="./assets/images/profile_picture_andrew.jpg" class="rounded" alt="profile picture"></img>
                                                        <div class="centered">Project 5</div>
                                                    </div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="text-center">
                                                        <img src="./assets/images/profile_picture_andrew.jpg" class="rounded" alt="profile picture"></img>
                                                        <div class="centered">Project 6</div>
                                                    </div>
                                                </div>  */}
                </div>


                <div class="footer mt-auto py-3">
                    <div class="container-2">
                        <span class="text">Copyright@ Andy Johncey</span>
                    </div>
                </div>
              
                </div>
        </div >
    );
}

export default Portfolio;
