<template>
  <!--<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="services-caption text-center mb-30">
      <div class="service-icon">
        <i class="flaticon-healthcare-and-medical"></i>
      </div>
      <div class="service-cap">
        <h4><a href="#">{{ user.name }}</a></h4>
        <p>{{user.phone}}, {{user.email}}</p>
        <p>{{user.website}}</p>
      </div>
    </div>
  </div>-->

  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
    <div class="single-team mb-80 text-center">
      <div class="team-img">
        <img src="static/img/gallery/team1.png" alt="" height="400px">
      </div>
      <div class="team-caption">
        <span>{{ user.name }}</span>
        <span>{{user.phone}}, {{user.email}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// static/img/gallery/team1.png
// static/img/gallery/team2.png
// static/img/gallery/team3.png

export default {
  name : 'user-profile',
  props : ['user']
}
</script>
