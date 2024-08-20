<?php

function getTextFileContent($filePath): void
{

    if (file_exists($filePath)) {
        $content = file_get_contents($filePath);

        echo json_encode(['content' => $content], JSON_THROW_ON_ERROR);
    } else {
        echo json_encode(['error' => 'Key not found'], JSON_THROW_ON_ERROR);
    }
}


$filePath = match ($_GET['key']) {
    'github' => basePath('notImportant/github.txt'),
    default => '',
};

getTextFileContent($filePath);
exit;
