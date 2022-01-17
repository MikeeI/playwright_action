#!/bin/sh
for n in {1..4}; do
    echo "View_$n"
    node view_$( printf %01d "$n" ).js
done
