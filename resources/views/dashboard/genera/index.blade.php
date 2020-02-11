@extends('layouts.dashboard')

@section('content')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Genera</h4>
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
                        <div class="table-responsive">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Family</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($genera as $genus)
                                    <tr>
                                        <td>{{ $genus->id }}</td>
                                        <td>{{ $genus->name }}</td>
                                        <td>{{ $genus->family->name }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Family</th>
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
