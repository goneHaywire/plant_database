<template>
  <div>
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Add Genera</h4>
          <div class="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Add Genera</li>
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
            <form class="form-horizontal" method="post" action>
              <!-- @csrf -->
              <div class="card-body">
                <h4 class="card-title">Genera Data</h4>
                <div class="form-group row">
                  <label
                    for="fname"
                    class="col-sm-3 text-right control-label col-form-label"
                  >Genera Name</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Genera Name Here"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 text-right control-label col-form-label">Family Name</label>
                  <div class="col-md-9">
                    <select
                      name="family"
                      class="select2 form-control custom-select"
                      style="width: 100%; height:36px;"
                      required
                    >
                      <!-- <option selected disabled>Select Family</option>@foreach($families as $family) -->
                      <!-- <option value="{{ $family->id }}">{{ $family->name }}</option>@endforeach -->
                    </select>
                  </div>
                </div>
              </div>
              <div class="border-top">
                <div class="card-body">
                  <input type="submit" class="btn btn-primary" value="Create" />
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