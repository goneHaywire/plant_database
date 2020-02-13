@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Families</h4>
                <a href="{{ route('families.create') }}" class="btn btn-success ml-4">Add Family</a>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Families</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">All Families</h5>
                        <families-index></families-index>
                    </div>
                </div>
            </div>
        </div>
    </div>
@section('scripts')
    @parent
{{--    <script>--}}
{{--        $('#zero_config').DataTable();--}}
{{--    </script>--}}
@endsection
@endsection
