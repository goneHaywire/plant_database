@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Genera</h4>
                <a href="{{ route('genera.create') }}" class="btn btn-success ml-4">Add Genus</a>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Genera</li>
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
                        <h5 class="card-title">All Genera</h5>
                        <genera-index></genera-index>
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
