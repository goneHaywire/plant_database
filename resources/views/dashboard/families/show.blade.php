@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Family {{ $family->name }}</h4>
                <a href="{{ route('plants.create') }}" class="btn btn-info ml-4">Update Family</a>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Families</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $family->name }}</li>
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
                        <h5 class="card-title">{{ $family->name }} Information</h5>
                        <hr>
                        <h6>Family Description:</h6>
                        @isset( $family->description )
                            <p>{{ $family->description }}</p>
                        @else
                            <p class="text-muted">This family has no description.</p>
                        @endisset

                        <h6>Family Leaves Description:</h6>
                        @isset( $family->leaves )
                            <p>{{ $family->leaves }}</p>
                        @else
                            <p class="text-muted">This family has no leaves description.</p>
                        @endisset

                        <h6>Family Flowers Description:</h6>
                        @isset( $family->flowers )
                            <p>{{ $family->flowers }}</p>
                        @else
                            <p class="text-muted">This family has no flowers description.</p>
                        @endisset

                        <h6>Family Seeds Description:</h6>
                        @isset( $family->seeds )
                            <p>{{ $family->seeds }}</p>
                        @else
                            <p class="text-muted">This family has no seeds description.</p>
                        @endisset

                        <h6>Family Characteristics:</h6>
                        @isset( $family->characteristics )
                            <p>{{ $family->characteristics }}</p>
                        @else
                            <p class="text-muted">This family has no characteristics information.</p>
                        @endisset

                        <h6>Genera for {{ $family->name }}</h6>
                        <genera-for-family-table family="{{ $family->id }}"></genera-for-family-table>
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
