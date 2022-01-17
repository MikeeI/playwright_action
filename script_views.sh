#!/bin/sh
for n in {1..20}; do
    node view_$( printf %01d "$n" ).js
done
