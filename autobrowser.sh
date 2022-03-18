#!/bin/bash

sleep 60s
kill -9 $(ps -x | grep firefox)
xfce4-terminal -e 'bash -c "firefox -url localhost; exec bash"'
sleep 10s
xdotool search --sync --onlyvisible --class "Firefox" windowactivate key F11