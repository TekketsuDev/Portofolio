#!/bin/bash
    #Define variables
    currentDir=$(pwd) 
    echo "$currentDir"

    read newPartial 

    searchDir(){
        for existingDir in "${allPartials[@]}"; do
            echo "$existingDir"
        done
    }

    #find allPartials

    findPartials(){
            if [ -e $newPartial ]
            then
                echo "element $newPartial"
            else
                echo "file is not a directory"

            fi
    }
    allPartials="$(findPartials)"


    #create partial folder if the dir dont exist
        echo "this is a new line" >> "$existingDir"/"$newPartial".scss
