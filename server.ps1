$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Serveur actif : http://localhost:$port/"

$root = $PWD.Path

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq "/" -or $path -eq "") {
            $path = "/index.html"
        }

        $localPath = [System.IO.Path]::Combine($root, $path.TrimStart('/').Replace('/', '\'))

        if ([System.IO.File]::Exists($localPath)) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            if ($localPath.EndsWith(".html")) {
                $response.ContentType = "text/html; charset=utf-8"
            } elseif ($localPath.EndsWith(".css")) {
                $response.ContentType = "text/css; charset=utf-8"
            } elseif ($localPath.EndsWith(".js")) {
                $response.ContentType = "application/javascript; charset=utf-8"
            } elseif ($localPath.EndsWith(".png")) {
                $response.ContentType = "image/png"
            } elseif ($localPath.EndsWith(".jpg") -or $localPath.EndsWith(".jpeg")) {
                $response.ContentType = "image/jpeg"
            } elseif ($localPath.EndsWith(".pdf")) {
                $response.ContentType = "application/pdf"
            }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Introuvable")
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
        $response.Close()
    } catch {
        # handle client disconnect
    }
}
