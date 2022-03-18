#!/bin/bash

cd /home/itts/PeopleReport
xfce4-terminal -e 'bash -c "sudo npm start; exec bash"'
xfce4-terminal -e 'bash -c "unclutter -idle 0.5 -root; exec bash"'