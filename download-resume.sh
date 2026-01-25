#!/bin/bash

pnpm static-tw
pnpm html-export-pdf-cli ./static/resume.html -o resume.pdf --printBackground
