<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="xenin, xenin.co, game servers, us game servers, garrysmod, us garrysmod servers, garrys mod, garrysmod, darkrp, Darkrp, darkRP, dark roleplay, dark role play">
    <meta name="description" content="{{ env('APP_NAME') }}'s the name, good server's the game.">
    <meta name="title" content="Xenin - Darkrp | Dark Roleplay | US darkrp | dark rp server">
    <meta property="og:site_name" content="{{ env('APP_NAME') }}">
    <meta property="og:title" content="Bringing what's right to gmod.">
    <meta property="og:description" content="{{ env('APP_NAME') }}'s the name, good server's the game.">
    <meta property="og:type" content="Product">
    <meta property="og:image" content="/assets/media/meta/promo.png">
    <meta property="og:url" content="https://xenin.co">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="@xeninco" name="twitter:site">
    <meta name="twitter:description" content="Darkrp that isn't shit.">
    <meta name="twitter:image" content="/assets/media/meta/promo.png">
    <meta name="theme-color" content="#955799">
    <title>Error: 403</title>
    <link href="{{ mix('assets/css/xenin.css') }}" rel="stylesheet">
    <link rel="icon" href="{{ '/assets/media/logo/favicon.png' }}">
    <style>
        body{
            background: #4f0d0d url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
        }
    </style>
</head>
<body>
<div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="container h-100 m-auto">
        <div class="d-flex flex-row">
            <img class="m-auto" src="{{ '/assets/media/logo/light.svg' }}" style="width: auto; height: 4.5rem;">
            <div class="d-flex flex-column flex-fill">
                <div class="text-light">
                    <h2>Error Code: 500</h2>
                    <h4>Something wen't wrong on our end. Nothing to do with you.</h4>
                    @if(!empty(Sentry::getLastEventID()))
                        <p>Please send this ID with your support request: <code style="background: rgba(0, 0, 0, 0.5); padding: 0.2rem;">{{ Sentry::getLastEventID() }}</code>.</p>
                    @endif
                    <p>If you're having any other issues feel free to contact us on <a href="{{ route('discord') }}" class="text-light font-weight-bold">discord</a> :)</p>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.ravenjs.com/2.3.0/raven.min.js"></script>
<script>
    @if(!empty(Sentry::getLastEventID()))
    @auth
    Raven.showReportDialog({
        eventId: '{{ Sentry::getLastEventID() }}',

        // use the public DSN (dont include your secret!)
        dsn: 'https://15d9e8de13ea45a28e89829207aa6308@sentry.io/1284427',
        user: {
            'name': '{{ Auth::user()->name }}'
        }
    });
    @endauth
    @guest
    Raven.showReportDialog({
        eventId: '{{ Sentry::getLastEventID() }}',

        // use the public DSN (dont include your secret!)
        dsn: 'https://15d9e8de13ea45a28e89829207aa6308@sentry.io/1284427'

    });
    @endguest
    @endif
</script>
</body>
</html>