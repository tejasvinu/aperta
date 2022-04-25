import React from 'react';
import './Timeline.css';
import './Profile2';
import { BrowserRouter, NavLink } from "react-router-dom";

function Timeline(){
    return (<p>


<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.css"/>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800;900&display=swap"/>
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>



		
		<div class="main-panel">
			<div class="container">


				<div class="row">
					<div class="col-md-4 grid-margin stretch-card">
						<div class="card">
							<div class="profile-card">

								<div class="profile-header">

									<div class="cover-image">
										<img src="https://cdn.pixabay.com/photo/2019/10/19/14/16/away-4561518_960_720.jpg" class="img img-fluid"/>
									</div>
									<div class="user-image">
										<img src="https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img "/>
									</div>
								</div>

								<div class="profile-content">
									<div class="profile-name">Santosh Ghimire</div>
									<div class="profile-designation">Webdeveloper</div>
									<p class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
									<ul class="profile-info-list">
										<a href="" class="profile-info-list-item"><i class="mdi mdi-eye"></i>Timeline</a>
										<a href="" class="profile-info-list-item"><i class="mdi mdi-bookmark-check"></i>Saved</a>
										<a href="" class="profile-info-list-item"><i class="mdi mdi-movie"></i>Medias</a>
										<a href="/" class="profile-info-list-item"><i class="mdi mdi-account"></i>About</a>

                  

									</ul>
								</div>
							</div>
						</div>
					</div>

                   

       <div class="col-12 col-lg-7 order-lg-1">
        {/* <div class="py-4">
          <div class="input-group input-group-lg"><span class="input-group-text bg-light border-0" id="search-icon">
                <i data-feather="search"></i></span>
            <input class="form-control bg-light border-0" type="text" placeholder="Search" aria-label="Search" aria-describedby="search-icon"/>
          </div>
        </div> */}
        <section class="py-4">
          <h1 class="h3">Timeline</h1>
          <div class="mb-4 py-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                <div class="avatar mr-3"><img class="avatar-img" src="https://i.ibb.co/3TPnWpZ/people-1.jpg" alt="avatar"/></div>
                <div>
                  <h2 class="h6 mb-0">Jane Doe</h2>
                  <p class="small text-muted mb-0">5 min ago</p>
                </div>
              </div>
              <button class="btn btn-icon btn-text-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <i data-feather="more-vertical"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a class="dropdown-item" href="#">Save</a></li>
                <li><a class="dropdown-item" href="#">Unsubscribe</a></li>
              </ul>
            </div><img class="rounded w-100 mt-3" src="https://i.ibb.co/RYbgG6K/mango-blue.jpg" alt="feed"/>
            <div class="mt-3">
              <h4 class="h5">Lorem ipsum dolor sit amet</h4>
              <p class="text-muted mb-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-text-dark d-flex align-items-center px-1" type="button">
                  <i class="mr-1" data-feather="heart"></i>432
              </button>
              <button class="btn btn-icon btn-text-dark" type="button">
                  <i data-feather="share-2"></i>
              </button>
            </div>
          </div>
          <div class="mb-4 py-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                <div class="avatar mr-3"><img class="avatar-img" src="https://i.ibb.co/vqNVTz1/people-2.jpg" alt="avatar"/></div>
                <div>
                  <h2 class="h6 mb-0">Dog Doe</h2>
                  <p class="small text-muted mb-0">15 min ago</p>
                </div>
              </div>
              <button class="btn btn-icon btn-text-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <i data-feather="more-vertical"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a class="dropdown-item" href="#">Save</a></li>
                <li><a class="dropdown-item" href="#">Unsubscribe</a></li>
              </ul>
            </div><img class="rounded w-100 mt-3" src="https://i.ibb.co/RChWN81/fruits-rose.jpg" alt="feed"/>
            <div class="mt-3">
              <h4 class="h5">Lorem ipsum dolor sit amet</h4>
              <p class="text-muted mb-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-text-dark d-flex align-items-center px-1" type="button">
                  <i class="mr-1" data-feather="heart"></i>432
              </button>
              <button class="btn btn-icon btn-text-dark" type="button">
                  <i data-feather="share-2"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
</div> 


<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
<script src="https://unpkg.com/feather-icons"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>


</div>
    </p>)
}


export default Timeline;