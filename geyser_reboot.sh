#!/bin/sh
USERNAME='minecraft'
SERVICE'=geyser-738.jar'
SCNAME='geyser'
GEY_PATH='/opt/mc/server/geyser'
 
cd $GEY_PATH
 
ME=`whoami`
 
if [ $ME == $USERNAME ] ; then
  if pgrep -u $USERNAME -f $SERVICE > /dev/null
    then
      echo "Stopping $SERVICE"
      sleep 5
      screen -p 0 -S $SCNAME -X eval 'stuff "geyser stop"\015'
      sleep 10
      while [ -n "$(screen -list | grep -o "${SCREEN_NAME}")" ]
        do
          screen -p 0 -S $SCNAME -X eval 'stuff ""\015'
          sleep 10
      done
      echo "Stopped GeyserMC"
    else
      echo "$SERVICE was not runnning."
  fi
else
  echo "Please run the" $USERNAME "user."
fi