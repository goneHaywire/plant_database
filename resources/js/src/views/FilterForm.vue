<template>
  <div>
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Filter</h4>
          <div class="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Filter</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <form class="form-horizontal" method="get" action>
              <!-- @csrf -->
              <div class="card-body">
                <h4 class="card-title">Filter Species</h4>

                <div class="form-group row">
                  <label for="name" class="col-sm-3 text-right control-label col-form-label">
                    Species
                    Name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Species Name Here"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="cname" class="col-sm-3 text-right control-label col-form-label">
                    Common
                    Name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      name="common_name"
                      placeholder="Common Name Here"
                    />
                  </div>
                </div>

                <fieldset class="form-group">
                  <div class="row">
                    <legend class="col-sm-3 text-right control-label col-form-label">Albania</legend>
                    <div class="col-sm-9">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="in_albania"
                          id="in_albania"
                          value="1"
                          checked
                        />
                        <label class="form-check-label" for="in_albania">In Albania</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="in_albania"
                          id="not_in_albania"
                          value="2"
                        />
                        <label class="form-check-label" for="not_in_albania">Not in Albania</label>
                      </div>
                      <div class="form-check disabled">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="in_albania"
                          id="either"
                          value="3"
                        />
                        <label class="form-check-label" for="either">Either</label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <genera-for-family filter="true"></genera-for-family>
              </div>
              <div class="border-top">
                <div class="card-body">
                  <input type="submit" class="btn btn-primary" value="Filter" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>