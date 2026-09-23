#!/bin/zsh

cd "$(dirname "$0")/../.study-lab" || exit 1

(sleep 2; open "http://localhost:5173/") &
npm run dev
