<template>
    <div>
        <dashboard-link></dashboard-link>
        <!--form-->
        <div class="row">
            <div class="col-md-12">
                <div class="portlet box blue" id="form_wizard_1">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-plus"></i> Add Products
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
                                            <h3 class="block">Provide product details</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Product Name <span class="required">
													* </span>
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" class="form-control" name="product_name"/>
														<span class="help-block">
														Provide product name </span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Category <span class="required">
													* </span>
                                                </label>
                                                <div class="col-md-4">
                                                    <select name="category_id" id="" class="form-control">
                                                        <option value="1">Cat One</option>
                                                        <option value="2">Cat Two</option>
                                                    </select>
                                                    <span class="help-block">
														Select the category </span>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="form-actions">
                                    <div class="row">
                                        <div class="col-md-offset-3 col-md-9">

                                            <a href="javascript:;" class="btn green button-submit">
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
                            <i class="fa fa-comments"></i>Contextual Rows
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
                                        Class Name
                                    </th>
                                    <th>
                                        Column
                                    </th>
                                    <th>
                                        Column
                                    </th>
                                    <th>
                                        Column
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="active">
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        active
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                </tr>
                                <tr class="success">
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        success
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                </tr>
                                <tr class="warning">
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        warning
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                </tr>
                                <tr class="danger">
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        danger
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
                                    </td>
                                    <td>
                                        Column heading
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
    export default {}
</script>