<template>
    <div>
        <dashboard-link></dashboard-link>

{{ categories }}
        <!--form-->
        <div class="row">
            <div class="col-md-12">
                <div class="portlet box blue" id="form_wizard_1">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-plus"></i> Add Category
                        </div>
                        <div class="tools hidden-xs">
                            <a href="javascript:;" class="collapse">
                            </a>

                            <a href="javascript:;" class="reload">
                            </a>
                            <a href="javascript:;" class="remove">
                            </a>
                        </div>
                    </div>
                    <div class="portlet-body form">
                        <form action="#" class="form-horizontal" id="submit_form" method="POST">
                            <div class="form-wizard">
                                <div class="form-body">

                                    <div class="tab-content">
                                        <div class="alert alert-danger display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            You have some form errors. Please check below.
                                        </div>
                                        <div class="alert alert-success display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            Your form validation is successful!
                                        </div>
                                        <div class="tab-pane active" id="tab1">
                                            <h3 class="block">Provide category details</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Category <span class="required">
													* </span>
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" class="form-control" v-model="categoryName"/>
														<span class="help-block">
														Provide category name </span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="form-actions">
                                    <div class="row">
                                        <div class="col-md-offset-3 col-md-9">

                                            <a href="javascript:;" class="btn green button-submit" @click.native = 'storeCategory'>
                                                Submit <i class="m-icon-swapright m-icon-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--table-->
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN SAMPLE TABLE PORTLET-->
                <div class="portlet box blue">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-list"></i>Category List
                        </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse">
                            </a>
                            <a href="javascript:;" class="reload">
                            </a>
                            <a href="javascript:;" class="remove">
                            </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="table-scrollable">
                            <table class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Category Name
                                    </th>
                                    <th>
                                        Action
                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr class="">
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        active
                                    </td>
                                    <td>
                                        <a href="javascript:;" class="btn default btn-xs purple">
                                            <i class="fa fa-edit"></i> Edit </a>
                                        <a href="javascript:;" class="btn default btn-xs black">
                                            <i class="fa fa-trash-o"></i> Delete </a>
                                    </td>

                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- END SAMPLE TABLE PORTLET-->
            </div>

        </div>
    </div>
</template>

<script>

    import Category from '../models/Category';

    export default {

        data(){
            return {

                categories: [],
                categoryName: ''
            }
        },
        methods: {

            storeCategory(){
                Category.store({category_name: this.categoryName}).then(response => {

                    this.categories = response;
                });
            }

        },

        created() {

        Category.init().then(response => {

            this.categories = response;
        });

        },

        watch: {

        }
    }
</script>