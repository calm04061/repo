#!/bin/bash

function clean(){
	count=0

	for i in `ls --sort=time`
	do

		if [ ".git" != $i ]; then
			#sleep 0.2
			if [ -d $i ]; then
				echo "文件夹"`pwd`/$i
				cd $i
				clean "$i"
				cd ../
			elif [ $count -gt 20 ]; then
				count=$[$count+1]
				echo -e "$count\t`pwd`/$i delete"
				rm -rf $i
			else
				echo -e "$count\t`pwd`/$i"
				count=$[$count+1]
			fi
		fi
	done
}
clean 
