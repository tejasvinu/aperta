import React from "react";
//import  styles
import './styles/app.scss';
//import components
import Header from './components/header';
import Footer from './components/footer';
import Sign from './components/sign';
import Profile from './components/profile';
import Navbar from './components/navbar';
//import jquery
import $ from 'jquery';


function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $("body");
  var padding = 0.75;
  var pages = Object.keys($(".page"))
    .filter((section) => Number(section) + 1)
    .map((section) => Number(section) + 1);

  pages.map((page) => {
    if (offset > windowHeight * (page - 2 + padding)) {
      $body.removeClass().addClass("page-" + page);
    }
  });
}

pagination();

$(document).on("scroll", pagination);

$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

function App() {
  return (
  <>
  <div className="App">
    <header><Navbar/></header>    
    <section class="page" id="page1">
      <Profile/>
    </section>

    <section class="page" id="page2">
      <Sign/>
    </section>

    <ul id="pagination">
      <li><a href="#page1"></a></li>
      <li><a href="#page2"></a></li>
    </ul>
  </div>
  </>
  );
}

export default App;
