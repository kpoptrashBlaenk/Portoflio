<?php

use JetBrains\PhpStorm\NoReturn;

function basePath($path): string
{
    return BASE_PATH . $path;
}

#[NoReturn] function redirect($path): void
{
    header("Location: {$path}");
    exit();
}
