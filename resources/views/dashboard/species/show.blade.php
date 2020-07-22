@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Species {{ $specie->specie_name }}</h4>
{{--                <a href="{{ route('species.create') }}" class="btn btn-info ml-4">Update Species</a>--}}
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Species</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $specie->specie_name }}</li>
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
                        <h5 class="card-title">{{ $specie->genera->name }} {{ $specie->specie_name }} Information</h5>
                        <hr>
{{--                        <test></test>--}}
                        <species-show specie="{{ $specie->specie_name }}" genus="{{ $specie->genera->name }}" family="{{ $specie->genera->family->name }}"></species-show>

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
