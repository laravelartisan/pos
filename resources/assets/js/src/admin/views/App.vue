<template>
    <div>


        <main-header></main-header>

        <div class="page-container">

            <sidebar></sidebar>

            <div class="page-content-wrapper">
                <div class="page-content" >

                    <breadcrumb></breadcrumb>
                    <page-title></page-title>

                    <router-view>

                    </router-view>

                </div>
            </div>

        </div>

        <div class="page-footer">
            <div class="page-footer-inner">
                2014 &copy; Metronic by keenthemes.
            </div>
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
    </div>

</template>

<script>

    import MainHeader from '../partials/Header.vue';
    import Sidebar from '../partials/Sidebar.vue';
    import Breadcrumb from '../partials/Breadcrumb.vue';
    import PageTitle from '../partials/PageTitle.vue';



  export default {

      components:{
          MainHeader,
          Sidebar,
          Breadcrumb,
          PageTitle
      }

  };
</script>
