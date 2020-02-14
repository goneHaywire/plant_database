@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Genus {{ $genus->name }}</h4>
                <a href="{{ route('plants.create') }}" class="btn btn-info ml-4">Update Genus</a>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Genera</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $genus->name }}</li>
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
                        <h5 class="card-title">{{ $genus->name }} Information</h5>
                        <hr>

                        <h6>Family Name:</h6>
                        <p>{{ $genus->family->name }}</p>

                        <h6>Species for {{ $genus->name }}</h6>
                        <plants-for-genera-table genus="{{ $genus->id }}" genus_name="{{ $genus->name }}"></plants-for-genera-table>
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
