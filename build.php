<?php

$tabs = scandir(__DIR__ . '/tabs');

$collator = (new Collator('hu_HU'))->sort($tabs);

$tabs = array_filter($tabs, fn ($tab) => strlen($tab) > 2);

$tabs = array_map(fn ($value) => Normalizer::normalize($value), $tabs);

$tabs = array_values($tabs);

file_put_contents(__DIR__ . "/tablist.json", json_encode($tabs, JSON_PRETTY_PRINT));