import React from 'react';
import '../styles/Profile.css';
import { BrowserRouter, NavLink } from "react-router-dom";
export const Profile = (props) => {
    return (<p>


<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.css"/>

		
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
										<img src="https://scontent.fslv1-1.fna.fbcdn.net/v/t1.0-1/p240x240/71764978_543119796448430_5969446522109034496_n.jpg?_nc_cat=105&_nc_oc=AQnoaTQx8fxeyzbIbtQyvZXghFdEQl-ds6NQr_13xAXuGmWnigS1zJHTuH8sKv5e9-TSN3KRAuptCtwM-LlwxidP&_nc_ht=scontent.fslv1-1.fna&oh=52752a53e6b91980d3f9bf227064a95d&oe=5E5A25B9" class="img "/>
									</div>
								</div>

								<div class="profile-content">
									<div class="profile-name">Santosh Ghimire</div>
									<div class="profile-designation">Webdeveloper</div>
									<p class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
									<ul class="profile-info-list">
									<NavLink className="profile-info-list-item" to="/Timeline	">
                  					<span className="mdi mdi-eye"></span>
									  Timeline
            						</NavLink>
									
										<a href="" class="profile-info-list-item"><i class="mdi mdi-bookmark-check"></i>Saved</a>
										<a href="" class="profile-info-list-item"><i class="mdi mdi-movie"></i>Medias</a>
										
            		
            
										<a href='' class="profile-info-list-item"><i class="mdi mdi-account"></i>About</a>

									</ul>
								</div>
							</div>
						</div>
					</div>

					 <div class="col-md-8 grid-margin stretch-card">
						<div class="card">
							<div class="card-body">
								<p class="card-title font-weight-bold">About</p>
								<hr/>
								<p class="card-description">User Information</p>
								<ul class="about">
									<li class="about-items"><i class="mdi mdi-account icon-sm "></i><span class="about-item-name">Name:</span><span class="about-item-detail">Santosh Ghimire</span><a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-mail-ru icon-sm "></i><span class="about-item-name">username:</span><span class="about-item-detail">santoshghimire</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-lock-outline icon-sm "></i><span class="about-item-name">Password:</span><span class="about-item-detail">**********</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-format-align-left icon-sm "></i><span class="about-item-name">Bio:</span><span class="about-item-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto totam, nemo quidem delectus dolores vero porro inventore perferendis minus perspiciatis.</span> <a href="" class="about-item-edit">Edit</a></li>
									
                       <li class="about-items"><i class="mdi mdi-trophy-variant-outline icon-sm "></i><span class="about-item-name">Badges:</span><span class="about-item-detail">
                       <button type="button" class="btn btn-success btn-rounded btn-icon">
                        <i class="mdi mdi-star text-white"></i>
                      </button>  
                        <button type="button" class="btn btn-info btn-rounded btn-icon">
                        <i class="mdi mdi-check text-white"></i>
                      </button>
                       <button type="button" class="btn btn-danger btn-rounded btn-icon">
                        <i class="mdi mdi-check text-white"></i>
                      </button>
                      </span> <a href="" class="about-item-edit">View</a></li>
                      
								</ul>
								<p class="card-description">Contact Information</p>
								<ul class="about">
									<li class="about-items"><i class="mdi mdi-phone icon-sm "></i><span class="about-item-name">Phone:</span><span class="about-item-detail">+9779861106179</span><a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-map-marker icon-sm "></i><span class="about-item-name">Address:</span><span class="about-item-detail">254 National Highway , Hisar India</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-email-outline icon-sm "></i><span class="about-item-name">Email:</span><span class="about-item-detail"><a href="">reasonghimire706@gmail.com</a></span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-web icon-sm "></i><span class="about-item-name">Site:</span><span class="about-item-detail"><a href="google.com">www.google.com</a></span> <a href="" class="about-item-edit">Edit</a></li>
								</ul>
								<p class="card-description">Basic Information</p>
								<ul class="about">
									<li class="about-items"><i class="mdi mdi-cake icon-sm "></i><span class="about-item-name">Birthday:</span><span class="about-item-detail">Aug 3 , 1998</span><a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-account icon-sm "></i><span class="about-item-name">Gender:</span><span class="about-item-detail">Male</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-clipboard-account icon-sm "></i><span class="about-item-name">Profession:</span><span class="about-item-detail">Student</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-water icon-sm "></i><span class="about-item-name">Blood Group:</span><span class="about-item-detail">AB+</span> <a href="" class="about-item-edit">Edit</a></li>
									<li class="about-items"><i class="mdi mdi-human-male-female icon-sm "></i><span class="about-item-name">Relationship Status:</span><span class="about-item-detail">Single</span> <a href="" class="about-item-edit">Edit</a></li>
								</ul> 

					</div>

				</div>


            </div>
            </div>

			</div>                       

</div>
    </p>)
}

export default Profile;