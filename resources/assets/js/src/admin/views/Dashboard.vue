<template>
    <div class="row" id="app" >
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <router-link to="/categories">
                <div class="dashboard-stat blue-madison">
                    <div class="visual">
                        <i class="fa fa-comments"></i>
                    </div>
                    <div class="details">
                        <div class="number">

                        </div>

                        <div class="desc">
                            Manage Category
                        </div>

                    </div>

                </div>


            </router-link>

        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <router-link to="/products">
                <div class="dashboard-stat red-intense">
                    <div class="visual">
                        <i class="fa fa-bar-chart-o"></i>
                    </div>
                    <div class="details">
                        <div class="number">

                        </div>

                        <div class="desc">

                            Manage Products
                        </div>
                    </div>
                </div>


            </router-link>

        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <router-link to="/orders">
                <div class="dashboard-stat green-haze">
                    <div class="visual">
                        <i class="fa fa-shopping-cart"></i>
                    </div>
                    <div class="details">
                        <div class="number">

                        </div>

                        <div class="desc">
                            Manage Orders
                        </div>
                    </div>
                </div>

            </router-link>

        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">

            <router-link to="/users">
                <div class="dashboard-stat purple-plum">
                    <div class="visual">
                        <i class="fa fa-globe"></i>
                    </div>
                    <div class="details">
                        <div class="number">

                        </div>

                        <div class="desc">
                            Manage Users
                        </div>
                    </div>
                </div>

            </router-link>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>