@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Plants</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Plants</li>
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
                        <div class="table-responsive">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Genus</th>
                                    <th>Family</th>
                                    <th>Common Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($plants as $plant)
                                    <tr>
                                        <td>{{ $plant->id }}</td>
                                        <td>{{ $plant->genus->name }} {{ $plant->name }}</td>
                                        <td>{{ $plant->genus->name }}</td>
                                        <td>{{ $plant->family->name }}</td>
                                        <td>{{ $plant->common_name }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Genus</th>
                                    <th>Family</th>
                                    <th>Common Name</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        {{ $pagination->links() }}

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
