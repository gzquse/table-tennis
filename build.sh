#!/bin/bash

ng build --output-path docs --base-href ./
cp docs/index.html docs/404.html
echo lubbocktabletennis.com > docs/CNAME
