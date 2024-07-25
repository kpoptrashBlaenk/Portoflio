<?php

namespace Core;

use JetBrains\PhpStorm\NoReturn;

class Router
{
    protected array $routes = [];

    public function go($uri, $controller): Router
    {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller
        ];

        return $this;
    }

    public function route($uri)
    {
        foreach ($this->routes as $route) {
            if ($route['uri'] === $uri) {
                return require basePath('controllers/' . $route['controller']);
            }
        }
        $this->abort(404);
    }

    #[NoReturn] protected function abort($code): void
    {
        http_response_code($code);
        require basePath("controllers/$code.php");
        die();
    }
}
