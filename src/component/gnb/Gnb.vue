<template>
  <header>
    <!--? Header Start -->
    <div class="header-area header-transparent">
      <div class="main-header header-sticky">
        <div class="container-fluid">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10">
              <div class="menu-main d-flex align-items-center justify-content-end">
                <!-- Main-menu -->
                <div class="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <router-link to="/home">Home</router-link>
                      </li>
                      <li>
                        <router-link to="/users">User</router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!--
                <div class="header-right-btn f-right d-none d-lg-block ml-30">
                  <a href="from.html" class="btn header-btn">became a member</a>
                </div>
                -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </header>
</template>

<script>
export default {
  name : 'gnb'
}
</script>
