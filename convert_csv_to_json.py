# 2023/09/25
# This .py file is to convert the csv file, GTMSA_course_list.csv, into json format.
# After executing this file, the exported json file should be imported to the javascript for front-end
# Created by Yu-Ching Chen

# library import
import csv 
import json

# function to convert a csv to json, using 'course id' in the csv file as primary key
# taking the file paths as arguments
def export_json_from_csv(csv_file_path, json_file_path):
    # read the csv file and add to data
    data = {}
    print("Read the file: {}".format(csv_file_path))
    with open(csv_file_path) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for rows in csv_reader:
            id = rows['course id'] # course id: the unique identifier for each course that only exists in the GTMSA_course_list.csv
            rows['course code'] = rows['course code'].upper() # convert letter in course code into upper case
            data[id] = rows

    # create new json file and write data on it
    with open(json_file_path, 'w') as json_file:
        json_file.write(json.dumps(data, indent=4)) # indent=4: make it more readable and pretty
    print("Export the json file: {}".format(json_file_path))

# to call the converting function
if __name__=="__main__":
    csv_file_path = 'GTMSA_course_list.csv'
    json_file_path = 'GTMSA_course_list.json'
    export_json_from_csv(csv_file_path, json_file_path)