<html lang="en-US" ng-app="goalRecords">
    <head>
        <title>Laravel 5 AngularJS CRUD Example</title>

        <!-- Load Bootstrap CSS -->
      <!--  <link href="?= asset('css/bootstrap.min.css') ?>" rel="stylesheet"> -->
    </head>
    <body>
        <h2>Goals Database</h2>
        <div  ng-controller="GoalsController">

            <!-- Table-to-load-the-data Part -->
            <table class="table">
                <thead>

                    <tr>
                        <th>Id</th>
                        <th>Goal Name</th>
                        <th>Order ID</th>
                        <th>Due Date</th>
                        <th>Status ID</th>
                        <th>Life Area</th>
                        <th><button id="btn-add" class="btn btn-primary btn-xs" ng-click="toggle('add', 0)">Add New Goal</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="goal in goals">
                        <td>{{ goal.id }}</td>
                        <td>{{ goal.goal_name }}</td>
                        <td>{{ goal.goal_due_date }}</td>
                        <td>{{ goal.status_id }}</td>
                        <td>{{ goal.life_area }}</td>
                        <td>
                            <button class="btn btn-default btn-xs btn-detail" ng-click="toggle('edit', goal.id)">Edit</button>
                            <button class="btn btn-danger btn-xs btn-delete" ng-click="confirmDelete(goal.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- End of Table-to-load-the-data Part -->
            <!-- Modal (Pop up when detail button clicked) -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="myModalLabel">{{form_title}}</h4>
                        </div>
                        <div class="modal-body">
                            <form name="frmGoals" class="form-horizontal" novalidate="">

                                <div class="form-group error">
                                    <label for="inputEmail3" class="col-sm-3 control-label">Goal Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control has-error" id="goal_name" name="goal_name" placeholder="Fullname" value="{{name}}"
                                        ng-model="goal.goal_name" ng-required="true">
                                        <span class="help-inline"
                                        ng-show="frmGoals.name.$invalid && frmGoals.name.$touched">Goal Name field is required</span>
                                    </div>
                                </div>

                  <!--            <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-3 control-label">Email</label>
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" value="{{email}}"
                                        ng-model="employee.email" ng-required="true">
                                        <span class="help-inline"
                                        ng-show="frmEmployees.email.$invalid && frmEmployees.email.$touched">Valid Email field is required</span>
                                    </div>
                                  </div>

                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-3 control-label">Contact Number</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" value="{{contact_number}}"
                                        ng-model="employee.contact_number" ng-required="true">
                                    <span class="help-inline"
                                        ng-show="frmEmployees.contact_number.$invalid && frmEmployees.contact_number.$touched">Contact number field is required</span>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-3 control-label">Position</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="position" name="position" placeholder="Position" value="{{position}}"
                                        ng-model="employee.position" ng-required="true">
                                    <span class="help-inline"
                                        ng-show="frmEmployees.position.$invalid && frmEmployees.position.$touched">Position field is required</span>
                                    </div>
                                </div>
-->
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="btn-save" ng-click="save(modalstate, id)" ng-disabled="frmGoals.$invalid">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
   <!--      <script src="?= asset('js/bootstrap.min.js') ?>"></script> -->

        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
        <script src="<?= asset('app/controllers/goals.js') ?>"></script>
    </body>
</html>
