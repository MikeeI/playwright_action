#!/bin/sh
for n in {1..4}; do
    node view_$( printf %01d "$n" ).js
done
