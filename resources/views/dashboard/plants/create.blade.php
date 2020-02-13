@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Add Species</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Add Species</li>
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
                    <form class="form-horizontal" method="post" action="{{ route('plants.store') }}">
                        @csrf
                        <div class="card-body">
                            <h4 class="card-title">Species Data</h4>
                            <div class="form-group row">
                                <label for="name" class="col-sm-3 text-right control-label col-form-label">Species Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="name" name="name" required placeholder="Species Name Here">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="cname" class="col-sm-3 text-right control-label col-form-label">Common Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="cname" name="common_name" placeholder="Common Name Here">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-3 text-right control-label col-form-label">In Albania</label>
                                <div class="col-md-9 d-flex align-items-center">
                                    <div class="custom-control custom-checkbox mr-sm-2  pl-1">
                                        <input type="checkbox" class="custom-control-input" name="in_albania" id="in_albania">
                                        <label class="custom-control-label" for="in_albania"></label>
                                    </div>
                                </div>
                            </div>

                            <generas-for-family></generas-for-family>
                        </div>
                        <div class="border-top">
                            <div class="card-body">
                                <input type="submit" class="btn btn-primary" value="Create">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
